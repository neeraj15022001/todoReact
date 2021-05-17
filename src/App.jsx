import React, { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import InputContainer from "./components/inputContainer";
import PageHeading from "./components/PageHeading";

function App() {
  const [tasks, setTasks] = useState([]);
  function addTask({ description }) {
    setTasks((tasks) => [...tasks, description]);
  }
  function removeTask(content) {
    var array = [...tasks]; // make a separate copy of the array
    var index = array.indexOf(content);
    if (index !== -1) {
      array.splice(index, 1);
      setTasks(() => array);
    }
  }
  return (
    <div className="App bg-dark">
      <PageHeading />
      <InputContainer addTask={addTask} />
      <div className="task-container container-fluid d-flex flex-column align-items-center justify-content-center">
        {tasks.map((item, index) => (
          <Card description={item} key={index} removeTask={removeTask} />
        ))}
      </div>
    </div>
  );
}

export default App;
