// app/components/GuestActivityList.tsx
import React from 'react';
import { Box, Paper, Typography, List, ListItem, ListItemText, Button, Grid } from '@mui/material';

const GuestActivityList = () => {
  const activities = [
    {
      guest: 'Bessie Cooper',
      accommodation: 'Standard Single - STS(219)',
      stay: '09/09/22 - 09/10/22',
      status: 'Check out',
    },
    {
      guest: 'Theresa Webb',
      accommodation: 'Standard Single - STS(219)',
      stay: '09/09/22 - 09/13/22',
      status: 'Check out',
    },
    {
      guest: 'Dianne Kilmarnock-Thompson',
      accommodation: 'Deluxe King - DLK(341)',
      stay: '09/09/22 - 09/12/22',
      status: 'Check out',
    },
    {
      guest: 'Cameron Harrison',
      accommodation: 'Deluxe King - DLK(341)',
      stay: '09/09/22 - 09/12/22',
      status: 'Check out',
    },
  ];

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" gutterBottom>
        Recent Activities
      </Typography>
      <List>
        {activities.map((activity, index) => (
          <ListItem key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <ListItemText
              primary={activity.guest}
              secondary={`${activity.accommodation} | ${activity.stay}`}
            />
            <Button variant="contained" color="primary">
              {activity.status}
            </Button>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default GuestActivityList;
