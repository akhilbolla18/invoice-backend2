const Invoice = require("../models/invoiceModel");

// to create an invoice :-
const creatingInvoice = async (req, res, next) => {
  try {
    const invoice = await Invoice.create(req.body);
    return res.status(201).send(invoice);
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};

// to get all invoices stored in the db :-
const getAllInvoice = async (req, res, next) => {
  try {
    const invoices = await Invoice.find().lean().exec();
    return res.status(201).send(invoices);
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};

// to update based on invoice number :-
const updateInvoice = async (req, res, next) => {
  try {
    const invoice = await Invoice.findOneAndUpdate(
      { invoiceNumber: req.params.number },
      req.body,
      { new: true }
    );
    return res.status(201).send(invoice);
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};

// To DELETE an Invoice based on Invoice number :-
const deleteInvoice = async (req, res, next) => {
  try {
    const invoice = await Invoice.findOneAndDelete({
      invoiceNumber: req.params.number,
    });
    return res.status(204).send(invoice);
  } catch (error) {
    return res.status(404).send({ message: error.message });
  }
};

// To GET Invoice between two dates :-
const getByDate = async (req, res, next) => {
  try {
    const invoices = await Invoice.aggregate([
      {
        $match: {
          invoiceDate: {
            $lt: new Date(req.params.endDate),
            $gt: new Date(req.params.startDate),
          },
        },
      },
    ]);
    return res.status(200).send(invoices);
  } catch (error) {
    return res.status(400).send({ message: error.message });
  }
};

module.exports = {
  creatingInvoice,
  getAllInvoice,
  updateInvoice,
  deleteInvoice,
  getByDate,
};
