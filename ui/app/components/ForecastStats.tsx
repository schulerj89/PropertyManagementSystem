// app/components/ForecastStats.tsx
import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';

const ForecastStats = () => {
  const stats = [
    { label: 'Occupancy', value: '53%' },
    { label: 'Room Nights', value: '1,000' },
    { label: 'ADR', value: '$389,000.37' },
    { label: 'RevPar', value: '$389,000.37' },
    { label: 'Revenue', value: '$137,589,000.37' },
  ];

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Forecast
      </Typography>
      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5">{stat.value}</Typography>
              <Typography variant="body2" color="text.secondary">
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default ForecastStats;
