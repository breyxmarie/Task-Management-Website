import { useState, useEffect } from "react";
import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import { rdb, db } from "../config/firebase";
import { getDocs, collection, doc, query } from "firebase/firestore";
import { onValue, ref } from "firebase/database";
import Popup from "reactjs-popup";
import PopUpShowTask from "./PopUpShowTask";

const MyTask = () => {
  const [tasksList, setTasksList] = useState([]);
  const [projects, setProjects] = useState([]);

  const tasksListColRef = collection(db, "tasks");
  const projectListColRef = collection(db, "project");
  const taskDocRef = doc(tasksListColRef, "task_id");
  const projectDocRef = doc(projectListColRef, "project_id");

  async function fetchData() {
    // Query the tasks collection
    const tasksQuery = query(collection(db, "tasks"));

    // Query the projects collection
    const projectsQuery = query(collection(db, "project"));

    // Query the project_task collection
    const projectTaskQuery = query(collection(db, "project_task"));

    // Get the snapshots of all three queries
    const [tasksSnapshot, projectsSnapshot, projectTaskSnapshot] =
      await Promise.all([
        getDocs(tasksQuery),
        getDocs(projectsQuery),
        getDocs(projectTaskQuery),
      ]);

    // Create a map to store project data
    const projectMap = {};

    // Iterate over the projects documents
    projectsSnapshot.forEach((projectDoc) => {
      const projectData = projectDoc.data();
      const projectId = projectDoc.project_id;

      // Store the project data in the projectMap using the project ID as the key
      projectMap[projectId] = projectData;
    });

    // Perform the join operation
    const joinedData = [];

    // Iterate over the project_task documents
    projectTaskSnapshot.forEach((projectTaskDoc) => {
      const projectTaskData = projectTaskDoc.data();
      const projectId = projectTaskData.project_id;
      const taskId = projectTaskData.task_id;

      // Retrieve the project data and task data based on the project ID and task ID
      const projectData = projectMap[projectId];
      const taskData = tasksSnapshot.docs
        .find((taskDoc) => taskDoc.id === taskId)
        ?.data();

      if (projectData && taskData) {
        // Merge the task data with the corresponding project data
        const mergedData = { ...taskData, ...projectData };
        joinedData.push(mergedData);
      }
    });

    console.log("Joined Data:", joinedData);
  }

  fetchData();

  const projectsCallback = (snapshot) => {
    const data = snapshot.val();

    if (snapshot.exists()) {
      const projectsArray = Object.values(data);
      setProjects(projectsArray);
    }
  };

  const tasksCallback = (snapshot) => {
    const data = snapshot.val();

    if (snapshot.exists()) {
      const tasksArray = Object.values(data);
      setTasksList(tasksArray);
    }
  };

  useEffect(() => {
    // const getTasksList = async () => {
    //   //read the date
    //   // set the task list
    //   try {
    //     const data = await getDocs(tasksListColRef);
    //     const filteredData = data.docs.map((doc) => ({
    //       ...doc.data(),
    //       id: doc.id,
    //     }));
    //     console.log(filteredData);
    //     setTasksList(filteredData);
    //   } catch (errss) {
    //     console.error(errss);
    //   }
    // };
    // fetchData();
    // getTasksList();

    // const query = ref(rdb, "project");
    // const taskquery = ref(rdb, "tasks");

    // const projectsCallback = (snapshot) => {
    //   const data = snapshot.val();

    //   if (snapshot.exists()) {
    //     Object.values(data).map((project) => {
    //       setProjects((projects) => [...projects, project]);
    //     });
    //   }
    // };

    // const tasksCallback = (snapshot) => {
    //   const data = snapshot.val();

    //   if (snapshot.exists()) {
    //     Object.values(data).map((task) => {
    //       setTasksList((tasks) => [...tasks, task]);
    //     });
    //   }
    // };

    const query = ref(rdb, "project");
    const taskquery = ref(rdb, "tasks");
    onValue(query, projectsCallback);
    onValue(taskquery, tasksCallback);
    return () => {};
  }, []);

  return (
    <div className="bg-[#00968B] font-Mate h-screen ">
      <NavBar />
      <div className="flex flex-row">
        <div className="basis-1/6">
          <SideBar />
        </div>
        <div className="basis-5/6">
          My Task
          <br />
          Filter
          <div class="relative">
            <input type="checkbox" id="sortbox" class="hidden absolute" />
            <label
              for="sortbox"
              class="flex items-center space-x-1 cursor-pointer"
            >
              <span class="text-lg">Sort By</span>
              <svg
                class="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </label>

            <div
              id="sortboxmenu"
              class="absolute mt-1 right-1 top-full min-w-max shadow rounded opacity-0 bg-gray-300 border border-gray-400 transition delay-75 ease-in-out z-10"
            >
              <ul class="block text-right text-gray-900">
                <li>
                  <a href="#" class="block px-3 py-2 hover:bg-gray-200">
                    Featured
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-3 py-2 hover:bg-gray-200">
                    Newest
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-3 py-2 hover:bg-gray-200">
                    Price: Low to High
                  </a>
                </li>
                <li>
                  <a href="#" class="block px-3 py-2 hover:bg-gray-200">
                    Price: High to Low
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <div className="flex flex-items">
            <h3 class="ml-[550px]">Project</h3>
            <div class="ml-5 w-0.5 h-6 bg-white">
              <h3 className="w-20 ml-10">Status</h3>
            </div>
            <div class="ml-[120px] w-0.5 h-6 bg-white">
              <h3 className="w-20 ml-10">Due Date</h3>
            </div>
          </div>
          {/* {projects.map((project) => (
            <div>
              <h3> {project.project_name}</h3>
            </div>
          ))} */}
          <hr />
          <PopUpShowTask task={tasksList} />
          {tasksList.map((task) => (
            <div className="flex flex-item">
              <input type="checkbox" />
              <PopUpShowTask task={task} />
              <div className="flex flex-items basis-2/5">
                <center>
                  <a>
                    <button>
                      <h3></h3>
                    </button>
                  </a>
                </center>
              </div>
              <h3> {task.project_name}</h3>
              <div class="ml-[24.5px] w-0.5 h-6 bg-white">
                <center>
                  <h3 class="justify-center"> {task.status}</h3>
                </center>
              </div>
              <div class="ml-[120px] w-0.5 h-6 bg-white">
                <center>
                  <h3 class="justify-center"> {task.end_date}</h3>
                </center>
              </div>
            </div>
          ))}
          ;
        </div>
      </div>

      <Popup
        trigger={<button className="button"> Open Modal </button>}
        modal
        nested
      >
        {(close) => (
          <div className="modal">
            <button className="close" onClick={close}>
              &times;
            </button>
            <div className="header"> Modal Title </div>
            <div className="content">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a
              nostrum. Dolorem, repellat quidem ut, minima sint vel eveniet
              quibusdam voluptates delectus doloremque, explicabo tempore dicta
              adipisci fugit amet dignissimos?
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequatur sit commodi beatae optio voluptatum sed eius cumque,
              delectus saepe repudiandae explicabo nemo nam libero ad,
              doloribus, voluptas rem alias. Vitae?
            </div>
            <div className="actions">
              <Popup
                trigger={<button className="button mr-10"> Trigger </button>}
                position="top center"
                nested
              >
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Beatae magni omnis delectus nemo, maxime molestiae dolorem
                  numquam mollitia, voluptate ea, accusamus excepturi deleniti
                  ratione sapiente! Laudantium, aperiam doloribus. Odit, aut.
                </span>
              </Popup>
              <button
                className="button"
                onClick={() => {
                  console.log("modal closed ");
                  close();
                }}
              >
                close modal
              </button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default MyTask;
