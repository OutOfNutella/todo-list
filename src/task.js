import React from 'react';

export default ({task, onClick}) =>
    <React.Fragment>
        - <input 
            name={task.id}
            type="checkbox"
            checked={task.isDone}
            onChange={onClick}
        /> 
        <label htmlFor={task.id}>{task.label}</label> <br/>
    </React.Fragment>
