import express from "express";

const app = express();

app.get("/api/login", (req, res, next) => {
  res.json({ username: "Ingen Ingesen" });
});

app.post("/api/login", (req, res, next) => {
  res.sendStatus(401);
});

app.use(express.static("../client/dist"));

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Startet nodemon on http://localhost:${server.address().port}`);
});
