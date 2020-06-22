import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {postProduct} from '../store/products'

/**
 * COMPONENT
 */
export const UserHome = props => {
  const {email, isAdmin, addProduct} = props

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
            <h3> You are an Admin. </h3>
            <Link to="/user-information">See All Customers</Link>
            <p>Add a product to your online shop:</p>
          </div>
          {/*<div>
            <Form addProduct={addProduct} />
          </div>*/}
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

const mapDispatch = dispatch => ({
  addProduct: () => dispatch(postProduct())
})

export default connect(mapState, mapDispatch)(UserHome)

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
}
