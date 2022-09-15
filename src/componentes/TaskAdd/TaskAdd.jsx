import React from 'react';
import './TaskAdd.css';

const TaskAdd = ({setTask}) => {

  const handleClick = () => {
  };

  return (
    <div>
      <h1>My task list Apps</h1>
      <input type='text' name='task' />
      <br />
      <button className='botonAdd' onClick={handleClick} >Add</button>
    </div>
  )
};

export default TaskAdd;