import './App.css';
import { ToDoList } from './ToDoList';
import todo from './todo.jpg';

function App() {
  return (
    <div className="App">
      <div className='conteiner'>
        <h1>Список дел на сегодня:</h1>
      </div>
      <div className='conteiner'>
        <img src={ todo } alt='cases' width='300px' />
      </div>
      <ToDoList/>
    </div>
  );
}

export default App;
