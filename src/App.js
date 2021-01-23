import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListTaskComponent from './components/ListTaskComponent';
import ViewTaskComponent from './components/ViewTaskComponent';
import AddTaskComponent from './components/AddTaskComponent';
import EditTaskComponent from './components/EditTaskComponent';
import ListEmployeeComponent from './components/ListEmployeeComponent';


function App() {
  return (
    <div>
        <Router>
             
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {ListTaskComponent}></Route>
                          <Route path = "/tasks" component = {ListTaskComponent}></Route>
                          <Route path = "/add-task/:id" component = {AddTaskComponent}></Route>
                          <Route path = "/view-task/:id" component = {ViewTaskComponent}></Route>
                          <Route path ="/employees" component = {ListEmployeeComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
             
        </Router>
    </div>
    
  );
}

export default App;