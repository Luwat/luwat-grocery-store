const { Router } = require("express");
const { getAllCategoriesAndItems, createCategory, createItem, createItemGet } = require("../controllers/categories.controller");

const indexRouter = Router();

indexRouter.get("/", getAllCategoriesAndItems);

indexRouter.get("/item/new", createItemGet);

indexRouter.post("/item/new", createItem);

indexRouter.get("/category/new", (req, res) => res.render("createCategory"));

indexRouter.post("/category/new", createCategory);

module.exports = indexRouter;