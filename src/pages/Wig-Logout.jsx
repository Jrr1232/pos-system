import React from 'react';
import Grid from '@mui/material/Grid';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function WigLogout() {
    
    const navigateTo = useNavigate();
    const RemoveCookie = () => {
        Cookies.remove("email");
        Cookies.remove("first_name");
        alert("Logged Out");
        navigateTo("/"); 

    };



  return (
    <>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={15} id="services">
          <Grid item id="logout">
            <button onClick={RemoveCookie}>Logout</button>
          </Grid>
          <Grid item id ="continue-shopping">
          <a href="/services01">Continue Shopping</a>
          </Grid>
        </Grid>
    </>
  );
}

export default WigLogout;