// app/components/StatsCard.tsx
import React from 'react';
import { Box, Paper, Typography, IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StatsCard = ({ title, value }) => {
  return (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h5">{value}</Typography>
        <IconButton size="small">
          <RefreshIcon />
        </IconButton>
      </Box>
      <Typography variant="subtitle1" color="text.secondary">
        {title}
      </Typography>
    </Paper>
  );
};

export default StatsCard;
