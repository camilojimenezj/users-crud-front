import { deleteUser } from '../services/users'
import UpdateForm from './UpdateForm'

export default function Card({ user, setUsers }) {
  const handleDelete = async () => {
    const res = await deleteUser(user.id)
    setUsers(prevUsers => prevUsers.filter(prevUser => prevUser.id !== user.id))
  }
  return (
    <div style={{padding: '20px'}}>
      <div>{ user.name }</div>
      <div>{ user.birth }</div>
      <div>{user.nit}</div>
      <button onClick={handleDelete}>Delete</button>
      <button>Update</button>
      <UpdateForm user={user} setUsers={setUsers} />
    </div>
  )
}
