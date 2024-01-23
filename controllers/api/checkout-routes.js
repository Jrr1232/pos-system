const router = require("express").Router();
const Billing = require("../../client/models/Billing");

router.post("/", async (req, res) => {
    try {
        console.log('Session ID in /checkout/hair:', req.sessionID);
        console.log('Session email in /checkout/hair:', req.session.email);
        console.log('Session first_name in /checkout/hair:', req.session.first_name);

        if (!req.session.email || !req.session.first_name) {
            // Log an error and return a response indicating that session properties are missing
            console.error('Error: Session properties are missing');
            return res.status(400).json({ message: 'Session properties are missing' });
        }

        const billData = await Billing.create({
            first_name: req.session.first_name,
            email: req.session.email,
            service_name: req.body.service_name,
            service_code: req.body.service_code,
            price: req.body.service_price,
        });

        res.status(200).json(billData);
    } catch (err) {
        console.error(err);
        res.status(400).json(err);
    }
});

module.exports = router;
