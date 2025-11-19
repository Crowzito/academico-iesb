// src/index.js
require("dotenv").config();
const express = require("express");
const { connect } = require("./database");
const routes = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
app.use(express.json());

app.use("/api", routes);

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start server", err);
  });
