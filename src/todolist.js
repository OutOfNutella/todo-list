import React from 'react';
import Task from './task';

export default (props) => 
    <React.Fragment>
        {props.tasks.map((task) => 
            <Task 
                key={task.id}
                task={task}
                onClick={() => props.onClick(task.id)}
            />
        )}
    </React.Fragment>
