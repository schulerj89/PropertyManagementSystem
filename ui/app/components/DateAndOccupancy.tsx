// app/components/DateAndOccupancy.tsx
import React from 'react';
import { Box, Paper, Typography, Divider } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

const DateAndOccupancy = ({ className }) => {
  return (
    <Paper className={className} sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" gutterBottom>
          Friday
        </Typography>
        <Typography variant="h4" gutterBottom>
          20
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          September
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ mt: 2, mb: 2, textAlign: 'center' }}>
        <Typography variant="h6">75% Occupancy</Typography>
        <LinearProgress variant="determinate" value={75} sx={{ height: 10, borderRadius: 5 }} />
      </Box>
      <Divider />
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Typography variant="body2">
          <span style={{ fontWeight: 'bold' }}>15</span> Booked |{' '}
          <span style={{ fontWeight: 'bold' }}>4</span> Available |{' '}
          <span style={{ fontWeight: 'bold' }}>1</span> Blocked
        </Typography>
      </Box>
    </Paper>
  );
};

export default DateAndOccupancy;
