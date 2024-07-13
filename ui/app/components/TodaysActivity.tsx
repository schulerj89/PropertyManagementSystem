// app/components/TodaysActivity.tsx
import React from 'react';
import { Box, Paper, Typography, Grid } from '@mui/material';

const TodaysActivity = () => {
  const activities = [
    { label: 'Sales', value: 16 },
    { label: 'Cancellations', value: 0 },
    { label: 'Overbookings', value: 26 },
  ];

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Today's Activity
      </Typography>
      <Grid container spacing={2}>
        {activities.map((activity, index) => (
          <Grid item xs={4} key={index}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5">{activity.value}</Typography>
              <Typography variant="body2" color="text.secondary">
                {activity.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
};

export default TodaysActivity;
