import axios from 'axios'
const baseUrl = 'http://localhost:3000/api/users'

export const getUsers = async () => {
  const res = await axios.get(baseUrl)
  const { data } = res
  return data
}

export const deleteUser = async (id) => {
  const res = await axios.delete(`${baseUrl}/${id}`)
  const { data } = res
  return data
}

export const createUser = async (userData) => {
  const res = await axios
    .post(baseUrl, userData)
  const { data } = res
  return data
}
/* 
export const update = async (id, newObject) => {
  const config = {
    headers: {
      Authorization: token
    }
  }
  const request = axios.put(`${baseUrl}/${id}`, newObject, config)
  const response = await request
  return response.data
}  */