import React from 'react';
import { Container, Navbar, Nav, Row, Col, Card, Button, Form, InputGroup } from 'react-bootstrap';
import { Envelope, Person, Search, Cart } from 'react-bootstrap-icons';
import './index2.css'; // Import your CSS file for custom styles

const VirtualAgrovet = () => {
  // Unsplash image URLs
  const images = {
    logoBg: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    crazyOfferBg: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    megaSaleBg: 'https://images.unsplash.com/photo-1599427303058-f04cb7d6d035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
    categoryBg: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  };

  return (
    <div className="agrovet-website">
      {/* Top Navigation Bar */}
      <Navbar bg="light" expand="lg" className="py-3 border-bottom main-navbar">
        <Container>
          <Navbar.Brand href="#" className="fw-bold brand-logo">
            <div className="logo-container">
              <img src={images.logoBg} alt="Farm background" className="logo-bg" />
              <div className="logo-text">
                <span className="text-success">Virtual</span> Agrovet
                <small className="d-block tagline">Heart Of Perfect Farming*</small>
              </div>
            </div>
          </Navbar.Brand>
          
          <Nav className="ms-auto d-none d-lg-flex">
            <Nav.Link href="#" className="nav-icon"><Person className="me-1" /> Account</Nav.Link>
            <Nav.Link href="#" className="nav-icon"><Cart className="me-1" /> Cart</Nav.Link>
            <Nav.Link href="#" className="nav-icon"><Search /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Main Navigation */}
      <Navbar bg="success" expand="lg" className="py-2 main-menu">
        <Container>
          <Navbar.Toggle aria-controls="main-nav" className="menu-toggle" />
          <Navbar.Collapse id="main-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#" className="text-white menu-item">Home</Nav.Link>
              <Nav.Link href="#" className="text-white menu-item">About Us</Nav.Link>
              <Nav.Link href="#" className="text-white menu-item">Product Category</Nav.Link>
              <Nav.Link href="#" className="text-white menu-item">Privacy Policy</Nav.Link>
              <Nav.Link href="#" className="text-white menu-item">Terms & Conditions</Nav.Link>
              <Nav.Link href="#" className="text-white menu-item">Blog / News</Nav.Link>
              <Nav.Link href="#" className="text-white menu-item">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Main Content */}
      <Container className="my-4 main-content">
        <Row>
          {/* Left Sidebar - Categories */}
          <Col lg={3} className="mb-4">
            <Card className="border-0 category-card">
              <div className="category-header-image" style={{ backgroundImage: `url(${images.categoryBg})` }}></div>
              <Card.Header className="bg-success text-white">
                <h5 className="mb-0">Category</h5>
              </Card.Header>
              <Card.Body>
                <Nav className="flex-column category-nav">
                  <Nav.Link href="#" className="text-dark category-item">Animal Health</Nav.Link>
                  <Nav.Link href="#" className="text-dark category-item">Extension Services</Nav.Link>
                  <Nav.Link href="#" className="text-dark category-item">Farm Inputs</Nav.Link>
                  <Nav.Link href="#" className="text-dark category-item">Farm Machinery</Nav.Link>
                  <Nav.Link href="#" className="text-dark category-item">Farm Tools</Nav.Link>
                  <Nav.Link href="#" className="text-dark category-item">Irrigation Equipments</Nav.Link>
                </Nav>
              </Card.Body>
              <Card.Footer className="bg-light">
                <h6 className="mb-0 text-success">Health & Action</h6>
              </Card.Footer>
            </Card>
          </Col>

          {/* Main Content Area */}
          <Col lg={9}>
            {/* Crazy Offer Banner */}
            <Card className="border-0 shadow-sm mb-4 crazy-offer-banner" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images.crazyOfferBg})` }}>
              <Card.Body className="text-center py-5 text-white">
                <h2 className="banner-title">CRAZY OFFER</h2>
                <p className="banner-subtitle">Up to 50% off on selected items</p>
                <Button variant="light" size="lg" className="mt-3 offer-button">SHOP NOW</Button>
              </Card.Body>
            </Card>

            {/* Mega Sale Banner */}
            <Card className="border-0 shadow-sm mb-4 mega-sale-banner" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${images.megaSaleBg})` }}>
              <Card.Body className="text-center py-5 text-white">
                <h2 className="banner-title">MEGA SALE</h2>
                <h3 className="banner-subtitle">INSULIN SEEDLINGS</h3>
                <p className="banner-text">Limited time offer - 30% discount</p>
              </Card.Body>
            </Card>

            {/* Newsletter Subscription */}
            <Card className="border-0 shadow-sm newsletter-card">
              <Card.Body className="text-center py-4">
                <h5 className="mb-3 newsletter-title">Subscribe to Our Newsletter</h5>
                <p className="text-muted newsletter-text">Get updates on new products and special offers</p>
                <Form className="mt-3 newsletter-form">
                  <InputGroup className="mb-3">
                    <Form.Control 
                      type="email" 
                      placeholder="Your email address" 
                      aria-label="Your email address"
                      className="newsletter-input"
                    />
                    <Button variant="success" type="submit" className="subscribe-button">
                      <Envelope className="me-1" /> Subscribe
                    </Button>
                  </InputGroup>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white py-4 mt-5 site-footer">
        <Container>
          <Row>
            <Col md={4} className="mb-3 footer-col">
              <h5 className="footer-heading">About Virtual Agrovet</h5>
              <p className="text-muted footer-text">Heart of Perfect Farming since 2010</p>
              <div className="social-icons mt-3">
                <a href="#" className="text-white me-2"><i className="bi bi-facebook"></i></a>
                <a href="#" className="text-white me-2"><i className="bi bi-twitter"></i></a>
                <a href="#" className="text-white me-2"><i className="bi bi-instagram"></i></a>
              </div>
            </Col>
            <Col md={4} className="mb-3 footer-col">
              <h5 className="footer-heading">Quick Links</h5>
              <Nav className="flex-column footer-nav">
                <Nav.Link href="#" className="text-white p-0 footer-link">Home</Nav.Link>
                <Nav.Link href="#" className="text-white p-0 footer-link">Products</Nav.Link>
                <Nav.Link href="#" className="text-white p-0 footer-link">Contact Us</Nav.Link>
                <Nav.Link href="#" className="text-white p-0 footer-link">FAQs</Nav.Link>
                <Nav.Link href="#" className="text-white p-0 footer-link">Shipping Policy</Nav.Link>
              </Nav>
            </Col>
            <Col md={4} className="footer-col">
              <h5 className="footer-heading">Contact Info</h5>
              <p className="text-muted mb-1 footer-text">
                <i className="bi bi-geo-alt-fill me-2"></i> 123 Farm Road, Nairobi, Kenya
              </p>
              <p className="text-muted mb-1 footer-text">
                <i className="bi bi-envelope-fill me-2"></i> info@virtualagrovet.com
              </p>
              <p className="text-muted footer-text">
                <i className="bi bi-telephone-fill me-2"></i> +254 700 000000
              </p>
            </Col>
          </Row>
          <hr className="my-3 footer-divider" />
          <p className="text-center text-muted mb-0 copyright">
            &copy; {new Date().getFullYear()} Virtual Agrovet. All rights reserved.
          </p>
        </Container>
      </footer>
    </div>
  );
};

export default VirtualAgrovet;