import React, { Component } from 'react';
import TaskService from '../services/TaskService';


class ListTaskComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tasks:[]
        }
        this.addTask = this.addTask.bind(this);
        this.editTask = this.editTask.bind(this);
        this.deleteTask= this.deleteTask.bind(this);
    }

    deleteTask(id) {
        TaskService.deleteTask(id).then( res => {
            this.setState({tasks: this.state.tasks.filter(task => task.id !== id)});
        });
    }
    viewTask(id) {
        this.props.history.push(`/view-task/${id}`);
    }
    editTask(id) {
        this.props.history.push(`/add-task/${id}`);
    }
    componentDidMount() {
        TaskService.getTasks().then((res) => {
            this.setState({tasks: res.data})
        });
    }

    addTask() {
        this.props.history.push('/add-task/_add');
    }



    render() {
        return (
            <div>
                <h1 className="text-center"> Tasks List</h1>
                <div className = "row">
                    
                    <a target="_blank" href="http://localhost:8080/home">Logout</a>
                    <a target="_blank" href="https://springboot-sam.herokuapp.com">Logout From Heroku</a>

                 </div>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTask}> Add Task</button>
                 </div>
                 <br></br>
                 <div className = "row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <td> Task Id</td>
                            <td> Task Name</td>
                            <td> Task Description</td>
                            <td> Task Email</td>
                            <td> Task Severity</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.tasks.map(
                                task =>
                                <tr key={task.id}>
                                    <td>{task.id}</td>
                                    <td>{task.name}</td>
                                    <td>{task.description}</td>
                                    <td>{task.email}</td>
                                    <td>{task.severity}</td>
                                    <td>
                                        <button onClick={ () => this.editTask(task.id)} className="btn btn-info">Edit</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTask(task.id)} className="btn btn-danger">Delete</button>
                                        <button style={{marginLeft: "10px"}} onClick={ () => this.viewTask(task.id)} className="btn btn-info">View</button>
                                    </td>
                                </tr>
                                    
                            )
                        }
                    </tbody>
                </table>
            </div>
            </div>
        )
    }

}

export default ListTaskComponent