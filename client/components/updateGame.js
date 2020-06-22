import React, {Component} from 'react'
import axios from 'axios'
import GameForm from './gameForm'
//import {addSingleProduct} from '../store/singleProduct'

export default class UpdateGame extends Component {
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
      const res = await axios.put('/products', this.state)
      //this.props.addSingleProduct(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <h1>Update a game in the database?</h1>
        <GameForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          {...this.state}
        />
      </div>
    )
  }
}
