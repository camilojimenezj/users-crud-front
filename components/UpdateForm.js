import { useEffect, useState } from 'react'
import { updateUser } from '../services/users'

export default function UpdateForm({ user, setUsers }) {
  const [name, setName] = useState(user.name)
  const [birth, setBirth] = useState()
  const [document, setDocument] = useState(user.document)

  useEffect(() => {
    setName(user.name)
    setBirth()
    setDocument(user.document)
  }, [user])

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleBirthChange = (e) => {
    setBirth(e.target.value)
  }

  const handledocumentChange = (e) => {
    setDocument(Number(e.target.value))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = await updateUser(user.id, { name, birth, document })
  
    setUsers(prevUsers => [...prevUsers.filter(prev => prev.id !== user.id), newUser])
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='name' value={name} onChange={handleNameChange} />
      <input type='date' placeholder='birth date' value={birth} onChange={handleBirthChange} />
      <input type='text' placeholder='document' value={document} onChange={handledocumentChange} />
      <button>Submit</button>
    </form>
  )
}