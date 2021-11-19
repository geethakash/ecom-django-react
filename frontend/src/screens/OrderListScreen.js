import React, { useEffect, useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Table, Button, ListGroup, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

import Loader from '../components/Loader';
import Message from '../components/Message';

import { listOrders } from '../actions/orderActions';

function OrderListScreen({ history }) {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push('/');
    }
  }, [dispatch, history, userInfo]);

  return (
    <div>
      <h1>Orders</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER</th>
              <th>DATE</th>
              <th>Total</th>
              <th>PAID</th>
              <th>DELIVERED</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user && order.user.name}</td>
                <td>{order.createdAt.substring(0, 10)}</td>
                <td>{order.totalPrice}</td>

                <td>
                  {order.isPaid ? (
                    `PAID: ${order.paidAt.substring(0, 10)}`
                  ) : (
                    <i className="fas fa-times" style={{ color: 'gray' }}></i>
                  )}
                </td>
                <td>
                  {order.isDelivered ? (
                    `DELIVERED: ${order.deliveredAt.substring(0, 10)}`
                  ) : (
                    <i className="fas fa-times" style={{ color: 'gray' }}></i>
                  )}
                </td>
                <td>
                  <div className="d-flex flex-row justify-content-center">
                    <LinkContainer to={`/order/${order._id}/`}>
                      <Button className="btn-sm">Details</Button>
                    </LinkContainer>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default OrderListScreen;
