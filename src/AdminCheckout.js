import React, { useState } from "react";
import { Table, Button, Form, Container, Navbar } from "react-bootstrap";
import { FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import './App.css';

const Cart = () => {
  const navigate = useNavigate();

  // Example cartItems data structure
  const cartItems = [
    { transactionId: "TRX001", customerName: "John Doe", productId: "PRD123", description: "Chocolate Cake", qty: 2, price: 12000, date: "2025-04-20" },
    { transactionId: "TRX002", customerName: "Jane Smith", productId: "PRD124", description: "Strawberry Cake", qty: 1, price: 9000, date: "2025-04-21" },
    // Add more items as needed
  ];

  // State to handle search query and date filter
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDate, setFilterDate] = useState("");

  // Filter cart items based on search query and date
  const filteredItems = cartItems.filter((item) => {
    const matchesSearch =
      item.transactionId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.customerName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDate = filterDate ? item.date === filterDate : true;

    return matchesSearch && matchesDate;
  });

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleDateChange = (e) => setFilterDate(e.target.value);

  return (
    <div className="landing-page">
      {/* Navbar */}
      <Navbar expand="lg" className="navbar-custom py-3">
        <Container fluid>
          <Link to="/landing" className="text-decoration-none">
            <Navbar.Brand className="brand-logo">
              <span className="pink-text">Wake</span> <span className="black-text">‘n</span>
              <span className="orange-text"> Bake</span>
            </Navbar.Brand>
          </Link>

          <Form className="d-flex align-items-center ms-auto search-form">
            
 <Link to="/products" className="prod nav-link mx-2">
              Product
            </Link>
            <Link to="/transactions" className="trans nav-link mx-2">
              Transaction
            </Link>
            <Link to="/" className="text-decoration-none">
              <FaSignOutAlt className="icon" />
            </Link>
          </Form>
        </Container>
      </Navbar>

      {/* Cart Table Container */}
      <Container className="my-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="cart-title">CHECKOUT TRANSACTION</h3>
        
        <div className="d-flex">
          {/* Filter by Date */}
          <Form.Control
            type="date"
            value={filterDate}
            onChange={handleDateChange}
            className="w-auto me-2"
            placeholder="Filter by Date"
          />
          {/* Search Field */}
          <Form.Control
            type="text"
            placeholder="Search Transaction ID or Customer Name"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-100"
          />
        </div>
      </div>

        {/* Cart Table */}
        <div className="cart-table-container">
          <Table responsive bordered className="cart-table">
            <thead>
              <tr>
                <th>Transaction ID</th>
                <th>Customer Name</th>
                <th>Product ID</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Total Amount</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan="7" className="empty-cart-message">
                    No items found
                  </td>
                </tr>
              ) : (
                filteredItems.map((item, index) => (
                  <tr key={index}>
                    <td>{item.transactionId}</td>
                    <td>{item.customerName}</td>
                    <td>{item.productId}</td>
                    <td>{item.description}</td>
                    <td>{item.qty}</td>
                    <td>{`P${item.price.toLocaleString()}`}</td>
                    <td>
                      <Button size="sm" className="edit-btn">
                        Edit
                      </Button>
                      <Button variant="danger" size="sm" className="delete-btn">
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>

        {/* Checkout Button */}
        <Link to="/checkout" className="text-decoration-none">
          <div className="checkout-btn-container">
            <Button size="sm" className="checkout-btn">
              CHECKOUT
            </Button>
          </div>
        </Link>
      </Container>    
    </div>
  );
};

export default Cart;
