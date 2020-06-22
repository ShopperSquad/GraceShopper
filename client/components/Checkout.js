import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {checkoutUser} from '../store/user'

export class Checkout extends Component {
  constructor() {
    super()
    this.checkoutLoggedIn = this.checkoutLoggedIn.bind(this)
  }

  checkoutLoggedIn() {
    this.props.checkoutLoggedInUser()
  }

  render() {
    return (
      <div>
        <h1>Checkout Page</h1>
        {this.props.isLoggedIn ? (
          <Link to="/confirmation">
            <button
              onClick={this.checkoutLoggedIn}
              type="button"
              id="submit-order-btn"
            >
              Submit Order LoggedIn
            </button>
          </Link>
        ) : (
          <Link to="/confirmation">
            <button type="button" id="submit-order-btn">
              Submit Order Guest
            </button>
          </Link>
        )}
      </div>
    )
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    checkoutLoggedInUser: () => dispatch(checkoutUser())
  }
}

export default connect(mapState, mapDispatch)(Checkout)

Checkout.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
