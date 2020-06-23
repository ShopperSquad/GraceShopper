import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import AddGame from './addGame'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, isAdmin} = props

  return (
    <div className="row">
      <div className="col-10 mx-auto my-2 text-center text-title">
        <h1 className="text-capitalize font-weight-bold">Welcome, {email}</h1>
      </div>
      {isAdmin ? (
        <div className="single-game-form">
          <div className="single-game-form-comp">
            <h3> You are an Admin. </h3>
            <Link to="/user-information">See All Customers</Link>
          </div>
          <div className="single-game-form-comp">
            <div className="game-form-box">
              <h3>Add a game to your shop?</h3>
              <AddGame />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email,
    isAdmin: state.user.admin
  }
}

export default connect(mapState)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
