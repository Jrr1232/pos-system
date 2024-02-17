const router = require("express").Router();
const Billing = require("../../client/models/Billing");
const Cookies = require('js-cookie');
const Hair_client = require("../../client/models/Hair_client");

router.post("/", async (req, res) => {
    try {
        const cart = req.body.cart;
        const firstItem = cart[0];
        const name = firstItem.name;
        const price = firstItem.price;
        const code = firstItem.code;

        const userData = await Hair_client.findOne({
            where: { email: req.body.email }
        });

        const client_address = userData.dataValues.address
        const client_last_name = userData.dataValues.last_name
        const client_id = userData.dataValues.client_id
        const client_type = userData.dataValues.client_type

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
