import React from 'react'
import {Link} from 'react-router-dom'

const Product = props => {
  const {product} = props
  return (
    <div className="row">
      <div className="col-12 mx-auto my-2 text-title">
        <img src={product.imageUrl} alt="game-pic" width="100px" />
        <Link to={`/products/${product.id}`} className="game">
          {product.name}
        </Link>
      </div>
    </div>
  )
}

export default Product
