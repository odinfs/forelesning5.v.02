import express from "express";

const app = express();

app.get("/login", (req, res, next) => {
  res.json({ username: "Ingen Ingesen" });
});

app.post("/login", (req, res, next) => {
  res.sendStatus(401);
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Startet nodemon on http://localhost:${server.address().port}`);
});
