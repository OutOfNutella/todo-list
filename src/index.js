import React from 'react';
import ReactDOM from 'react-dom';
import ToDoList from './todolist';
import Stats from './stats';
import './index.css';

// ========================================

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [{
                'id': 0,
                'label': 'Learn react',
                'isDone': false
            }, {
                'id': 1,
                'label': 'Install all VM',
                'isDone': true
            }, {
                'id': 2,
                'label': 'Go to lunch together',
                'isDone': false
            }]
        };
   }

    handleStatusChange = (id) => {
        const todoList = this.state.todoList;
        const task = todoList.find(task => task.id === id);
        if (task) {
            task.isDone = !task.isDone;
            this.setState({todoList});
        }
    }

    render() {
        const doneTasks = this.state.todoList.filter(toDo => toDo.isDone),
              undoneTasks = this.state.todoList.filter(toDo => !toDo.isDone);
        return (
            <div>
                <div>Tasks</div>
                <div className="stats">
                    <Stats 
                        countDone={doneTasks.length}
                        countUnDone={undoneTasks.length}
                    />
                </div>
                <div className="undone-list">
                    <ToDoList label="undone" onStatusChange={this.handleStatusChange} tasks={doneTasks}/>
                </div>
                <div className="done-list">
                    <ToDoList label="done" onStatusChange={this.handleStatusChange} tasks={undoneTasks}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
  