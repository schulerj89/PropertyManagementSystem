// app/routes/index.jsx
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import Footer from '../components/Footer';

const IndexPage = () => (
  <div>
    <HeroSection />
    <FeaturesSection />
    <TestimonialsSection />
  </div>
);

export default IndexPage;
