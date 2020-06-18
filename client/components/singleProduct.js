import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import {fetchSingleProduct} from '../store/singleProduct'
import {AddToCart} from './AddToCart'

class singleProduct extends Component {
  componentDidMount() {
    const {getSingleProduct} = this.props
    getSingleProduct(this.props.match.params.id)
  }
  render() {
    const arr = this.props.singleProduct
    return (
      <div key={arr.id}>
        <h2> {arr.name} </h2>
        <img src={arr.imageUrl} width="300px" />
        <h3>Description: {arr.description}</h3>
        <h3>Year of Release: {arr.yearOfRelease}</h3>
        <h3>Quantity: {arr.quantity}</h3>
        <h3>Console: {arr.console}</h3>
        <AddToCart singleGame={arr} isLoggedIn={this.props.isLoggedIn} />
      </div>
    )
  }
}

const mapState = state => {
  return {
    singleProduct: state.singleProduct,
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleProduct: id => dispatch(fetchSingleProduct(id))
  }
}

export default connect(mapState, mapDispatch)(singleProduct)

singleProduct.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
}
