import React from 'react'
import {FormControl, FormGroup, Form} from 'react-bootstrap'

const GameForm = props => {
  const {
    handleSubmit,
    handleChange,
    name,
    description,
    price,
    imageUrl,
    yearOfRelease,
    quantity,
    console
  } = props
  return (
    <div className="game-form-box">
      <Form>
        <Form.Group controlId="formBasicTest">
          <Form.Label>Test Field</Form.Label>
          <Form.Control type="text" placeholder="Enter your response" />
          <Form.Text className="text-muted">This is a test</Form.Text>
        </Form.Group>
      </Form>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name"> Name:</label>
          <input onChange={handleChange} type="text" name="name" value={name} />
        </div>
        <label htmlFor="description">Description:</label>
        <input
          onChange={handleChange}
          type="text"
          name="description"
          value={description}
        />
        <div>
          <label htmlFor="priority">Price:</label>
          <input
            onChange={handleChange}
            type="number"
            name="price"
            value={price}
          />
        </div>
        <label htmlFor="description">Image URL:</label>
        <input
          onChange={handleChange}
          type="text"
          name="imageUrl"
          value={imageUrl}
        />
        <div>
          <label htmlFor="yearOfRelease">Year of Release:</label>
          <input
            onChange={handleChange}
            type="number"
            name="yearOfRelease"
            value={yearOfRelease}
          />
        </div>
        <div>
          <label htmlFor="quantity">Quantity Available:</label>
          <input
            onChange={handleChange}
            type="number"
            name="quantity"
            value={quantity}
          />
        </div>
        <div>
          <label htmlFor="console">Console:</label>
          <input
            onChange={handleChange}
            type="text"
            name="console"
            value={console}
          />
        </div>
        <div>
          <button type="submit">Add Game</button>
        </div>
      </form>
    </div>
  )
}

export default GameForm
