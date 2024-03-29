import axios from "axios"

const baseURL = "https://claraborlu.pythonanywhere.com/"
// const baseURL = "http://127.0.0.1:8000/"


export const client = axios.create({ baseURL })


const getTasks = async () => {
    const accessToken = JSON.parse(localStorage.getItem('user-token'))
    return await client.get(`/`, {
        headers: {
            Authorization: `Token ${accessToken}`
        }
    });
};


const addTask = async (task) => {
    const response = await client.post("/add-task/", task, {
        headers: {
            Authorization: `Token ${JSON.parse(localStorage.getItem('user-token'))}`
        }
    })
    return response
}

const completeTask = async (id) => {
    const response = await client.patch(`/task/${id}/completed/`, {}, {
        headers: {
            Authorization: `Token ${JSON.parse(localStorage.getItem('user-token'))}`
        }
    })
    return response
}

const deleteTask = async (id) => {
    const response = await client.delete(`/task/${id}/`, {
        headers: {
            Authorization: `Token ${JSON.parse(localStorage.getItem('user-token'))}`
        }
    })
    return response
}

const updateTask = async (id, newTask) => {
    const response = await client.put(`/task/${id}/`, newTask, {
        headers: {
            Authorization: `Token ${JSON.parse(localStorage.getItem('user-token'))}`
        }
    })
    return response
}

const getWeeklyReport = async () => {
    const response = await client.get('/weekly-report/', {
        headers: {
            Authorization: `Token ${JSON.parse(localStorage.getItem('user-token'))}`
        }
    })
    return response
}

const signupHandler = async (formData) => {
    const response = await client.post('/accounts/signup/', formData)
    return response
}

const loginHandler = async (formData) => {
    const response = await client.post('/accounts/login/', formData)
    return response
}


export {
    getTasks,
    addTask,
    completeTask,
    deleteTask,
    updateTask,
    getWeeklyReport,
    signupHandler,
    loginHandler
}
