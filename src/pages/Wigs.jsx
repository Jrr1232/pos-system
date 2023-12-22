import React, { useState, useEffect } from 'react';


function Wigs() {
  const [formState, setFormState] = useState({
    first_name: '',
    last_name: '',
    address: '',
    pin: '',
    email:''
  });
    
    const loginHandler = (props) => {
  
      const navigate = useNavigate();
  
      const onButtonClick = () => {
  
      }
  
    }
  

    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    const signupFormHandler = async (event) => {
      event.preventDefault();
      console.log(formState);
      console.log("In the signUp")
  
      if (formState.first_name && formState.last_name && formState.email) {
        const response = await fetch('http://localhost:3001/wig', {
          method: 'POST',
          body: JSON.stringify({
            first_name: formState.first_name,
            last_name: formState.last_name,
            pin: formState.pin,
            email: formState.email,
  
          }),
          headers: { 'Content-Type': 'application/json' },
        });
  
        if (response.ok) {
          document.location.replace('/Services');
        }
  
        alert(response.ok ? 'Signed Up' : 'Failed to sign up.');
        console.log(response.ok ? 'signed up' : 'failed to sign up');
      }

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
  }

  
  return (
    <>
      <section className="forms-section">
      <h1 className="section-title"></h1>
      <div className="forms">
        <div className="form-wrapper is-active">
          <button type="button" className="switcher switcher-login">
            Login
            <span className="underline"></span>
          </button>
          <form className="form form-login" onSubmit={loginHandler}>
            <fieldset>
              <legend>Please, enter your email and password for login.</legend>
              <div className="input-block">
                <label htmlFor="login-email">E-mail</label>
                <input id="login-email" type="email"
required />
              </div>
              <div className="input-block">
                <label htmlFor="login-password">PIN</label>
                <input id="login-password" type="password" 
required />
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
                <label htmlFor="signup-username">First name</label>
                <input id="signup-username" type="text" name="first_name" value={formState.first_name} onChange={handleChange}required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-username">Last Name</label>
                <input id="signup-username" type="text" name="last_name"  value={formState.last_name} onChange={handleChange}required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-email">E-mail</label>
                <input id="signup-email" type="email" value={formState.email} onChange={handleChange}required />
              </div>
              <div className="input-block">
                <label htmlFor="signup-password">PIN</label>
                <input id="signup-password" type="password" name="pin"  value={formState.pin} onChange={handleChange}required />
              </div>
            </fieldset>
            <button type="submit" className="btn-signup">Sign Up</button>
          </form>
        </div>
      </div>
    </section>
    </>
 );
}

export default Wigs;
