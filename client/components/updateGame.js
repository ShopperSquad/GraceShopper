import React, {Component} from 'react'
import GameForm from './gameForm'
import {updateSingleProduct} from '../store/singleProduct'
import {connect} from 'react-redux'

export class UpdateGame extends Component {
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
    if (this.props.singleProduct) {
      const gameUpdate = this.props.singleProduct
      this.setState({
        name: gameUpdate.name,
        description: gameUpdate.description,
        price: gameUpdate.price,
        imageUrl: gameUpdate.imageUrl,
        yearOfRelease: gameUpdate.yearOfRelease,
        quantity: gameUpdate.quantity,
        console: gameUpdate.console
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
    const gameUpdate = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      imageUrl: this.state.imageUrl,
      yearOfRelease: this.state.yearOfRelease,
      quantity: this.state.quantity,
      console: this.state.console
    }
    this.props.updateProduct(this.props.id, gameUpdate)
  }

  render() {
    return (
      <div>
        <h1>Update a game in the database?</h1>
        <GameForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          products={this.state}
        />
      </div>
    )
  }
}

const mapDispatch = dispatch => ({
  updateProduct: (id, productUpdate) =>
    dispatch(updateSingleProduct(id, productUpdate))
})

export default connect(null, mapDispatch)(UpdateGame)
