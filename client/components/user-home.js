import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, isAdmin} = props

  return (
    <div>
      <div className="row">
        <div className="col-10 mx-auto my-2 text-center text-title">
          <h1 className="text-capitalize font-weight-bold">Welcome, {email}</h1>
        </div>
      </div>
      {isAdmin ? (
        <div>
          <div>
            <h4> You are an Admin. </h4>
            <p>Add a product to your online shop:</p>
          </div>
          <div>Add Form</div>
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
