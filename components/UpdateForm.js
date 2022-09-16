import { useEffect, useState } from 'react'
import { updateUser } from '../services/users'
import moment from 'moment'

export default function UpdateForm({ user, setUsers }) {
  const [name, setName] = useState(user.name)
  const [birth, setBirth] = useState(moment(user.birth).format('yyyy-MM-dd'))
  const [document, setDocument] = useState(user.document)

  useEffect(() => {
    setName(user.name)
    setBirth(moment(user.birth).format('yyyy-MM-DD'))
    setDocument(user.document)
  }, [user])

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleBirthChange = (e) => {
    setBirth(e.target.value)
  }

  const handleDocumentChange = (e) => {
    setDocument(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newUser = await updateUser(user.id, { name, birth, document: Number(document) })

    setUsers(prevUsers => [...prevUsers.filter(prev => prev.id !== user.id), newUser])
  }

  return (
    <div className="modal fade" id={"modal" + user.id} tabIndex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel2">Update user</h5>
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
                <input type='text' id='document' className='form-control' pattern="[0-9]*" value={document} onChange={handleDocumentChange} />
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

