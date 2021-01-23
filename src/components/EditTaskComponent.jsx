import React, { Component } from 'react';
import TaskService from '../services/TaskService';

class EditTaskComponent extends Component {
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
        this.editTask = this.editTask.bind(this);
    }

    componentDidMount() {
    
        TaskService.getTaskById(this.state.id).then( (res) => {
            let task = res.data;
            this.setState({name: task.name,
                description: task.description,
                email: task.email,
                severity: task.severity
            });
        });
    }
    

    editTask = (e) => {
        e.preventDefault();
        let task = {name: this.state.name, description: this.state.description, email: this.state.email, severity:this.state.severity};
        console.log('task => ' + JSON.stringify(task));
        console.log('id => ' + JSON.stringify(this.state.id));
        TaskService.editTask(task, this.state.id).then(res => {
            this.props.history.push('/tasks');
        });
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

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Task</h3>
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

                                        <button className="btn btn-success" onClick={this.editTask}>Save</button>
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

export default EditTaskComponent





