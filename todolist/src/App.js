import './App.css';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [newToDo, setNewToDo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();

    const todoItem = {
      text: newToDo,
      complete: false
    }
    setTodos([...todos, todoItem]);

    setNewToDo("");
  }

  const handleToDoDelete = (delIndx) => {
    const filteredTodos = todos.filter((todos, i) => {
      return i !== delIndx;
    });
    setTodos(filteredTodos);
  }

  const handleToggleComplete = (idx) => {
    const updatedTodos = todos.map((todos, i) => {
      if (idx === i) {
        todos.complete = !todos.complete;
      }
      return todos;
    })
    setTodos(updatedTodos);
  }
  return (
    <div className="container">
      <form onSubmit={handleNewTodoSubmit}>

        <label htmlFor='todo' >Enter item</label>
        <input name='todo' type='text' value={newToDo} onChange={(e) => { setNewToDo(e.target.value) }} />

        <div>
          <button type="submit" className="btn btn-success mt-2">Submit</button>
        </div>

      </form>

      {

        todos.map((todo, i) => {

          return (<div key={i}>

            <h1>Todos</h1>
            <div className='d-flex' >
              <input onChange={(e) => { handleToggleComplete(idx) }} checked={todo.complete} type="checkbox" />

              {console.log(todo.complete)}
              <p style={todo.complete ? { textDecoration: "line-through" } : {}}>{todo.text}</p>
              <button onClick={(event) => handleToDoDelete(i)} className="btn btn-primary btn-sm">Delete</button>
            </div>

          </div>
          )
        })}

    </div >
  );
}
export default App;
