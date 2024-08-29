import React from 'react';
import { Box, Button } from '@mui/material';

const CategoryFilter = () => {
  const categories = ['Big brands', 'Work from home', 'Part-time', 'MBA', 'Engineering', 'Media', 'Design', 'Data Science'];

  return (
    <Box sx={{ my: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      {categories.map((category) => (
        <Button key={category} variant="outlined">
          {category}
        </Button>
      ))}
    </Box>
  );
};

export default CategoryFilter;
