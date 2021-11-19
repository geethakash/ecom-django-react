import React, { useEffect, useState } from "react";
import { Form, Button, FormGroup, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";

import { savePaymentMethod } from "../actions/cartActions";
function PaymentScreen({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  const [paymentMethod, setPaymentMethod] = useState("paypal");

  if (!shippingAddress.address) {
    history.pushState("/shipping");
  }

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <Form onSubmit={submitHandler}>
        <Form.Group className="">
          <Form.Label as="legend">
            <h1>Select Method</h1>
          </Form.Label>
          <Col className="mx-4">
            <Form.Check
              type="radio"
              label="Paypal or Credit Card"
              id="paypal"
              checked={paymentMethod === "paypal"}
              name="paymentMethod"
              onChange={(e) => setPaymentMethod(e.target.id)}
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary" className="my-3">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
}

export default PaymentScreen;
