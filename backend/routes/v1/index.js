const express = require("express");
const router = express.Router();
const customerRoutes = require("./customerRoutes");
router.use("/customer", customerRoutes);
module.exports = router;
