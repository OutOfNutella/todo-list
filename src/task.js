import React from 'react';

export default class Task extends React.PureComponent {
    componentDidUpdate(prevProps) {
        console.log(prevProps, this.props, prevProps === this.props);
    }

    handleChange = () => this.props.onStatusChange(this.props.task.id);

    render() {
        const { task, onClick } = this.props;
        console.log(task.id, 'rerendered');
        return (
            <React.Fragment>
            - <input 
                id={task.id}
                type="checkbox"
                checked={task.isDone}
                onChange={this.handleChange}
            /> 
            <label htmlFor={task.id}>{task.label}</label> <br/>
        </React.Fragment>
    
        );
    }

}