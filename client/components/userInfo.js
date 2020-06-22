import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../store/users'
import User from './userCard'

export class UserInfo extends React.Component {
  componentDidMount() {
    const {getUsers} = this.props
    getUsers()
  }

  render() {
    const {users} = this.props

    return (
      <div className="container py-5">
        <h1>User Information</h1>
        <div className="row">
          {users && users.length ? (
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Email</th>
                  <th>Admin?</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => {
                  return <User user={user} key={user.id} />
                })}
              </tbody>
            </table>
          ) : (
            'No customers'
          )}
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  users: state.users
})

const mapDispatch = dispatch => ({
  getUsers: () => dispatch(fetchUsers())
})

export default connect(mapState, mapDispatch)(UserInfo)
