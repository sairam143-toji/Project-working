import React, { useEffect, useRef, useState } from 'react';
import  '../Style/HeroBanner.css';

const AboutSection = () => {
  const sectionRef = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      className={`about-section ${inView ? 'in-view' : ''}`}
      ref={sectionRef}
    >
      <div className="about-content">
        <h2>About Nanamma Batter</h2>
        <p>
          At Nanamma Batter, we believe in preserving the authentic taste of South Indian cuisine.
          Inspired by our grandmother's timeless recipes, our batters are crafted with care, using
          natural ingredients and traditional methods. Every scoop carries a story — of love, family, and food that brings people together.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
