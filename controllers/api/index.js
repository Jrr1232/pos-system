const router = require("express").Router();
const checkoutroutes = require("./checkout-routes")
router.use("/checkout", checkoutroutes)


module.exports = router;