const express = require("express");
const productRoutes = express.Router();
const {
  createProduct,
  listAllProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

productRoutes.post("/api/product", createProduct);
productRoutes.get("/api/products", listAllProducts);
productRoutes.put("/api/product/:id", updateProduct);
productRoutes.delete("/api/product/:id", deleteProduct);

module.exports = productRoutes;
