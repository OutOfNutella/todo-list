import React from 'react';
import Task from './task';

class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }

    taskClicked(id) {
        this.props.onClick(id);
    }

    render() {
        return (
            <div>
                {this.props.tasks.map((task) => 
                    <Task 
                        key={task.id}
                        task={task}
                        onClick={() => this.taskClicked(task.id)}
                    />
                )}
            </div>
        )
    }
}

export default ToDoList;