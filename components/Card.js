import { deleteUser } from '../services/users'
import UpdateForm from './UpdateForm'
import moment from 'moment'

export default function Card({ user, setUsers }) {
  const handleDelete = async () => {
    const res = await deleteUser(user.id)
    setUsers(prevUsers => prevUsers.filter(prevUser => prevUser.id !== user.id))
  }


  return (
    <div style={{padding: '20px'}}>
      <div>{ user.name }</div>
      <div>{ moment(user.birth).format('Do MMM YYYY') }</div>
      <div>{ user.document }</div>
      <button onClick={handleDelete}>Delete</button>
      <button>Update</button>
      <UpdateForm user={user} setUsers={setUsers} />
    </div>
  )
}
