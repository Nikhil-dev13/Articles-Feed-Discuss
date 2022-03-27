require("dotenv").config();

const express = require("express");
const cors = require("cors");

const sequelize = require("./config/db");
const routeLogger = require("./middleware/logger");

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const app = express();

app.use(express.json({ extended: false }));
app.use(cors());
app.use(routeLogger);

app.get("/", (req, res) => res.send("Welcome to Articles Feed API"));
app.get("/status/", (req, res) => res.send("API up and Running"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
