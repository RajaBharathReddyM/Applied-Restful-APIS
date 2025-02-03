const express = require("express");
const app = express();
const playerRoutes = require("./routes/players");
const mongoose = require('mongoose');
const port = 27017;

app.get("/", (req, res) => {
    res.send("Hello World!");
  });
  
  mongoose
  .connect("mongodb://localhost:27017/cricket")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log("Example app listening on port" + port);
    });
  })
  .catch((err) => console.error("Failed to connect", err));

  app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/players", playerRoutes);