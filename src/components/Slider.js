// src/components/Slider.js
import React from 'react';
import { Carousel } from 'react-bootstrap';

const AppSlider = ({ products }) => {
  return (
    <Carousel>
      {products.slice(0, 3).map((product) => (
        <Carousel.Item key={product.id}>
          <img className="d-block w-100" src={product.image} alt={product.title} />
          <Carousel.Caption>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default AppSlider;
