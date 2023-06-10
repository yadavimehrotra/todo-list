import React, { useState } from "react";
import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTask] = useState([]);

  function addTask() {
    if (!newTask) {
      alert("Enter an Item");
      return;
    }

    const task = {
      id: Math.floor(Math.random() * 1000),
      value: newTask,
    };

    setTask((oldList) => [...oldList, task]);

    setNewTask("");
    console.log(task);
  }
  function deleteTask(id) {
    const newArray = tasks.filter((task) => task.id !== id);
    setTask(newArray);
  }
  return (
    <div className="App">
      <h1>Todo List App </h1>
      <input
        type="text"
        placeholder="Add a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      ></input>
      <button onClick={() => addTask()}>Add</button>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              {task.value}
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
