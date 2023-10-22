import React,{useState} from 'react';
import Todo from './ToDo';
import './App.css';

function App() {
  const [todos,setTodos] = useState([]);
  const [newTodo,setNewTodo] = useState('');

  const addTodo =() =>{
    if(newTodo.trim() !== ''){
      setTodos([...todos,{id:Date.now(),text: newTodo}]);
      setNewTodo('');
    }
  };

  const deleteTodo = (id) =>{
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return(
    <div className="app">
      <h1>React Todo App</h1>
      <div className="input-container">
        <input type='text' placeholder='New To-Do' value={newTodo} onChange={(e) => setNewTodo(e.target.value)}/>
        <button onClick={addTodo}>Add To-Do</button>
      </div>
      <div className='todos'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={deleteTodo}/>
        ))}
      </div>
    </div>
  );
}

export default App;
