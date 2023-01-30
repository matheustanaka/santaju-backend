const express = require("express");
const orderRoutes = express.Router();
const {
  createOrder,
  listAllOrders,
  listOneOrder,
  updateOrder,
  deleteOrder,
} = require("../controllers/orderController");

orderRoutes.post("/api/order", createOrder);
orderRoutes.get("/api/orders", listAllOrders);
orderRoutes.get("/api/order/:id", listOneOrder);
orderRoutes.put("/api/order/:id", updateOrder);
orderRoutes.delete("/api/order/:id", deleteOrder);

module.exports = orderRoutes;
