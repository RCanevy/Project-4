const express = require("express");
const app = express();

app.get("/info", (req, res) => {
  res.json({
    service: "info-service",
    status: "running",
    timestamp: new Date().toISOString()
  });
});

app.listen(8080, () => {
  console.log("Info service running on port 8080");
});
