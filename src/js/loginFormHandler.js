const loginFormHandler = async (event, formState) => {
    try {
        event.preventDefault();

        const { email, first_name, last_name, address } = formState;

        console.log(email);

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
            alert('Failed to log in');
            console.log(response.status);
        }
    } catch (error) {
        console.error('Error occurred:', error);
        alert('An error occurred while logging in');
    }
};

export default loginFormHandler;
