import React, {Component} from 'react'
import GameForm from './gameForm'
import {addSingleProduct} from '../store/products'
import {connect} from 'react-redux'

const initialState = {
  name: '',
  description: '',
  price: 0,
  imageUrl: '',
  yearOfRelease: '',
  quantity: 1,
  console: ''
}

class AddGame extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]:
        evt.target.type === 'number'
          ? parseInt(evt.target.value, 10)
          : evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    this.props.addGame(this.state)
    this.setState(initialState)
  }

  render() {
    return (
      <GameForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        products={this.state}
      />
    )
  }
}

const mapDispatch = dispatch => ({
  addGame: game => dispatch(addSingleProduct(game))
})

export default connect(null, mapDispatch)(AddGame)
