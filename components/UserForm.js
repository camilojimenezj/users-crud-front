import { useState } from 'react'
import { createUser } from '../services/users'

export default function UserForm({ setUsers }) {
  const [name, setName] = useState('')
  const [birth, setBirth] = useState('')
  const [nit, setNit] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleBirthChange = (e) => {
    setBirth(e.target.value)
  }

  const handleNitChange = (e) => {
    setNit(Number(e.target.value))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = await createUser({ name, birth, nit })
    console.log(newUser)
    setUsers(prevUsers => [...prevUsers, newUser])
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='name' value={name} onChange={handleNameChange} />
      <input type='date' placeholder='birth date' value={birth} onChange={handleBirthChange} />
      <input type='text' placeholder='nit' value={nit} onChange={handleNitChange} />
      <button>Submit</button>
    </form>
  )
}
