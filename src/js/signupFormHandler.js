import Cookies from 'js-cookie';

const signupFormHandler = async (event, formState) => {
    event.preventDefault();

    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (10 * 60 * 1000));

    const { email, first_name } = formState;

    Cookies.set('email', email, { expires: expirationDate });
    Cookies.set('first_name', first_name, { expires: expirationDate });

    if (formState.first_name && formState.last_name) {
        try {
            const response = await fetch('http://localhost:3001/hair', {
                method: 'POST',
                body: JSON.stringify({
                    username: formState.username,
                    first_name: formState.first_name,
                    last_name: formState.last_name,
                    address: formState.address,
                    email: formState.email,
                }),
                headers: { 'Content-Type': 'application/json' },
            }).catch(error => {
                console.error('Error during fetch:', error);
                throw error; // Re-throw the error to ensure it propagates
            });


            console.log('Response from server:', response); // Log the response

            if (response.ok) {
                document.location.replace('/Services');
            }

            alert(response.ok ? 'Signed Up' : 'Failed to sign up');
            console.log(response.ok ? 'signed up' : 'failed to sign up');
        } catch (error) {
            console.error('Error during fetch:', error.message);
            alert('An error occurred while signing up');
        }
    } else {
        alert('Please fill in all required fields');
    }
};

export default signupFormHandler;
