import React, { useEffect, useRef, useState } from 'react';
import '../Style/ImageWithText.css';

const ImageWithText = () => {
  const imageRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (imageRef.current) observer.observe(imageRef.current);
    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
    };
  }, []);

  return (
    <section className="image-text-section">
      <div className={`image-container ${visible ? 'visible' : ''}`} ref={imageRef}>
        <img src="https://images.unsplash.com/photo-1632104667384-06f58cb7ad44?q=80&w=1460&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nanamma Batter Dish" />
      </div>
      <div className="text-container">
        <h2>Authentic Taste of Tradition</h2>
        <p>
          At Nanamma Batter, we bring you the flavor of home with freshly made dosa and idli batters. Using
          time-honored recipes passed down through generations, every bite reminds you of tradition, love,
          and authenticity.
        </p>
      </div>
    </section>
  );
};

export default ImageWithText;
