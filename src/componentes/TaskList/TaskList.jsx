import React from 'react';
import './TaskList.css';

const TaskList = (props) => {
  return (
    <div className='fondo'>
        <input type='checkbox' />
        <p>{props.task}</p>
        <button className='botonDelete'>Delete all done</button>
    </div>
  )
};

export default TaskList;