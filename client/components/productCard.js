import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Product = props => {
  const {product} = props
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <img src={product.imageUrl} alt="game-pic" className="card-img-top" />
        <Link to={`/products/${product.id}`}>{product.name}</Link>
        {/* card footer */}
        <div className="card-footer d-flex justify-content-between">
          <p className="align-self-center mb-0">{product.title}</p>
          <h5 className="text-blue font-italic mb-0">
            <span className="mr-1">$</span>
            {product.price / 100}
          </h5>
        </div>
      </div>
    </ProductWrapper>
  )
}

export default Product

const ProductWrapper = styled.div``
