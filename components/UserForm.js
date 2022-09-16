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
    setBirth('')
    setDocument('')
  }

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Add user</h5>

          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type='text' className='form-control' id='name' value={name} onChange={handleNameChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="date" className="form-label">Birth Date</label>
                <input type='date' className='form-control' id='date' value={birth} onChange={handleBirthChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="document" className="form-label">Document</label>
                <input type='text' id='document' className='form-control' value={document} onChange={handleDocumentChange} />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="Submit" className="btn btn-outline-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
