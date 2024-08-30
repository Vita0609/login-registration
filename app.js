const express = require("express");
const cors = require("cors");
require("dotenv").config();
const authRouter = require("./routes/auth");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use((_, res) => {
    res.status(404).json({ message: "not founde" });
});
app.use((err, req, res, next) => {
    const { status = 500, message = "server error" } = err; // декструризация обьекта ошибки
    res.status(status).json({ message }); // ответ на фронтенд
});
module.exports = app;
