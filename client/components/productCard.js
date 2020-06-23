import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Product = props => {
  const {product} = props
  return (
    <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
      <div className="card">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="card-img-top imageSize"
        />
        <Link to={`/products/${product.id}`}>
          <p>{product.name}</p>
        </Link>
        <div className="card-footer d-flex justify-content-between">
          {props.isLoggedIn ? (
            <button
              className="cart-btn text-center"
              type="button"
              onClick={() => props.addNewGame(product.id)}
            >
              <i className="fas fa-cart-plus" />
            </button>
          ) : (
            <button
              className="cart-btn text-center"
              type="button"
              onClick={() => props.addToStorage(product)}
            >
              <i className="fas fa-cart-plus" />
            </button>
          )}
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

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
    padding: 5px 5px;
  }
  &:hover {
    .card {
      border: 0.4rem solid rgba(0, 0, 0, 5);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 20);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .cart-btn {
    postion: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--mainOrange);
    border: none;
    color: var(--mainDark);
    font-size: 1.4rem;
    border-radius: 0.4rem 0 0 0;
    transformtranslate(100%, 100%)transition: all 1s ease-in-out;
  }
  .img-container: hover .cart-btn {
    transform: transalte(0, 0);
  }
  .cart-btn:hover {
    color: var(--mainWhite);
    cursor: pointer;
  }
`
