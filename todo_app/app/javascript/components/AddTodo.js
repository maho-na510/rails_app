import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FiSend } from 'react-icons/fi';

const InputAndButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const InputForName = styled.input`
  font-size: 20px;
  width: 100%;
  height: 40px;
  padding: 2px 7px;
`;

const Button = styled.button`
  font-size: 20px;
  border: none;
  border-radius: 3px;
  margin-left: 10px;
  padding: 2px 10px;
  background: #1E90FF;
  color: #fff;
  text-align: center;
  cursor: pointer;
  ${({ disabled }) => disabled && `
    opacity: 0.5;
    cursor: default;
  `}
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
  margin: 0 7px;
`;

toast.configure();

function AddTodo(props) {
  const initialTodoState = {
    id: null,
    name: "",
    completed: false
  };

  const [todo, setTodo] = useState(initialTodoState);

  const notify = (message, type) => {
    toast[type](message, {
      position: "bottom-center",
      hideProgressBar: true
    });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setTodo({ ...todo, [name]: value });
  };

  const saveTodo = () => {
    var data = {
      name: todo.name,
    };

    axios.post('/api/v1/todos', data)
    .then(resp => {
      setTodo({
        id: resp.data.id,
        name: resp.data.name,
        completed: resp.data.completed
      });
      notify("Todo successfully created!", "success");
      props.history.push("/todos");
    })
    .catch(error => {
      console.error("Error creating todo:", error);
      notify("Failed to create todo. Please try again.", "error");
    });
  };

  return (
    <>
      <h1>New Todo</h1>
      <InputAndButton>
        <InputForName
          type="text"
          required
          value={todo.name}
          onChange={handleInputChange}
          name="name"
        />
        <Button
          onClick={saveTodo}
          disabled={(!todo.name || /^\s*$/.test(todo.name))}
        >
          <Icon>
            <FiSend />
          </Icon>
        </Button>
      </InputAndButton>
    </>
  );
}

export default AddTodo;
