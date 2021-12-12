import axios from 'axios'
const baseUrl = 'http://localhost:3300/api/orders'

let token = null

const setToken = newToken => {
  token = `bearer ${newToken}`
}

const getMyOrders = (userId) => {
  const request = axios.get(`${baseUrl}/user/${userId}`)
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

export default { getMyOrders, create, update, setToken, remove }