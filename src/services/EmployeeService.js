import axios from 'axios'

const Employees_REST_API_URL = 'http://localhost:8080/api/employees';

class EmployeeService {
    
    getEmployees() {
        return axios.get(Employees_REST_API_URL);
    }
    

}

export default new EmployeeService()