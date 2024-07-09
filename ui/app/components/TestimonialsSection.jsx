// ui/components/TestimonialsSection.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const TestimonialsSection = () => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          What Our Customers Say
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6" component="p" gutterBottom>
            "This property management system has transformed the way we manage our properties!"
          </Typography>
          <Typography variant="body2" component="p">
            - John Doe
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsSection;
