import axios from 'axios'
const baseUrl = 'http://localhost:3300/api/users'

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = () => {
    const config = {
        headers: { Authorization: token },
    }
    console.log("config", config)
    const request = axios.get(baseUrl, config)
    return request.then(response => response.data)
}

const create = async newObject => {
    const response = await axios.post(baseUrl, newObject)
    return response.data
}

const update = async (id, user) => {
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.put(`${baseUrl}/${id}`, user, config)
    return response.data
}

const remove = async id => {
    const config = {
        headers: { Authorization: token },
    }
    axios.delete(`${baseUrl}/${id}`, config)
}


export default { setToken, getAll, create, update, remove }