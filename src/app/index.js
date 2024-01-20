// src/app/index.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import AppNavbar from "../components/Navbar";
import AppSlider from "../components/Slider";
import AppPromotions from "../components/Promotions";
import Products from "../components/Products";
import ProductDetail from "../components/ProductDetail";
import Cart from "../components/Cart";

function App() {
  return (
    <Container className="mt-4">
      <Routes>
        <Route path="/" exact>
          <AppSlider />
          <AppPromotions />
          <Products />
        </Route>
        <Route path="/products/:id">
          <ProductDetail />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Routes>
    </Container>
  );
}

export default App;
