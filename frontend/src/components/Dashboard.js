import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Header from './Header';
import CategoryFilter from './CategoryFilter';
import InternshipCard from './InternshipCard';

const Dashboard = () => {
  const internships = [
    { title: 'Video Editing/Making', company: 'Internshala', location: 'Gurgaon', salary: '₹ 18,000/month', duration: '6 Months' },
    { title: 'Human Resources (HR)', company: 'Hansa Cequity', location: 'Mumbai', salary: '₹ 15,000/month', duration: '6 Months' },
    { title: 'Client Servicing', company: 'Internshala', location: 'Gurgaon', salary: '₹ 18,000/month', duration: '6 Months' },
    { title: 'Marketing', company: 'Hungama', location: 'Mumbai', salary: '₹ 5,000/month', duration: '3 Months' },
    { title: 'Human Resources (HR)', company: 'Hansa Cequity', location: 'Mumbai', salary: '₹ 15,000/month', duration: '6 Months' },
    { title: 'Client Servicing', company: 'Internshala', location: 'Gurgaon', salary: '₹ 18,000/month', duration: '6 Months' },
    { title: 'Video Editing/Making', company: 'Internshala', location: 'Gurgaon', salary: '₹ 18,000/month', duration: '6 Months' },
    { title: 'Human Resources (HR)', company: 'Hansa Cequity', location: 'Mumbai', salary: '₹ 15,000/month', duration: '6 Months' },
    { title: 'Client Servicing', company: 'Internshala', location: 'Gurgaon', salary: '₹ 18,000/month', duration: '6 Months' },
    { title: 'Marketing', company: 'Hungama', location: 'Mumbai', salary: '₹ 5,000/month', duration: '3 Months' },
    { title: 'Human Resources (HR)', company: 'Hansa Cequity', location: 'Mumbai', salary: '₹ 15,000/month', duration: '6 Months' },
    { title: 'Client Servicing', company: 'Internshala', location: 'Gurgaon', salary: '₹ 18,000/month', duration: '6 Months' }
  ];

  return (
    <>
      <Header />
      <Container>
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>Latest internships on YourHR</Typography>
        <CategoryFilter />
        <Grid container spacing={2}>
          {internships.map((internship, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <InternshipCard {...internship} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Dashboard;
