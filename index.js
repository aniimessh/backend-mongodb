const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 4000;
const todoRoutes = require("./routes/Todos");
app.use(express.json()); //middleware using express.json();
app.use("/app/v1", todoRoutes);
app.listen(PORT, () => {
  console.log(`sever starter at ${PORT}`);
});
const dbConnect = require("./config/databse");
dbConnect();
app.get("/", (req, res) => {
  res.send(`<h1>This is HomePage </h1>`);
});
