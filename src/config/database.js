const mongoose = require("mongoose");
require("colors");
require("dotenv").config();

// database connection
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error:${error.message}`.red.bold);
  }
};

module.exports = connectDB;
