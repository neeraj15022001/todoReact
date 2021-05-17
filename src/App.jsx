import React, {useState} from "react";
import "./App.css";
import Card from "./components/Card"
import InputContainer from "./components/inputContainer"
import PageHeading from "./components/PageHeading"

function App() {
  const [tasks, setTasks] = useState([])
  console.log(tasks)
  function addTask({description}) {
    setTasks(tasks => [...tasks,description])
  }
  return (
    <div className="App bg-dark">
      <PageHeading />
      <InputContainer addTask={addTask} />
      <div className="task-container container-fluid d-flex flex-column align-items-center justify-content-center">
        {tasks.map((item,index) => (
          <Card description={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
