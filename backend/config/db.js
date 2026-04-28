const AppError = require("../utils/appError");
let customers = [];

const db = {
  getCustomers: () => customers,
  addCustomer: (customer) => {
    customers.push(customer);
    return customer;
  },
  deleteCustomer: (id) => {
    const exists = customers.find((item) => item.id == id);

    if (!exists) {
      throw new AppError("CUSTOMER_NOT_FOUND");
    }

    let res = customers.filter((c) => c.id !== id);
    customers = res;
    return res;
  },
};

module.exports = db;
