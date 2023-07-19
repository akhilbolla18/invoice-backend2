const mongoose = require("mongoose");
/* creating schema :- 3 parameters. 
1. Invoice Date 
2. Invoice Number 
3.Invoice Amount */
const invoiceSchema = new mongoose.Schema(
  {
    invoiceNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    invoiceAmount: {
      type: Number,
      required: true,
    },
    invoiceDate: {
      type: Date,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("invoice", invoiceSchema);
