import React from 'react'
import {Link} from 'react-router-dom'
import {Form, Button, Col, Container, Row} from 'react-bootstrap'

export const CheckoutForm = props => {
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
  // return (
  //   <div>
  //     <h1>Checkout Page</h1>
  //     <div className="container">
  //       <div className="row justify-content-around">
  //         <Form className="order-form col-lg-8" id="chk-out" onSubmit={props.handleSubmit}>
  //           <h2>Shipping Address</h2>
  //           <div className="form-row">
  //             <div className="form-group col-md-6">
  //               <label htmlFor="inputFirstName">First Name</label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 id="inputFirstName"
  //                 name="first-name"
  //                 placeholder="First Name"
  //                 required
  //               />
  //             </div>
  //             <div className="form-group col-md-6">
  //               <label htmlFor="inputLastName">Last Name</label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 id="inputlastName"
  //                 name="last-name"
  //                 placeholder="Last Name"
  //                 required
  //               />
  //             </div>
  //           </div>
  //           <div className="form-row">
  //             <div className="form-group col-md-12">
  //               <label htmlFor="inputAddress1">Address 1</label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 id="inputAddress1"
  //                 name="address1"
  //                 placeholder="Address 1"
  //               />
  //             </div>
  //           </div>
  //           <div className="form-row">
  //             <div className="form-group col-md-12">
  //               <label htmlFor="inputAddress2">Address 2</label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 id="inputAddress2"
  //                 name="address2"
  //                 placeholder="Address 2"
  //               />
  //             </div>
  //           </div>
  //           <div className="form-row">
  //             <div className="form-group col-md-6">
  //               <label htmlFor="inputCity">City</label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 id="inputCity"
  //                 name="city"
  //                 placeholder="City"
  //               />
  //             </div>
  //             <div className="form-group col-md-4">
  //               <label htmlFor="inputState">State</label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 id="inputState"
  //                 name="state"
  //                 placeholder="State"
  //               />
  //             </div>
  //             <div className="form-group col-md-2">
  //               <label htmlFor="inputZip">Zip Code</label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 id="inputZip"
  //                 name="zip"
  //                 placeholder="Zip Code"
  //               />
  //             </div>
  //           </div>
  //           <h2 id="billing-header">Billing Details</h2>
  //           <div className="form-row">
  //             <div className="form-group col-md-12">
  //               <label htmlFor="cardName">Cardholder Name</label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 id="cardName"
  //                 name="cardName"
  //                 placeholder="Cardholder Name"
  //               />
  //             </div>
  //           </div>
  //           <div className="form-row">
  //             <div className="form-group col-md-12">
  //               <label htmlFor="cardNumber">Card Number</label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 id="cardNumber"
  //                 name="cardNumber"
  //                 placeholder="Card Number"
  //               />
  //             </div>
  //           </div>
  //           <div className="form-row">
  //             <div className="form-group col-md-6">
  //               <label htmlFor="cardExpDate">Expiration Date</label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 id="cardExpDate"
  //                 name="cardExpDate"
  //                 placeholder="Exp. Date"
  //               />
  //             </div>
  //             <div className="form-group col-md-6">
  //               <label htmlFor="securityNum">Security #</label>
  //               <input
  //                 type="text"
  //                 className="form-control"
  //                 id="securityNum"
  //                 name="securityNum"
  //                 placeholder="Security Number"
  //               />
  //             </div>
  //           </div>
  //           <div className="form-row justify-content-around">
  //             {props.isLoggedIn ? (
  //               <Link to="/confirmation">
  //                 <button
  //                   type="submit"
  //                   className="btn btn-primary submit-order-btn"
  //                   form="chk-out"
  //                 >
  //                   Submit Order
  //                 </button>
  //               </Link>
  //             ) : (
  //               <Link to="/confirmation">
  //                 <button
  //                   type="submit"
  //                   className="btn btn-primary submit-order-btn"
  //                   form="chk-out"
  //                 >
  //                   Submit Order
  //                 </button>
  //               </Link>
  //             )}
  //           </div>
  //         </Form>
  //       </div>
  //     </div>
  //   </div>
  // )
}
