const express = require("express");
const app = express();
const cors = require('cors')
const userRouter = require("./Routes/user.route")
const router = express.Router()
const connectDb = require("./Config/db");
const userModel = require("./Model/userSchema");
const bcrypt = require("bcrypt");
require('dotenv').config()

connectDb();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello User!!");
});

app.use("/user", router)

app.listen(process.env.PORT, () => {
  console.log("Server is running on port ", process.env.PORT);
});
