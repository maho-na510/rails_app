import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const InputForName = styled.input`
  font-size: 20px;
  width: 100%;
  height: 40px;
  padding: 2px 7px;
  margin: 12px 0;
`;

const CurrentStatus = styled.div`
  font-size: 19px;
  margin: 8px 0 12px 0;
  font-weight: bold;
`;

// ... (同じスタイルの定義)

toast.configure();

function EditTodo(props) {
  const [currentTodo, setCurrentTodo] = useState({ id: null, name: "", completed: false });

  // ...

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentTodo({ ...currentTodo, [name]: value });
  };

  const updateCompleted = () => {
    const updatedCompletedStatus = !currentTodo.completed;
    var data = { id: currentTodo.id, name: currentTodo.name, completed: updatedCompletedStatus };

    axios.patch(`/api/v1/todos/${currentTodo.id}`, data)
      .then(resp => setCurrentTodo(resp.data))
      .catch(error => {
        console.error("Error updating completed status:", error);
        notify("Failed to update completed status. Please try again.", "error");
      });
  };

  // ...

  return (
    <>
      <h1>Editing Todo</h1>
      <div>
        <div>
          <label htmlFor="name">Current Name</label>
          <InputForName
            type="text"
            id="name"
            name="name"
            value={currentTodo.name}
            onChange={handleInputChange}
          />
          <div>
            <span>Current Status</span><br/>
            <CurrentStatus>
              {currentTodo.completed ? "Completed" : "Uncompleted"}
            </CurrentStatus>
          </div>
        </div>

        <CompeletedButton
          onClick={updateCompleted}
        >
          {currentTodo.completed ? "Mark as Uncompleted" : "Mark as Completed"}
        </CompeletedButton>
        <EditButton
          type="submit"
          onClick={updateTodo}
        >
          Update
        </EditButton>
        <DeleteButton
          className="badge badge-danger mr-2"
          onClick={deleteTodo}
        >
          Delete
        </DeleteButton>
      </div>
    </>
  );
}

export default EditTodo;
