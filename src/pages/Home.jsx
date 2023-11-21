import React, { useState } from 'react';
import Grid from '@mui/material/Grid';



function Home() {
  

  const [formState, setFormState] = useState({
    first_name: '',
    last_name: '',
    address: '',
    pin: ''
  });



  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      console.log(data)
      alert('Added User');
    } catch (e) {
      console.error(e);
      alert('Need to update a field')
    }
  };
  return (
    <>
    <div id ='landing-page' style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Grid container spacing={20}>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <div id='new-customer'>
            <h1>New Customer</h1>
            <form onSubmit={handleFormSubmit}>
              <input type='text' placeholder='Enter First Name' id='first_name' value={formState.first_name}
                  onChange={handleChange} name='first_name'
                  />
              <input type='text' placeholder='Enter Last Name' id='last_name' value={formState.last_name}
                  onChange={handleChange} name='last_name'/>
              <input type='text' placeholder='Enter Address' id='address' value={formState.address}
                  onChange={handleChange} name='address'/>
              <input type='text' placeholder='Enter PIN' id='pin' value={formState.pin}
                  onChange={handleChange} name='pin' /> 
            <button id ='new-customer-btn' type='submit'>Submit</button>
            </form>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={6} xl={6}>
          <div id='existing-customer'>
            <h1>Existing Customer</h1>
            <form>
              <input type='text' placeholder='Enter First Name' />
              <input type='text' placeholder='Enter Last Name' />
              <input type='text' placeholder='Enter PIN' />
            </form>
            <button id ='existing-customer-btn'>Login</button>
          </div>
        </Grid>
      </Grid>
      
    </div>
    <div id='administrator'>
        <h4>Admin</h4>
        <form>
          <input type='text' placeholder='Enter username' />
        </form>
      </div>
    </>
  );
}

export default Home;
