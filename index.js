const express = require("express");
const app = express();
const mongooseConnection = require("./helpers/mongodb-connection");
const PORT = 3000;
const allEmployeeRoutes = require("./routes/allEmployees");

const cors = require("cors");
var path = require("path");
var serveStatic = require("serve-static");
mongooseConnection();
app.use(serveStatic(path.join(__dirname, "public-optimized")));
app.use(serveStatic(path.join(__dirname, "public")));
app.use(cors());
app.use("/api/employees", allEmployeeRoutes);

app.get("/", (req, res) => {
  res.status(200).send("HELLO...");
});

app.listen(PORT, () => console.log(`Live on http://localhost:${PORT}`));
