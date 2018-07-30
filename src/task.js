import React from 'react';

const Task = ({task, onClick}) => {
    return (
        <div>
            - <input type="checkbox" checked={task.isDone} onChange={() => onClick(task.id)} /> {task.label}
        </div>
    )
}

export default Task;