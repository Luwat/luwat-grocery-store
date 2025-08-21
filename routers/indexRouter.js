const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.send("Welcome to Luwat Grocery Store");
})

module.exports = indexRouter;