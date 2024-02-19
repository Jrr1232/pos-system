import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Cookies from 'js-cookie';

  function Wig() {
    const [formState, setFormState] = useState({
      first_name: '',
      last_name: '',
      address: '',
      email: ''
    });
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    const loginFormHandler= async (event) => {
    event.preventDefault();
    
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (10 * 60 * 1000));

    const { email, first_name } = formState;

    Cookies.set('email', email, { expires: expirationDate });
    Cookies.set('first_name', first_name, { expires: expirationDate });


    const response = await fetch('http://localhost:3001/wigs', {
      method: 'POST',
      body: JSON.stringify({
          email: email,
          first_name : first_name,
          
      }),
      headers: { 'Content-Type': 'application/json' },
  });

    if (response.ok){
      alert('Logged In.')
      document.location.replace('/services01');
    } else {
      alert('User not found.')
      console.log(response.status)
    }

    
    }
  
    const signupFormHandler = async (event) => {
      event.preventDefault();
      console.log(formState);
    
      if (formState.first_name && formState.last_name) {
        try {
          const response = await fetch('http://localhost:3001/wigs', {
            method: 'POST',
            body: JSON.stringify({
              first_name: formState.first_name,
              last_name: formState.last_name,
              address: formState.address,
              email: formState.email,
            }),
            headers: { 'Content-Type': 'application/json' },
          });
          
          console.log('Response from server:', response); // Log the response
    
          if (response.ok) {
            document.location.replace('/services01');
          }
    
          alert(response.ok ? 'Signed Up' : 'Failed to sign up');
          console.log(response.ok ? 'signed up' : 'failed to sign up');
        } catch (error) {
          console.error('Error occurred:', error);
          alert('An error occurred while signing up');
        }
      } else {
        alert('Please fill in all required fields');
      }
    };
    
    useEffect(() => {
      const switchers = document.querySelectorAll('.switcher');
  
      function handleSwitcherClick(event) {
        switchers.forEach((item) => item.parentElement.classList.remove('is-active'));
        event.currentTarget.parentElement.classList.add('is-active');
      }
  
      switchers.forEach((item) => {
        item.addEventListener('click', handleSwitcherClick);
  
        return () => {
          item.removeEventListener('click', handleSwitcherClick);
        };
      });
  
      return () => {
        switchers.forEach((item) => {
          item.removeEventListener('click', handleSwitcherClick);
        });
      };
    }, []);
    
    return (
      <>
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={6} >
        <Grid item id="form-container">
        <section className="forms-section">
        <h1 className="section-title"></h1>
        <div className="forms">
          <div className="form-wrapper is-active">
            <button type="button" className="switcher switcher-login">
              Login
              <span className="underline"></span>
            </button>
            <form className="form form-login" onSubmit={loginFormHandler}>
              <fieldset>
                <legend>Please, enter your email and password for login.</legend>
                <div className="input-block">
                  <label htmlFor="login-email">E-mail</label>
                  <input id="login-email" type="email" name="email"  onChange={handleChange}required  />
                </div>
                <div className="input-block">
                  <label htmlFor="first-name">First Name</label>
                  <input id="first-name" type="text" name="first_name"  onChange={handleChange}required  />
                </div>
              </fieldset>
              <button type="submit" className="btn-login">Login</button>
            </form>
          </div>
          <div className="form-wrapper">
            <button type="button" className="switcher switcher-signup">
              Sign Up
              <span className="underline"></span>
            </button>
            <form className="form form-signup" onSubmit={signupFormHandler}>
              <fieldset>
                <legend>Please, enter your email, first name, last name, PIN and PIN confirmation for sign up.</legend>
                <div className="input-block">
                  <label htmlFor="signup-first_name">First name</label>
                  <input id="signup-first_name" type="text" name="first_name" value={formState.first_name} onChange={handleChange}required />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-last_name">Last Name</label>
                  <input id="signup-last_name" type="text" name="last_name"  value={formState.last_name} onChange={handleChange}required />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-email">E-mail</label>
                  <input id="signup-email" type="text" name ="email" value={formState.email} onChange={handleChange}required />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-password">Address</label>
                  <input id="signup-password" type="text" name="address"  value={formState.pin} onChange={handleChange}required />
                </div>
              </fieldset>
              <button type="submit" className="btn-signup">Sign Up</button>
            </form>
          </div>
        </div>
      </section>
      </Grid>
      </Grid>
      </>
   );
  }
export default Wig;
