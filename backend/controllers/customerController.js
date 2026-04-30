const db = require("../config/db");

const { v4: uuidv4 } = require("uuid");
const asyncHandler = require("../utils/asyncHandler");
const sendResponse = require("../utils/responseHandler");
const appError = require("../utils/appError");

const addCustomer = asyncHandler((req, res) => {
  const { name, email, phone } = req.body;

  const newCustomer = {
    id: uuidv4(),
    name,
    email,
    phone,
  };
  db.addCustomer(newCustomer);
  sendResponse(res, 201, "Customer created successfully", newCustomer);
});

const getCustomers = asyncHandler((req, res) => {
  const customers = db.getCustomers();
  sendResponse(res, 200, "Customers fetched successfully", customers);
});

const deleteCustomer = asyncHandler((req, res, next) => {
  const { id } = req.params;

  if (!id) {
    return next(new appError("CUSTOMER_NOT_FOUND"));
  }
  const customers = db.deleteCustomer(id);

  sendResponse(res, 200, "Customer deleted successfully", customers);
});

module.exports = {
  addCustomer,
  getCustomers,
  deleteCustomer,
};
