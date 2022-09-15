import React from 'react';
import './TaskAdd.css';

const TaskAdd = () => {

  const handleClick = () => {
    console.log('hola');
  };

  return (
    <div>
      <h1>My task list Apps</h1>
      <input type='text' name='task' />
      <br />
      <button onClick={handleClick} >Add</button>
    </div>
  )
};

export default TaskAdd;