const express = require("express");
const routes = express.Router();
const {
  createClient,
  listAllClients,
  listOneClient,
  updateClient,
  deleteClient,
} = require("../controllers/clientController");

routes.post("/api/client", createClient);
routes.get("/api/clients", listAllClients);
routes.get("/api/client/:id", listOneClient);
routes.put("/api/client/:id", updateClient);
routes.delete("/api/client/:id", deleteClient);

module.exports = routes;
