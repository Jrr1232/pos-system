import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import Product from '../components/Services';

const HairServices = (props) => {
 
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
      <Product message="My awesome shopping cart"></Product> 
      </Grid>
    </Grid>
  );
};

export default HairServices;
