import React from 'react'
import {Link} from 'react-router-dom'

const Product = props => {
  const {product} = props
  return (
    <div className="container">
      <img src={product.imageUrl} alt="game-pic" width="100px" />
      <Link to={`/products/${product.id}`} className="game">
        {product.name}
      </Link>
    </div>
  )
}

export default Product
