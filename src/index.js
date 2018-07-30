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

    handleClick(id) {
        const todoList = [...this.state.todoList];
        const task = todoList.find(task => task.id === id);
        if (task) {
            task.isDone = !task.isDone;
            this.setState({todoList});
        }
    }

    render() {
        return (
            <div>
                <div>Tasks</div>
                <div className="stats">
                    <Stats 
                        countDone={this.state.todoList.filter(toDo => toDo.isDone).length}
                        countUnDone={this.state.todoList.filter(toDo => !toDo.isDone).length}
                    />
                </div>
                <div className="undone-list">
                    <div>Undone</div>
                    <ToDoList onClick={(id) => this.handleClick(id)} tasks={this.state.todoList.filter(toDo => !toDo.isDone)}/>
                </div>
                <div className="done-list">
                    <div>Done</div>
                    <ToDoList onClick={(id) => this.handleClick(id)} tasks={this.state.todoList.filter(toDo => toDo.isDone)}/>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
  