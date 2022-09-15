import { useEffect, useState } from 'react'
import { updateUser } from '../services/users'

export default function UpdateForm({ user, setUsers }) {
  const [name, setName] = useState(user.name)
  const [birth, setBirth] = useState(user.birth)
  const [nit, setNit] = useState(user.nit)

  useEffect(() => {
    setName(user.name)
    setBirth(user.birth)
    setNit(user.nit)
  }, [user])

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
    const newUser = await updateUser(user.id, { name, birth, nit })
  
    setUsers(prevUsers => [...prevUsers.filter(prev => prev.id !== user.id), newUser])
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