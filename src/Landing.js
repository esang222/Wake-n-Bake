import React from 'react';
import { Container, Navbar, Form, FormControl, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';  // Import Link
import { FaSearch, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import './App.css';

const LandingPage = () => {
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
            <FormControl
              type="search"
              className="me-2 search-input"
              aria-label="Search"
            />

            <FaSearch className="icon" />

            {/* Link to Cart page */}
            <Link to="/cart" className="text-decoration-none ms-3">
              <FaShoppingCart className="icon" />
            </Link>

            {/* Link to Logout */}
            <Link to="/" className="text-decoration-none ms-3">
              <FaSignOutAlt className="icon" />
            </Link>    
          </Form>
        </Container>
      </Navbar>

      {/* Hero Image */}
      <div className="hero-image">
        <img
          src="cake.jpg" 
          alt="Cakes and Desserts"
          className="hero-img"
        />
      </div>

      {/* Welcome Text */}
      <Container className="text-center my-4">
        <div className="welcome-text">
          Step into a place where dreams are baked fresh daily, smiles are part of every recipe, and every cake carries a piece of your story.
        </div>
      </Container>

      {/* Customer Favorites */}
      <Container className="customer-favorites text-center">
        <h4 className="favorites-title">CUSTOMER FAVORITES</h4>
        <Row className="mt-4">
          <Col md={4}>
            <Card className="favorite-card">
              <Card.Img variant="top" src="cake.1.png" alt="Product" className='cake-image'/>
              <Card.Body className="favorite-card-body">
                <Card.Title className="text-center card-title"> CAKE</Card.Title>
                <div className="d-flex justify-content-between mb-auto card-text">
                  <span>Price: P9000</span>
                  <span>Stock: 5</span>
                </div>
              </Card.Body>
            </Card>
            <button className="add-to-cart-btn">Add to Cart</button>
          </Col>

          <Col md={4}>
            <Card className="favorite-card">
              <Card.Img variant="top" src="cake3.png" alt="Product" className='cake-image'/>
              <Card.Body className="favorite-card-body">
                <Card.Title className="text-center card-title"> CAKE</Card.Title>
                <div className="d-flex justify-content-between mb-auto card-text">
                  <span>Price: P9000</span>
                  <span>Stock: 5</span>
                </div>
              </Card.Body>
            </Card>
            <button className="add-to-cart-btn">Add to Cart</button>
          </Col>

          <Col md={4}>
            <Card className="favorite-card">
              <Card.Img variant="top" src="cake.2.png" alt="Product" className='cake-image'/>
              <Card.Body className="favorite-card-body">
                <Card.Title className="text-center card-title"> CAKE</Card.Title>
                <div className="d-flex justify-content-between mb-auto card-text">
                  <span>Price: P9000</span>
                  <span>Stock: 5</span>
                </div>
              </Card.Body>
            </Card>
            <button className="add-to-cart-btn">Add to Cart</button>
          </Col>
        </Row>

        {/* View All Items Button */}
        <Link to="/products">
        <div className="mt-4">
          <button className="view-all-btn">VIEW ALL ITEMS</button>
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

export default LandingPage;
