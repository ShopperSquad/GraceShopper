import React from 'react'
import {Form, Button, Container, Row, Col} from 'react-bootstrap'

const CheckOutForm = props => {
  return (
    <div>
      <Container>
        <h1>Checkout</h1>
        <Row className="justify-content-lg-around">
          <Col lg={10}>
            <Form onSubmit={props.handleSubmit} className="order-form">
              <h3 className="billing-shipping-header">Shipping Address</h3>
              <Form.Row className="justify-content-lg-around">
                <Col lg={5}>
                  <Form.Group controlId="checkoutFName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First Name"
                    />
                  </Form.Group>
                </Col>
                <Col lg={5}>
                  <Form.Group md="6" controlId="checkoutLName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Last Name"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row className="justify-content-lg-around">
                <Col lg={11}>
                  <Form.Group controlId="checkoutAddress1">
                    <Form.Label>Address 1</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Address 1"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row className="justify-content-lg-around">
                <Col lg={11}>
                  <Form.Group controlId="checkoutAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control type="text" placeholder="Address 2" />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row className="justify-content-lg-around">
                <Col lg={5}>
                  <Form.Group controlId="checkoutCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control required type="text" placeholder="City" />
                  </Form.Group>
                </Col>
                <Col lg={2}>
                  <Form.Group controlId="checkoutState">
                    <Form.Label>State</Form.Label>
                    <Form.Control required type="text" placeholder="State" />
                  </Form.Group>
                </Col>
                <Col lg={2}>
                  <Form.Group controlId="checkoutZip">
                    <Form.Label>Zip Code</Form.Label>
                    <Form.Control required type="number" placeholder="Zip" />
                  </Form.Group>
                </Col>
              </Form.Row>
              <h3 className="billing-shipping-header">Payment Info</h3>
              <Form.Row className="justify-content-lg-around">
                <Col lg={5}>
                  <Form.Group controlId="ccName">
                    <Form.Label>Cardholder Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Cardholder Name"
                    />
                  </Form.Group>
                </Col>
                <Col lg={5}>
                  <Form.Group controlId="ccNum">
                    <Form.Label>Card Number</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Card Number"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row className="justify-content-lg-around">
                <Col lg={5}>
                  <Form.Group controlId="ccExp">
                    <Form.Label>Expiration Date</Form.Label>
                    <Form.Control
                      required
                      type="month"
                      placeholder="Exp. Date"
                    />
                  </Form.Group>
                </Col>
                <Col lg={5}>
                  <Form.Group controlId="ccSecurityNum">
                    <Form.Label>Security Number</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      placeholder="Security Number"
                    />
                  </Form.Group>
                </Col>
              </Form.Row>
              <Form.Row className="justify-content-lg-center">
                <Button type="submit" className="submit-order-btn">
                  Submit Order
                </Button>
              </Form.Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default CheckOutForm
