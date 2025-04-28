import React, { useEffect, useState } from 'react';
import { Container, Navbar, Form, FormControl, Card, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import './App.css';

const Checkout = () => {
  // State for customer details
  const [customer, setCustomer] = useState({});
  // State for order details
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a database
    const fetchCustomerDetails = async () => {
      // Replace this with API call later
      const customerData = {
        // name: "John Doe",
        // address: "123 Main St, Springfield",
        // contact: "(123) 456-7890"
      };
      setCustomer(customerData);
    };

    const fetchOrders = async () => {
      const orderData = [

    ];
      setOrders(orderData);
    };

    fetchCustomerDetails();
    fetchOrders();
  }, []);

  return (
    <div className="landing-page">
      
      {/* Navbar */}
         <Navbar expand="lg" className="navbar-custom py-3">
              <Container fluid>
                <Link to="/landing" className="text-decoration-none"> {/* Link with no underline */}
                  <Navbar.Brand className="brand-logo">
                    <span className="pink-text">Wake</span> <span className="black-text">‘n</span>
                    <span className="orange-text"> Bake</span>
                  </Navbar.Brand>
                </Link>
          
          <Form className="d-flex align-items-center ms-auto search-form">
            <FormControl type="search" className="me-2 search-input" aria-label="Search" />
            <FaSearch className="icon" />
            <Link to="/cart">
            <FaShoppingCart className="icon" />
            </Link>
            <Link to="/" className="text-decoration-none">
              <FaSignOutAlt className="icon" />
            </Link>          
          </Form>
        </Container>
      </Navbar>

      {/* Checkout Process */}
      <Container className="checkout-process mt-5">
        <Card className="customer-details mb-3">
          <Card.Body>
            <Card.Title className='customer-title'>CUSTOMER DETAILS</Card.Title>
            <Card.Text className='customer-text'>
              <strong>Name:</strong> {customer.name} <br />
              <strong>Address:</strong> {customer.address} <br />
              <strong>Contact Number:</strong> {customer.contact}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card className="item-details">
        <Card.Body>
            <Card.Title className='customer-title'>ORDER DETAILS</Card.Title>
            <Table striped bordered hover>
            <thead className="table-header">
                <tr>
                <th>Order ID</th>
                <th>Product Name</th>
                <th>Qty</th>
                <th>Total Price/Amount</th>
                </tr>
            </thead>
            <tbody>
                {orders.length === 0 ? (
                <tr>
                    <td colSpan="4" className="text-center">No orders found.</td>
                </tr>
                ) : (
                orders.map((order) => (
                    <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.productName}</td>
                    <td>{order.qty}</td>
                    <td>{order.totalPrice}</td>
                    </tr>
                ))
                )}
            </tbody>
            </Table>
        </Card.Body>
        </Card>

        <Button variant="primary" className="checkout-btn mt-3 ms-auto d-block">
        CHECK OUT
        </Button>      
    </Container>

    <footer className="footer mt-5 text-center">
        <p>Wake ‘n Bake © 2025 | Baking Sweet Memories Every Day</p>
        <p>Follow us for the latest flavors, updates, and sweet treats!</p>
        <a href="https://wakenbake.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">
          wakenbake.facebook.com
        </a>
      </footer>

    </div>
  );
};

export default Checkout;