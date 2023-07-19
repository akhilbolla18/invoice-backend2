const express = require("express");
const {
  getAllInvoice,
  creatingInvoice,
  updateInvoice,
  deleteInvoice,
  getByDate,
} = require("../controllers/invoiceController");

// middleware for validation
const validateDate = require("../middleware/invoiceValidation");
const router = express.Router();

// creating route endpoint
router.post("/invoice", validateDate, creatingInvoice);
router.patch("/invoice/:number", validateDate, updateInvoice);
router.get("/invoice", getAllInvoice);
router.get("/invoice/date/:endDate/:startDate", getByDate);
router.delete("/invoice/:number", deleteInvoice);

module.exports = router;
