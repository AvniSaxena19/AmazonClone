const dotenv = require("dotenv");
dotenv.config();
const PORT =5000;
const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const Signup = require("./models/signup");

require("./config/db");

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.post("/signup", async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Password does not match" });
  }
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);
  Signup.findOne({ email: email }).then((user) => {
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }
    const newUser = new Signup({
      username,
      email,
      password: hashedPassword,
    });
    newUser
      .save()
      .then(() => {
        return res.status(200).json({ message: "User created successfully" });
      })
      .catch((err) => {
        return res.status(500).json({ message: err.message });
      });
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }
  Signup.findOne({ email: email }).then(async (user) => {
    if (!user) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const isMatched = await bcrypt.compare(password, user.password);
    if (!isMatched) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    return res.status(200).json({ message: "Login successful" });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
 });