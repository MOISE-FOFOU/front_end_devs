import { useState } from "react";

// Renommez Coloraton en Coloration
import Coloration from "./changeback";
  

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [currentColor, setCurrentColor] = useState("blue");
  const handleClickAdd = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleClickDelete = (index) => {
    const filtered = tasks.filter((_, i) => i !== index);
    setTasks(filtered);
  };

  return (
    <>
      <div
        style={{
            color:"white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "2px solid red",
          width: "700px",
          margin: "auto",
          backgroundColor: currentColor,
          position: "relative",
          top: "100px",
        }}
      >
        <h1>TODO LIST</h1>
        <div>
          <div>
            <input
              type="text"
              placeholder="ajouter une tache"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <input type="button" value="ADD" onClick={handleClickAdd} />
          </div>
          <div>
            <ul style={{ listStyleType: "none" }}>
              {tasks.map((current, index) => (
                <li
                  key={index}
                  style={{
                    marginTop: "10px",
                  }}
                >
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-task" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5zM3 3H2v1h1z"/>
  <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1z"/>
  <path fill-rule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5zM2 7h1v1H2zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm1 .5H2v1h1z"/>
</svg>                  {current}
                  <button onClick={() => handleClickDelete(index)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
</svg>                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <Coloration value="blue" setCurrentColor={setCurrentColor}/>
          <Coloration value="black" setCurrentColor={setCurrentColor}/>
          <Coloration value="red" setCurrentColor={setCurrentColor}/>
        </div>
      </div>
    </>
  );
};

export default TodoList;
