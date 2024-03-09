const router = require("express").Router();
const Billing = require("../../client/models/Billing");
const Hair_client = require("../../client/models/Hair_client");
const Wig_client = require("../../client/models/Wig_client");

router.post("/", async (req, res) => {
    try {
        const cart = req.body.cart;

        const billPromises = cart.map(async (item) => {
            const name = item.name;
            const price = item.price;
            const code = item.code;

            let userData;
            let client_address;
            let client_last_name;
            let client_id;
            let client_type;

            userData = await Hair_client.findOne({
                where: { email: req.body.email }
            });

            if (!userData) {
                userData = await Wig_client.findOne({
                    where: { email: req.body.email }
                });
            }

            if (userData) {
                client_address = userData.address;
                client_first_name = userData.first_name;
                client_last_name = userData.last_name;
                client_id = userData.client_id;
                client_type = userData.client_type;
            } else {
                throw new Error('Client not found');
            }

            return Billing.create({
                client_id: client_id,
                first_name: client_first_name,
                last_name: client_last_name,
                address: client_address,
                email: req.body.email,
                service_name: name,
                service_code: price,
                price: code,
                client_type: client_type
            });
        });

        const billData = await Promise.all(billPromises);

        console.log("Billing records created:", billData);

        res.status(200).json({ message: 'Billing records created successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;
