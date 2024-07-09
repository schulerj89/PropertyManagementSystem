// ui/components/HeroSection.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';

const HeroSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Your Property Management System
        </Typography>
        <Typography variant="h5" component="p" gutterBottom>
          Manage your properties efficiently and effortlessly with our comprehensive system.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default HeroSection;
