const Invoice = require("../models/invoiceModel");
const moment = require("moment");

// Middleware to validate the date
const validateDate = async (req, res, next) => {
  const previousDate = await Invoice.findOne({
    invoiceNumber: { $lt: req.body.invoiceNumber },
  }).sort({ invoiceNumber: -1 });
  const nextDate = await Invoice.findOne({
    invoiceNumber: { $gt: req.body.invoiceNumber },
  });

  // condition to check if date is present in between the previous and next

  if (previousDate && nextDate) {
    const validate = moment(req.body.invoiceDate).isBetween(
      previousDate.invoiceDate,
      nextDate.invoiceDate,
      "days"
    );
    if (validate) {
      return next();
    } else {
      return res.status(400).send({
        message: `The Date must be in between ${previousDate.invoiceDate.toString()} and ${nextDate.invoiceDate.toString()}`,
      });
    }
  }
  return next();
};

module.exports = validateDate;
