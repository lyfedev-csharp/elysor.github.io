import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/status", (req, res) => {
  res.json({ status: "ok", service: "elysor api" });
});

app.get("/api/info", (req, res) => {
  res.json({
    name: "Elysor API",
    domain: "api.elysor.online"
  });
});

app.listen(PORT, () => {
  console.log("API running on port " + PORT);
});