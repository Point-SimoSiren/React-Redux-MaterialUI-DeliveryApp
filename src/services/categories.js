import axios from 'axios'
const baseUrl = 'http://localhost:3300/api/categories'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.status
}

const update = async (id, category) => {
  const response = await axios.put(`${baseUrl}/${id}`, category)
  return response.data
}

const remove = async (id) => {
  const response = await axios.delete(`${baseUrl}/${id}`)
  return response.status
}

export default { getAll, create, update, setToken, remove }