import React, { Component } from 'react';
import TaskService from '../services/TaskService';

class AddTaskComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name: '',
            description: '',
            email: '',
            severity: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeSeverityHandler = this.changeSeverityHandler.bind(this);
        this.saveTask = this.saveTask.bind(this);
    }

    componentDidMount() {
        if(this.state.id === '_add') {
            return 
        } else {
            TaskService.getTaskById(this.state.id).then( (res) => {
                let task = res.data;
                this.setState({name: task.name,
                    description: task.description,
                    email: task.email,
                    severity: task.severity
                });
            });
        }
    }

    saveTask = (e) => {
        e.preventDefault();
        let task = {name: this.state.name, description: this.state.description, email: this.state.email, severity:this.state.severity};
        console.log('task => ' + JSON.stringify(task));

        if(this.state.id === '_add') {
            TaskService.addTask(task).then( res => {
                this.props.history.push('/tasks');
            });
        } else {
            TaskService.editTask(task, this.state.id).then(res => {
                this.props.history.push('/tasks');
            });
        }
    }

    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }
    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }
    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }
    changeSeverityHandler= (event) => {
        this.setState({severity: event.target.value});
    }

    cancel() {
        this.props.history.push('/tasks');
    }

    getTitle() {
        if(this.state.id === '_add') {
            return <h3 className="text-center">Add Task</h3> 
        } else {
            return <h3 className="text-center">Edit</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label>Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email Address" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Severity: </label>
                                            <input placeholder="Severity" name="severity" className="form-control" 
                                                value={this.state.severity} onChange={this.changeSeverityHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveTask}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default AddTaskComponent





