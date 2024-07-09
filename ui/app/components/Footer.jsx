// ui/components/Footer.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#222', color: '#fff', py: 4 }}>
      <Container maxWidth="lg">
        <Typography variant="body1" component="p" align="center">
          © {new Date().getFullYear()} Property Management System. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
