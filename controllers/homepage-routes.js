const router = require('express').Router();
const Wig_client = require('../client/models/Wig_client');
const Hair_client = require('../client/models/Hair_client');

// signup new client
router.post('/wigs', async (req, res) => {
    try {
        const dbUserData = await Wig_client.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            pin: req.body.pin,
            email: req.body.email,
            client_type: 'wig'
        });

        req.session.save(() => {
            req.session.logged_in = true;
            console.log(req.session.logged_in)
            res.json(dbUserData)
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
router.post('/hair', async (req, res) => {
    try {
        const dbUserData = await Hair_client.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            address: req.body.address,
            pin: req.body.pin,
            email: req.body.email,
            client_type: 'hair'
        });

        req.session.save(() => {
            req.session.logged_in = true;
            console.log(req.session.logged_in)
            res.json(dbUserData)
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const hairClientData = await Hair_client.findOne({
            where: {
                email: req.body.email,
            },
        });

        if (!hairClientData) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }

        const validPassword = await hairClientData.checkPassword(req.body.password);

        if (!validPassword) {
            res
                .status(400)
                .json({ message: 'Incorrect email or password. Please try again!' });
            return;
        }
        req.session.save(() => {
            req.session.logged_in = true;
            req.session.user_id = hairClientData.id;
            req.session.email = hairClientData.email;
            console.log(req.session.email);
            res.json({ user: hairClientData, message: 'You are logged in' });
        });

    } catch (err) {
        console.log(err);
        res.status(500).json(err);

    }
});

module.exports = router;
