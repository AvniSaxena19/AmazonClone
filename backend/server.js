const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
// const PRODUCT = require("./models/product");

const cors = require("cors");

const PORT = process.env.PORT_SERVER || 4001;
require("./config/db");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(express.json());

app.get("/products", async (req, res) => {
  try {
    const products = await PRODUCT.find();
    res.json(products);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const product = await PRODUCT.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

app.post("/multiple-post/products", async (req, res) => {
  try {
    const products = req.body.map((product) => ({
      ...product,
      quantity: product.quantity || 1,
      selected: product.selected || false,
    }));

    const insertedProducts = await PRODUCT.insertMany(products);
    res.json(insertedProducts);
  } catch (error) {
    console.error("Error inserting products:", error.message);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});