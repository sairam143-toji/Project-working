import React, { useState, useEffect } from 'react';
import  '../Style/Home.css'

const slides = [
  {
    image:  'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Welcome to Nanamma Batter',
  },
  {
    image: 'https://images.unsplash.com/photo-1694849789325-914b71ab4075?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Freshly Prepared Every Day',
  },
  {
    image: 'https://images.unsplash.com/photo-1741376509047-66dae5df90f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    text: 'Tradition Meets Taste',
  },
];

const HomeCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div
          className={`carousel-slide ${index === current ? 'active' : ''}`}
          key={index}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="carousel-text">
            <h1>{slide.text}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeCarousel;
