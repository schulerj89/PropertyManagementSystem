// ui/components/FeaturesSection.js
import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { Feature } from './Feature';

const features = [
  { title: 'Feature One', description: 'Description for feature one.' },
  { title: 'Feature Two', description: 'Description for feature two.' },
  { title: 'Feature Three', description: 'Description for feature three.' },
];

const FeaturesSection = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Key Features
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Feature key={index} title={feature.title} description={feature.description} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturesSection;
