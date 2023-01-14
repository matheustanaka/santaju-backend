const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("../src/routes/clientRoute");
const productRoutes = require("../src/routes/productRoute");

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(productRoutes);

const port = process.env.PORT || "3000";

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
