import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import loginFormHandler from '../js/loginFormHandler';
import signupFormHandler from '../js/signupFormHandler';

function Hair() {
    const [formState, setFormState] = useState({
      username:'',
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
            <form className="form form-login" onSubmit={(event) => loginFormHandler(event,formState)}>
              <fieldset>
                <legend>Please, enter your email or username for login.</legend>
                <div className="input-block">
                  <label htmlFor="login-email">E-mail</label>
                  <input id="login-email" type="email" name="email"  onChange={handleChange}required  />
                </div>
                <div className="input-block">
                  <label htmlFor="username">Username</label>
                  <input id="username" type="text" name="username"  onChange={handleChange}required  />
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
            <form className="form form-signup" onSubmit={(event) => signupFormHandler(event,formState)}>
              <fieldset>
                <legend>Please, enter an email, username, first name, last name, PIN and PIN confirmation for sign up.</legend>
                <div className="input-block">
                  <label htmlFor="signup-username">Username</label>
                  <input id="signup-username" type="text" name="username" value={formState.username} onChange={handleChange}required />
                </div>
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
                  <input id="signup-email" type="email" name ="email" value={formState.email} onChange={handleChange}required />
                </div>
                <div className="input-block">
                  <label htmlFor="signup-address">Address</label>
                  <input id="signup-address" type="text" name="address"  value={formState.pin} onChange={handleChange}required />
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
export default Hair;
