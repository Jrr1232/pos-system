import Cookies from 'js-cookie';


const loginFormHandler = async (event, formState) => {
    try {
        event.preventDefault();

        const expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (10 * 60 * 1000));

        const { email, first_name } = formState;

        Cookies.set('email', email, { expires: expirationDate });
        Cookies.set('first_name', first_name, { expires: expirationDate });

        const response = await fetch('http://localhost:3001/hair', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                first_name: first_name,
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            alert('Logged In');
            document.location.replace('/Services');
        } else {
            alert('User Exist. Login to Existing User or Sign Up.');
            console.log(response.status);
        }
    } catch (error) {
        console.error('Error occurred:', error);
        alert('An error occurred while logging in');
    }
};

export default loginFormHandler;
