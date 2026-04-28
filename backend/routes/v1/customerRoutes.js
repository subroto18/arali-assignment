const express = require("express");
const router = express.Router();
const {
  addCustomer,
  getCustomers,
  deleteCustomer,
} = require("../../controllers/customerController");
const validateCustomer = require("../../middleware/validateCustomer");
router.post("/", validateCustomer, addCustomer);
router.get("/", getCustomers);
router.delete("/:id", deleteCustomer);


module.exports = router;
