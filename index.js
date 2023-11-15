const express = require("express");
const home = require("./routes/home");
require("dotenv").config();
const app = express();

app.use(express.json());

app.use("/home", home);

const PORT = process.env.PORT || 7000;

app.listen(PORT, console.log(`Server is running at ${PORT}`));
