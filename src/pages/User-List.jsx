import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';

function UserList() {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/hair', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(response => response.json())
        .then(data => {
        console.log(data)
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
    }, []); // Empty dependency array ensures this effect runs only once on component mount

    return (
        <>
            <Grid container spacing={2}>
            </Grid>
        </>
    );
}

export default UserList;
