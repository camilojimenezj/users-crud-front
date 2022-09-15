import { useEffect, useState } from "react"
import Container from "../components/Container"
import { getUsers } from "../services/users"
import Card from "../components/Card"
import UserForm from "../components/UserForm"

export default function index() {
  const [users, setUsers] = useState([{name: "camilo"}])

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users)
      console.log(users)
    })
  }, [])

  const hello = "hello"

  return (
    <Container>
      <h1>Home</h1> 
      <UserForm setUsers={setUsers} />
      {
        users.map((user, i) => 
          <Card user={user} key={i} setUsers={setUsers} />
        )
      }
    </Container>
  )
}
