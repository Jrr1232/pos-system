const router = require('express').Router();
const Wig_client = require('../client/models/Wig_client');
const Hair_client = require('../client/models/Hair_client');

// Combined route handler for both creating a new Hair_client and logging in
router.post('/Hair', async (req, res) => {
    try {
        // Check if the user is already logged in
        if (req.session.logged_in) {
            console.log('Session already exists');
            return res.json({ message: 'Session already exists' });
        }

        // Check if the request has an email (assuming this is a common field)
        if (req.body.email) {
            // Attempt to find an existing Hair_client
            const hairClientData = await Hair_client.findOne({
                where: {
                    email: req.body.email,
                },
            });

            if (!hairClientData) {
                // If no existing Hair_client is found, create a new one
                const newHairClient = await Hair_client.create({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    address: req.body.address,
                    email: req.body.email,
                    client_type: 'hair'
                });

                // Set session properties for the new user
                req.session.logged_in = true;
                req.session.email = newHairClient.email;
                req.session.first_name = newHairClient.first_name;

                console.log('New Hair_client created and logged in');
                return res.json({ user: newHairClient, message: 'New user created and logged in' });
            } else {
                // If an existing Hair_client is found, set session properties for the existing user
                req.session.logged_in = true;
                req.session.email = hairClientData.email;
                req.session.first_name = hairClientData.first_name;

                console.log('Existing user logged in');
                return res.json({ user: hairClientData, message: 'Existing user logged in' });
            }
        } else {
            return res.status(400).json({ message: 'Email is required for this operation' });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json(err);
    }
});

router.post('/Wigs', async (req, res) => {
    try {
        // Check if the user is already logged in
        if (req.session.logged_in) {
            console.log('Session already exists');
            return res.json({ message: 'Session already exists' });
        }

        // Check if the request has an email (assuming this is a common field)
        if (req.body.email) {
            // Attempt to find an existing Hair_client
            const wigClientData = await Wig_client.findOne({
                where: {
                    email: req.body.email,
                },
            });

            if (!wigClientData) {
                // If no existing Hair_client is found, create a new one
                const newWigClient = await Wig_client.create({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    address: req.body.address,
                    email: req.body.email,
                    client_type: 'wig'
                });

                // Set session properties for the new user
                req.session.logged_in = true;
                req.session.email = newWigClient.email;
                req.session.first_name = newWigClient.first_name;

                console.log('New Hair_client created and logged in');
                return res.json({ user: newWigClient, message: 'New user created and logged in' });
            } else {
                // If an existing Hair_client is found, set session properties for the existing user
                req.session.logged_in = true;
                req.session.email = wigClientData.email;
                req.session.first_name = wigClientData.first_name;

                console.log('Existing user logged in');
                return res.json({ user: wigClientData, message: 'Existing user logged in' });
            }
        } else {
            return res.status(400).json({ message: 'Email is required for this operation' });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json(err);
    }
});

module.exports = router;
