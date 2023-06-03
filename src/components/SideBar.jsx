import React from "react";
import { useState, useEffect } from "react";
import { rdb, db } from "../config/firebase";
import { getDocs, collection, doc, query } from "firebase/firestore";
import { onValue, ref } from "firebase/database";

const SideBar = () => {
  const [projects, setProjects] = useState([]);

  const projectsCallback = (snapshot) => {
    const data = snapshot.val();

    if (snapshot.exists()) {
      const projectsArray = Object.values(data);
      setProjects(projectsArray);
    }
  };

  useEffect(() => {
    const query = ref(rdb, "project");

    onValue(query, projectsCallback);

    return () => {};
  }, []);

  return (
    <div className="bg-[#5FB37F] h-screen">
      <button>Home</button>
      <br />
      <button>My Tasks</button>

      <div className="flex">
        <h3>Projects</h3>
        <button>+</button>
      </div>

      <hr />
      <div className="">
        <h3>Random Project</h3>

        {projects.map((project) => (
          <div>
            <h3> {project.project_name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
