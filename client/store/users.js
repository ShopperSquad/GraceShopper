import axios from 'axios'

//action type
const GET_USERS = 'GET_USERS'

//action creator
const getUsers = users => ({
  type: GET_USERS,
  users
})

//thunk creators
export const fetchUsers = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get('/api/users')
      dispatch(getUsers(data))
    } catch (error) {
      console.log('Error fetching users!', error)
    }
  }
}

//initial state
const users = []

//reducer
const usersReducer = (state = users, action) => {
  switch (action.type) {
    case GET_USERS:
      return action.users
    default:
      return state
  }
}

export default usersReducer
