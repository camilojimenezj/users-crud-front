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
      <td class="pl-0">
        <div class="d-flex align-items-center">{user.name}</div>
      </td>
      <td>
        <div>{moment(user.birth).format('Do MMM YYYY')}</div>
      </td>
      <td>{user.document}</td>
      <td>
        <div class="d-flex icon">
          <i class="fa fa-pen"></i>
          <i class="fa fa-trash" onClick={handleDelete}></i>
        </div>
      </td>
      {/* <UpdateForm user={user} setUsers={setUsers} /> */}
    </tr>
  )
}
/* 
<tr scope="row">
                <td class="pl-0">
                  <div class="d-flex align-items-center">
                    Jhoan Esteban Londoño Escobar
                  </div>
                </td>

                <td>
                  <div>12/23/1124</div>
                </td>
                <td>1035236359</td>

                <td>
                  <div class="d-flex icon">
                    <i class="fa fa-pen"></i>
                    <i class="fa fa-trash"></i>
                  </div>
                </td>
              </tr>
 */