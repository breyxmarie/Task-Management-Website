import Popup from "reactjs-popup";

const PopUpShowTask = ({ task }) => {
  return (
    <Popup
      trigger={<button className="button"> {task.task_name}</button>}
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header flex">
            {" "}
            {task.task_name}
            <h3 class="ml-10">Project: {task.project_name}</h3>
          </div>
          <div className="content">
            Description
            <br />
            {task.description}
            <br />
            notes
            <br />
            {task.notes}
          </div>
          <div className="actions">
            <Popup
              trigger={<button className="button mr-10"> Trigger </button>}
              position="top center"
              nested
            >
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                magni omnis delectus nemo, maxime molestiae dolorem numquam
                mollitia, voluptate ea, accusamus excepturi deleniti ratione
                sapiente! Laudantium, aperiam doloribus. Odit, aut.
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
  );
};

export default PopUpShowTask;
