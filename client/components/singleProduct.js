import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/singleProduct'

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
        <h3>Price: {arr.price}</h3>
      </div>
    )
  }
}

const mapState = state => {
  return {
    singleProduct: state.singleProduct
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleProduct: id => dispatch(fetchSingleProduct(id))
  }
}

export default connect(mapState, mapDispatch)(singleProduct)
