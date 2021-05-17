import React from "react";

function inputContainer({addTask}) {
  function createAndAddTask(event) {
    // const inputField = event.target.parentElement.parentElement.children[0]
    const inputField = document.getElementById("inputField")
    const value = inputField.value
    addTask({description:value})
    inputField.value = ""
  }
  return (
    <div className="container-fluid d-flex align-items-center justify-content-between mb-5">
      <input
        type="text"
        className="form-control"
        placeholder="Enter New Task"
        id="inputField"
      />
      <button className="btn btn-success ms-3" onClick={createAndAddTask}>
        <i className="bi bi-plus"></i>
      </button>
    </div>
  );
}

export default inputContainer;
