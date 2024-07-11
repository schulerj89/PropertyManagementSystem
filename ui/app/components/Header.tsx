// app/components/Header.jsx
import React from 'react';
import { Link } from '@remix-run/react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Property Management System
          </Typography>
          <Box>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/features">
              Features
            </Button>
            <Button color="inherit" component={Link} to="/pricing">
              Pricing
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
