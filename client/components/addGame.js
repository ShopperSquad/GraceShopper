import React, {Component} from 'react'
import axios from 'axios'
import GameForm from './gameForm'
import {addSingleProduct} from '../store/products'
import {connect} from 'react-redux'

export class AddGame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      description: '',
      price: '',
      imageUrl: '',
      yearOfRelease: '',
      quantity: '',
      console: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    if (this.props.products) {
      const game = this.props.products
      this.setState({
        name: game.name,
        description: game.description,
        price: game.price,
        imageUrl: game.imageUrl,
        yearOfRelease: game.yearOfRelease,
        quantity: game.quantity,
        console: game.console
      })
    }
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit(evt) {
    evt.preventDefault()
    const game = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      imageUrl: this.state.imageUrl,
      yearOfRelease: this.state.yearOfRelease,
      quantity: this.state.quantity,
      console: this.state.console
    }
    this.props.addProduct(game)
    this.setState = {
      name: '',
      description: '',
      price: '',
      imageUrl: '',
      yearOfRelease: '',
      quantity: '',
      console: ''
    }
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
  addProduct: product => dispatch(addSingleProduct(product))
})

export default connect(null, mapDispatch)(AddGame)
