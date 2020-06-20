import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSingleProduct} from '../store/singleProduct'
import {Link} from 'react-router-dom'

class singleProduct extends Component {
  componentDidMount() {
    const {getSingleProduct} = this.props
    getSingleProduct(this.props.match.params.id)
  }
  render() {
    const arr = this.props.singleProduct
    return (
      <div key={arr.id} className="container py-2">
        <div className="col-10 text-black my-1">
          <h1>{arr.name}</h1>
        </div>

        <div className="col-10 col-md-6 my-3">
          <img src={arr.imageUrl} className="img-fluid" alt="" />
        </div>

        <div className="col-10 col-md-6 my-3 text-capitalize">
          <h4 className="text-title mt-3 mb-2">
            Console : <span className="text-muted">{arr.console}</span>
          </h4>
          <h4 className="text-black">
            <strong>
              price : <span>$</span>
              {arr.price}
            </strong>
          </h4>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            description :
          </p>
          <p className="text-muted lead">{arr.description}</p>
          <p className="text-capitalize font-weight-bold mt-3 mb-0">
            Year of Release :{' '}
            <span className="text-muted lead">{arr.yearOfRelease}</span>
          </p>

          <div>
            <Link to="/">
              <button type="button"> Back to Products</button>
            </Link>
            <button type="button"> Add to Cart </button>
          </div>
        </div>
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
