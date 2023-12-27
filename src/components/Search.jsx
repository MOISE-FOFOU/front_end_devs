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
                  {/* ... Votre code SVG ... */}
                  {current}
                  <button onClick={() => handleClickDelete(index)}>
                    {/* ... Votre code SVG ... */}
                  </button>
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
