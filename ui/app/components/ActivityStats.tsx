// app/components/ActivityStats.tsx
import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';

const ActivityStats = () => {
  const stats = [
    { label: 'Arrivals', value: 26 },
    { label: 'Departures', value: 12 },
    { label: 'In-house', value: 37 },
    { label: 'Stayovers', value: 25 },
    { label: 'Bookings', value: 8 },
    { label: 'Cancellations', value: 6 },
    { label: 'Overbookings', value: 4 },
  ];

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Activity
      </Typography>
      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid item xs={6} sm={3} md={2} key={index}>
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

export default ActivityStats;
