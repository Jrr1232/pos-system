import React from 'react';
import Grid from '@mui/material/Grid';

function Home() {
  
  return (
    <>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={6} id="services">
          <Grid item id="wigs-container">
            <div id="wig-box">
            <a href="/Wigs">
              <img
              src="/public/Wigs-logos.jpeg"
              alt="Wigs"
              style={{transition: 'transform 0.3s', cursor: 'pointer' }}
              className="hover-effect"
              />
            </a>
            </div>
          </Grid>
          <Grid item >
            <div id="hair-box">
              <a href="/Hair">
                <img
                  src='/public/Hair-logos.jpeg'
                  alt="Hair"
                  style={{transition: 'transform 0.3s' }}
                  className="hover-effect"
                />
              </a>
            </div>
          </Grid>
        </Grid>
    </>
  );
}

export default Home;