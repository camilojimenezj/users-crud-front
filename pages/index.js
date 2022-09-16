import { useEffect, useState } from "react"
import Container from "../components/Container"
import { getUsers } from "../services/users"
import Card from "../components/Card"
import UserForm from "../components/UserForm"


export default function index() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users)
    })
  }, [])

  const hello = "hello"

  return (
    <Container>
      <table className="table table-striped custom-table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Birth Date</th>
            <th scope="col">Document</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, i) =>
              <Card user={user} key={i} setUsers={setUsers} />
            )
          }

        </tbody>
      </table>
      <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add User
      </button>
      <UserForm setUsers={setUsers} />
    </Container>
  )
}
