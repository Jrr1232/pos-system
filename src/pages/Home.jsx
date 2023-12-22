import React from 'react';
import Grid from '@mui/material/Grid';

function Home() {
  
  return (
    <>
     <div style={{ margin: '0 auto', maxWidth: '800px' }}>
      <form>
        <Grid container spacing={2} id="services">
          <Grid item xs={6} id="wigs-container">
            <div id="wigs">
            <a href="/wigs">
              <img
              src="/public/Wigs-logos.jpeg"
              alt="Wigs"
              style={{ width: '200%', transition: 'transform 0.3s', cursor: 'pointer' }}
              className="hover-effect"
              />
            </a>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div id="hair">
              <a href="/hair">
                <img
                  src='/public/Hair-logos.jpeg'
                  alt="Hair"
                  style={{ width: '200%', transition: 'transform 0.3s' }}
                  className="hover-effect"
                />
              </a>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
    </>
  );
}

export default Home;