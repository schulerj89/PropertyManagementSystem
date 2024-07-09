// ui/components/Feature.js
import React from 'react';
import { Grid, Typography, Box } from '@mui/material';

export const Feature = ({ title, description }) => {
  return (
    <Grid item xs={12} md={4}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h6" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1" component="p">
          {description}
        </Typography>
      </Box>
    </Grid>
  );
};
