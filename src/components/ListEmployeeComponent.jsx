import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';


class ListEmployeeComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            employees:[]
        }
        
    }


  

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data})
        });
    }


    render() {
        return (
            <div>
                <h1 className="text-center"> EMployees List</h1>
                
                 <br></br>
                 <div className = "row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <td> Employee Id</td>
                            <td> Employee Name</td>
                            <td> Employee Password</td>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.password}</td>
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

export default ListEmployeeComponent