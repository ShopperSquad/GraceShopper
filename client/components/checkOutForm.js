import React from 'react'
import {Form, Button} from 'react-bootstrap'

const CheckOutForm = props => {
  const {handleSubmit, handleChange, firstName, lastName, ccNumber} = props
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicTest">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last name"
          onChange={handleChange}
          name="lastname"
          value={firstName}
        />
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last name"
          onChange={handleChange}
          name="lastname"
          value={lastName}
        />
        <Form.Label>Credit Card Number</Form.Label>
        <Form.Control
          type="number"
          placeholder="Credit card number"
          onChange={handleChange}
          name="ccNumber"
          value={ccNumber}
        />
        <Button type="submit">Submit</Button>
      </Form.Group>
    </Form>
  )
}

export default CheckOutForm
