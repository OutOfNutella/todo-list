import React from 'react';
import Task from './task';

const TodoList = ({label, tasks, onStatusChange}) => 
    <React.Fragment>
        <h3>{label}</h3>
        {tasks.map((task) => 
            <Task 
                key={task.id}
                task={task}
                onStatusChange={onStatusChange}
            />
        )}
    </React.Fragment>
;

// TodoList.propTypes = {
//     tasks
// }


export default TodoList;