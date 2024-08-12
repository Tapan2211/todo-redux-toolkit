import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodos, toggleTodos, deleteTodo } from './features/todosSlice';
import { useState } from 'react';

function App() {

  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const todos = useSelector(state => state.todos);

  const handleClick = () => {
    if (text.trim) {
      dispatch(addTodos(text));
      setText('');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Todo List</h1>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Add a new Todo'
          className='input' />

        <button className='button' onClick={handleClick}>Add Todo</button>

        <ul>
          {
            todos.map(todo => (
              <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                <span onClick={() => dispatch(toggleTodos(todo.id))}>{todo.text}</span>
                <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
              </li>
            ))
          }
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
