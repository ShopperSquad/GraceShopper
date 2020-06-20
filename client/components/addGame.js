import React, {Component} from 'react'
import axios from 'axios'
import GameForm from './gameForm'
import {addSingleProduct} from '../store/singleProduct'

export default class AddGame extends Component {
  constructor() {
    super()
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

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt) {
    evt.preventDefault()
    try {
      const res = await axios.post('/products', this.state)
      this.props.addSingleProduct(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <GameForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        {...this.state}
      />
    )
  }
}