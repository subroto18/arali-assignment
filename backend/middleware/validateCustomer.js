const AppError = require("../utils/appError");
const validateCustomer = (req, res, next) => {
  const { name, email, phone } = req.body;

  if (!name || !email || !phone) {
    return next(new AppError("MISSING_FIELDS"));
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return next(new AppError("INVALID_PHONE", `Invalid phone: ${phone}`));
  }

  const phoneRegex = /^[0-9]{10}$/;
  if (!phoneRegex.test(phone)) {
    return next(new AppError("INVALID_PHONE"));
  }

  next();
};

module.exports = validateCustomer;
