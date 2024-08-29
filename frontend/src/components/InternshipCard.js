import React from 'react';
import { Card, CardContent, Typography, Box, Button, CardActions } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';

const InternshipCard = ({ title, company, location, salary, duration }) => {
  return (
    <Card sx={{ minWidth: 275, marginBottom: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6">{title}</Typography>
          <Typography color="text.secondary">{company}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginTop: 1 }}>
          <LocationOnIcon />
          <Typography variant="body2" color="text.secondary">{location}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginTop: 1 }}>
          <AccessTimeIcon />
          <Typography variant="body2" color="text.secondary">{duration}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, marginTop: 1 }}>
          <MonetizationOnIcon />
          <Typography variant="body2" color="text.secondary">{salary}</Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="primary">Apply Now</Button>
      </CardActions>
    </Card>
  );
};

export default InternshipCard;
