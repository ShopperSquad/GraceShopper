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
    const {isAdmin} = this.props
    return (
      <div>
        <div key={arr.id}>
          <h1> {arr.name} </h1>
          <img src={arr.imageUrl} width="300px" />
          <h3>
            ${arr.price} &nbsp; Console: {arr.console}
          </h3>
          <p>{arr.description}</p>
          <h5>
            Year of Release: {arr.yearOfRelease} &nbsp; Quantity: {arr.quantity}
          </h5>
        </div>
        <div>
          {isAdmin ? (
            <div>
              <div>
                <h2>You are an Admin.</h2>{' '}
                <p>You can update this product here:</p>
              </div>
              <div>Update Form</div>
            </div>
          ) : null}
        </div>
      </div>
    )
  }
}

const mapState = state => {
  return {
    singleProduct: state.singleProduct,
    isAdmin: state.user.admin
  }
}

const mapDispatch = dispatch => {
  return {
    getSingleProduct: id => dispatch(fetchSingleProduct(id))
  }
}

export default connect(mapState, mapDispatch)(singleProduct)
