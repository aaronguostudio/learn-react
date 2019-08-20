import * as React from 'react'
import axios from 'axios'
// import Link from 'next/link'
import { NextPage } from 'next';

type Props = {
  users: [any]
}

const UserPage: NextPage<Props> = ({ users }) => (
  <div>
    <div>Users Page</div>
    {users.map(user => <div key={user.id}>{user.name}</div>)}
  </div>
)

UserPage.getInitialProps = async () => {
  const res: any = await axios.get('http://localhost:3001/api/users')
  console.log('> res', res)
  const users = res.data
  return {
    users
  }
}

export default UserPage
