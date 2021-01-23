import axios from 'axios'

const TASKS_REST_API_URL = 'http://localhost:8080/api/tasks';

class TaskService {
    getTasks() {
        return axios.get(TASKS_REST_API_URL);
    }

    getTaskById(taskId) {
        return axios.get(TASKS_REST_API_URL + '/' + taskId);
    }

    addTask(task) {
        return axios.post(TASKS_REST_API_URL, task);
    }

    editTask(task, taskId) {
        return axios.put(TASKS_REST_API_URL + "/" + taskId, task);
    }


    deleteTask(taskId) {
        return axios.delete(TASKS_REST_API_URL + "/deletetask/" + taskId);
    }

}

export default new TaskService()