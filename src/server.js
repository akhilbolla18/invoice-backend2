const app = require("./index");
require("colors");
const connectDB = require("./config/database");
require("dotenv").config();

const PORT = process.env.PORT || 8082;

app.listen(PORT, async () => {
  try {
    await connectDB();
    console.error(`Listening On Port ${PORT}`.green.bold);
  } catch (error) {
    console.error(`Error:${error.message}`.red.bold);
  }
});
