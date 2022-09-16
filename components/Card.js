import { deleteUser } from '../services/users'
import UpdateForm from './UpdateForm'
import moment from 'moment'

export default function Card({ user, setUsers }) {
  const handleDelete = async () => {
    const res = await deleteUser(user.id)
    setUsers(prevUsers => prevUsers.filter(prevUser => prevUser.id !== user.id))
  }


  return (
    <tr scope="row">
      <td className="pl-0">
        <div className="d-flex align-items-center">{user.name}</div>
      </td>
      <td>
        <div>{moment(user.birth).format('Do MMM YYYY')}</div>
      </td>
      <td>{user.document}</td>
      <td>
        <div className="d-flex icon">
          <i className="fa fa-pen"></i>
          <i className="fa fa-trash" onClick={handleDelete}></i>
        </div>
      </td>
      {/* <UpdateForm user={user} setUsers={setUsers} /> */}
    </tr>
  )
}
