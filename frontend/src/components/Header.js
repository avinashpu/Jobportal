import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Button,
  Typography,
  Container,
  TextField,
  Box,
} from '@mui/material';
import SignupFormDialog from './SignupFormDialog';

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <AppBar position="fixed" color="default"> {/* Change position to "fixed" */}
      <Container>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            YourHR
          </Typography>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <TextField
              variant="outlined"
              placeholder="Search..."
              size="small"
              sx={{ marginRight: 2, width: { xs: '150px', sm: '200px', md: '300px' } }}
            />
            <Button color="inherit">Internships</Button>
            <Button color="inherit">Jobs</Button>
            <Button color="inherit">Courses</Button>
          </Box>
          <Button color="primary" variant="outlined" sx={{ ml: 2 }}>
            Login
          </Button>
          <Button color="primary" variant="contained" sx={{ ml: 2 }} onClick={handleOpen}>
            Candidate Signup
          </Button>
        </Toolbar>
      </Container>
      <SignupFormDialog open={open} handleClose={handleClose} />
    </AppBar>
  );
};

export default Header;
