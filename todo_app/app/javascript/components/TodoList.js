import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import styled from 'styled-components'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import { AiFillEdit } from 'react-icons/ai'

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [searchName, setSearchName] = useState('');
  
    useEffect(() => {
      axios.get('/api/v1/todos.json')
        .then(resp => setTodos(resp.data))
        .catch(e => console.log(e));
    }, []);
  
    const removeAllTodos = () => {
      const sure = window.confirm('Are you sure?');
      if (sure) {
        axios.delete('/api/v1/todos/destroy_all')
          .then(resp => setTodos([]))
          .catch(e => console.log(e));
      }
    };
  
    const updateCompleted = (index, val) => {
      const data = { id: val.id, name: val.name, completed: !val.completed };
      axios.patch(`/api/v1/todos/${val.id}`, data)
        .then(resp => {
          const newTodos = [...todos];
          newTodos[index].completed = resp.data.completed;
          setTodos(newTodos);
        })
        .catch(error => {
          console.error("Error updating completed status:", error);
        });
    };
  
    return (
      <>
        <h1>Todo List</h1>
        <SearchAndButtton>
          <SearchForm
            type="text"
            placeholder="Search todo..."
            onChange={event => setSearchName(event.target.value)}
          />
          <RemoveAllButton onClick={removeAllTodos}>
            Remove All
          </RemoveAllButton>
        </SearchAndButtton>
  
        <div>
          {todos
            .filter(val => !searchName || val.name.toLowerCase().includes(searchName.toLowerCase()))
            .map((val, key) => (
              <Row key={key}>
                {val.completed ? (
                  <CheckedBox>
                    <ImCheckboxChecked onClick={() => updateCompleted(key, val)} />
                  </CheckedBox>
                ) : (
                  <UncheckedBox>
                    <ImCheckboxUnchecked onClick={() => updateCompleted(key, val)} />
                  </UncheckedBox>
                )}
                <TodoName completed={val.completed}>{val.name}</TodoName>
                <Link to={`/todos/${val.id}/edit`}>
                  <EditButton>
                    <AiFillEdit />
                  </EditButton>
                </Link>
              </Row>
            ))}
        </div>
      </>
    );
  }
  
  export default TodoList;