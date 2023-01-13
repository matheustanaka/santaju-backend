const express = require("express");
const routes = express.Router();
const {
  createClient,
  listAllClients,
} = require("../controllers/clientController");

routes.post("/api/client", createClient);
routes.get("/api/clients", listAllClients);
routes.put("/api/clients/:id");

module.exports = routes;
