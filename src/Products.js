import React from "react";
import { Container, Navbar, Form, FormControl, Row, Col, Card } from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import './App.css';

const Products = () => {
  return (
    <div className="landing-page">
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

            <Link to="/cart" className="text-decoration-none ms-3"> {/* Navigate to Cart.js */}
              <FaShoppingCart className="icon" />
            </Link>

            <Link to="/" className="text-decoration-none ms-3"> {/* Navigate to Landing.js */}
              <FaSignOutAlt className="icon" />
            </Link>
          </Form>
        </Container>
      </Navbar>

      {/* Cake Container */}
      <Container className="customer-favorites text-center">
        <Row className="mt-4">
          <Col md={4}>
            <Card className="favorite-card">
              <Card.Img
                variant="top" src="cake1.png" alt="Product" className="cake-image"
              />
              <Card.Body className="favorite-card-body">
                <Card.Title className="text-center card-title">CAKE</Card.Title>
                <p>
                  The Fruity Berry Flavor offers a delightful sweetness with
                  every bite.
                </p>
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
              <Card.Img
                variant="top"
                src="cake2.png"
                alt="Product"
                className="cake-image"
              />
              <Card.Body className="favorite-card-body">
                <Card.Title className="text-center card-title">CAKE</Card.Title>
                <p>
                  The Fruity Berry Flavor offers a delightful sweetness with
                  every bite.
                </p>
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
              <Card.Img
                variant="top"
                src="cake3.png"
                alt="Product"
                className="cake-image"
              />
              <Card.Body className="favorite-card-body">
                <Card.Title className="text-center card-title">CAKE</Card.Title>
                <p>
                  The Fruity Berry Flavor offers a delightful sweetness with
                  every bite.
                </p>
                <div className="d-flex justify-content-between mb-auto card-text">
                  <span>Price: P9000</span>
                  <span>Stock: 5</span>
                </div>
              </Card.Body>
            </Card>
            <button className="add-to-cart-btn">Add to Cart</button>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col md={4}>
            <Card className="favorite-card">
              <Card.Img
                variant="top"
                src="cake1.png"
                alt="Product"
                className="cake-image"
              />
              <Card.Body className="favorite-card-body">
                <Card.Title className="text-center card-title">CAKE</Card.Title>
                <p>
                  The Fruity Berry Flavor offers a delightful sweetness with
                  every bite.
                </p>
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
              <Card.Img
                variant="top"
                src="cake1.png"
                alt="Product"
                className="cake-image"
              />
              <Card.Body className="favorite-card-body">
                <Card.Title className="text-center card-title">CAKE</Card.Title>
                <p>
                  The Fruity Berry Flavor offers a delightful sweetness with
                  every bite.
                </p>
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
              <Card.Img
                variant="top"
                src="cake1.png"
                alt="Product"
                className="cake-image"
              />
              <Card.Body className="favorite-card-body">
                <Card.Title className="text-center card-title">CAKE</Card.Title>
                <p>
                  The Fruity Berry Flavor offers a delightful sweetness with
                  every bite.
                </p>
                <div className="d-flex justify-content-between mb-auto card-text">
                  <span>Price: P9000</span>
                  <span>Stock: 5</span>
                </div>
              </Card.Body>
            </Card>
            <button className="add-to-cart-btn">Add to Cart</button>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="footer mt-5 text-center">
        <p>Wake ‘n Bake © 2025 | Baking Sweet Memories Every Day</p>
        <p>Follow us for the latest flavors, updates, and sweet treats!</p>
        <a
          href="https://wakenbake.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          wakenbake.facebook.com
        </a>
      </footer>
    </div>
  );
};

export default Products;
