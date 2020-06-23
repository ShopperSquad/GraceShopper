import React from 'react'
import AllProducts from './allProducts'

const Main = props => {
  return (
    <div className="container">
      <AllProducts history={props.history} />
    </div>
  )
}

export default Main
