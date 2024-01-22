const router = require("express").Router();
const checkoutRoutes = require("./checkoutRoutes")
router.use("/checkout", checkoutRoutes)


module.exports = router;