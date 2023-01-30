const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("../src/routes/clientRoute");
const productRoutes = require("../src/routes/productRoute");
const orderRoutes = require("../src/routes/orderRoute");

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(productRoutes);
app.use(orderRoutes);

const port = process.env.PORT || "3000";

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
