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

export const updateUser = async (id, userData) => {
  const res = await axios.patch(`${baseUrl}/${id}`, userData)
   const { data } = res
  return data
} 