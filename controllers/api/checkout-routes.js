const router = require("express").Router();
const Billing = require("../../client/models/Billing");
const Hair_client = require("../../client/models/Hair_client");
const Wig_client = require("../../client/models/Wig_client");

router.post("/", async (req, res) => {
    try {
        const cart = req.body.cart;
        const firstItem = cart[0];
        const name = firstItem.name;
        const price = firstItem.price;
        const code = firstItem.code;

        let userData;
        let client_address;
        let client_last_name;
        let client_id;
        let client_type;

        // Check Hair_client first
        userData = await Hair_client.findOne({
            where: { email: req.body.email }
        });

        // If not found in Hair_client, check Wig_client
        if (!userData) {
            userData = await Wig_client.findOne({
                where: { email: req.body.email }
            });
        }

        if (userData) {
            client_address = userData.address;
            client_last_name = userData.last_name;
            client_id = userData.client_id;
            client_type = userData.client_type;
        } else {
            // If neither Hair_client nor Wig_client found, return an error
            return res.status(404).json({ message: 'Client not found' });
        }

        const billData = await Billing.create({
            client_id: client_id,
            first_name: req.body.first_name,
            last_name: client_last_name,
            address: client_address,
            email: req.body.email,
            service_name: name,
            service_code: price,
            price: code,
            client_type: client_type
        });

        // Send a success response
        res.status(200).json(billData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
