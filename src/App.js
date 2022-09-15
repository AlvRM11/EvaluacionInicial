import { useState } from 'react';
import './App.css';
import TaskAdd from './componentes/TaskAdd';
import TaskList from './componentes/TaskList/TaskList'; //Por alguna razón no me deja utilizar el index.js de la carpeta TaskList

function App() {
  const [task, setTask] = useState('');

  return (
    <div className="App">
      <TaskAdd
        setTask = {setTask}
      />
      <TaskList
        task = {task}
      />
    </div>
  );
}

export default App;
