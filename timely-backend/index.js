const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const UserModel = require("./loginSignup/Login.model");

// connection
const connection = require("./db");
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// route import
const authRouter = require("./loginSignup/login.route");
const taskRouter = require("./tasks/task.route");
const projectRouter = require("./Project/Project.route");

// routes
app.use("/auth", authRouter);
app.use("/user", projectRouter);
app.use("/project", taskRouter);

app.get("/", (req, res) => {
  res.send("user info");
});

// initial user data
app.get("/users", async (req, res) => {
  const user = await UserModel.find();
  res.send(user);
});

// server
app.listen(port, async () => {
  try {
    await connection;
    console.log("connected to db successfully");
  } catch {
    console.log("something went wrong while connecting to db");
  }
  console.log("Server listening on localhost:8080");
});
