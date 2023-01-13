const express = require("express");
const routes = express.Router();
const {
  createClient,
  listAllClients,
  updateClient,
  deleteClient,
} = require("../controllers/clientController");

routes.post("/api/client", createClient);
routes.get("/api/clients", listAllClients);
routes.put("/api/client/:id", updateClient);
routes.delete("/api/client/:id", deleteClient);

module.exports = routes;
