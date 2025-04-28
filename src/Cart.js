import React from 'react';
import { Table, Button, Form, Container, Navbar } from 'react-bootstrap';
import { FaSearch, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './App.css';

const Cart = () => {
  const navigate = useNavigate(); 
  const cartItems = [
    // { productId: 1, productName: 'Strawberry Cake', qty: 1, price: 9000 },
    // { productId: 2, productName: 'Chocolate Cake', qty: 2, price: 12000 },
  ];

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
            <Form.Control
              type="search"
              className="me-2 search-input"
              aria-label="Search"
            />
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

      {/* Cart Table Container */}
      <Container className="my-4">
  <div className="position-relative mb-4">
    <i
      className="bi bi-arrow-left-square-fill position-absolute"
      style={{ fontSize: "2rem", cursor: "pointer", left: "0", top: "50%", transform: "translateY(-50%)" }}
      onClick={() => navigate('/Products')}
    ></i>
    <h3 className="cart-title text-center">My Shopping Cart</h3>
  </div>

        <div className="cart-table-container">
          <Table responsive bordered className="cart-table">
            <thead>
              <tr>
                <th>Choose</th>
                <th>Product ID</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.length === 0 ? (
                <tr>
                  <td colSpan="6" className="empty-cart-message">
                    Your cart is empty
                  </td>
                </tr>
              ) : (
                cartItems.map((item) => (
                  <tr key={item.productId}>
                    <td>
                      <Form.Check type="checkbox" />
                    </td>
                    <td>{item.productId}</td>
                    <td>{item.productName}</td>
                    <td>{item.qty}</td>
                    <td>{`P${item.price.toLocaleString()}`}</td>
                    <td>
                      <Button  size="sm" className="edit-btn">
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

        <Link to="/checkout" className='text-decoration-none'>
        <div className="checkout-btn-container">
          <Button size="sm" className="checkout-btn">
            CHECKOUT
          </Button>
        </div>
        </Link>
        
      </Container>

      {/* Footer */}
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

export default Cart;