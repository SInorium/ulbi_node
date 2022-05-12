require("dotenv").config();
const express = require("express");
// const path = require("path");
const sequelize = require("./db");
const models = require("./models/models");
const cors = require("cors");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const fileupload = require("express-fileupload");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileupload());
app.use("/api", router);
// app.use(express.static(path.resolve(__dirname, "static")));

// Обработка ошибок, всегда полседний
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => console.log(`Server started on ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};

start();
