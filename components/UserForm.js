import { useState } from 'react'
import { createUser } from '../services/users'

export default function UserForm({ setUsers }) {
  const [name, setName] = useState('')
  const [birth, setBirth] = useState('')
  const [document, setDocument] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleBirthChange = (e) => {
    setBirth(e.target.value)
  }

  const handleDocumentChange = (e) => {
    setDocument(Number(e.target.value))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = await createUser({ name, birth, document })

    setUsers(prevUsers => [...prevUsers, newUser])

    setName('')
    setBirth(null)
    setDocument(null)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add user</h2>
      <input type='text' placeholder='name' value={name} onChange={handleNameChange} />
      <input type='date' placeholder='birth date' value={birth} onChange={handleBirthChange} />
      <input type='text' placeholder='document' value={document} onChange={handleDocumentChange} />
      <button>Submit</button>
    </form>
  )
}
