const mongoose = require("mongoose");
require("dotenv").config();
function dbConnect() {
  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DB Connection Successfull");
    })
    .catch((error) => {
      console.log("Received an error");
      console.log(error.message);
      process.exit(1);
    });
}

module.exports = dbConnect;
