// src/App.js
import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav, Carousel } from 'react-bootstrap';
import { useGetProductsQuery } from './features/products/productsApi';
import { useDispatch } from 'react-redux';
import { addToCart } from './features/cart/cartSlice';
import Cart from './features/cart/Cart'; // Cart bileşenini ekleyin
import { toast } from 'react-toastify';

import "./App.css"

function App() {
  const { data: products, isLoading, isError } = useGetProductsQuery();
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    toast.success(`${product.title} added to cart.`, { position: "bottom-right" });
    dispatch(addToCart(product));
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching data</p>;
  }

  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#">TrendyShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">Categories</Nav.Link>
              <Nav.Link href="#">Deals</Nav.Link>
              <Cart />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container fluid className="p-0">
        <Carousel>
          {products.slice(0, 3).map((product) => (
            <Carousel.Item key={product.id}>
              <img
                className="d-block w-100"
                src={product.image}
                alt={product.title}
              />
              <Carousel.Caption>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <Container className="my-4">
        <Row xs={1} md={2} lg={3} xl={4}>
          {products.map((product) => (
            <Col key={product.id} className="mb-4">
              <Card>
                <Card.Img variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>${product.price}</Card.Text>
                  <Button variant="primary" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default App;
