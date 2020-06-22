import React from 'react'

const User = props => {
  const {user} = props
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.email}</td>
      <td>{user.admin ? 'Yes' : 'No'}</td>
    </tr>
  )
}

export default User
