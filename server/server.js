import express from  "express";

const app = express();


app.get("/login", (req, res, next) => {
    res.json({ username: "Ingen Ingesen" });
});

app.post("/login", (req, res, next) => {
    res.sendStatus(401);
});

app.listen(3000);