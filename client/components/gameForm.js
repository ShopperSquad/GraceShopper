import React from 'react'
import {Form, Button} from 'react-bootstrap'

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
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicTest">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="What's the name of the game?"
          onChange={handleChange}
          name="name"
          value={name}
        />
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Tell me about the game"
          onChange={handleChange}
          name="description"
          value={description}
        />
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Omg how much does this game cost?"
          onChange={handleChange}
          name="price"
          value={price}
        />
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Does this game have a picture?"
          onChange={handleChange}
          name="imageUrl"
          value={imageUrl}
        />
        <Form.Label>Year of Release</Form.Label>
        <Form.Control
          type="number"
          placeholder="What year was it released?"
          onChange={handleChange}
          name="yearOfRelease"
          value={yearOfRelease}
        />
        <Form.Label>Quantity Available</Form.Label>
        <Form.Control
          type="number"
          placeholder="How many copies do we have?"
          onChange={handleChange}
          name="quantity"
          value={quantity}
        />
        <Form.Label>Console</Form.Label>
        <Form.Control
          type="text"
          placeholder="Which console?"
          onChange={handleChange}
          name="console"
          value={console}
        />
        <Button type="submit">Submit</Button>
      </Form.Group>
    </Form>
  )
}

export default GameForm
