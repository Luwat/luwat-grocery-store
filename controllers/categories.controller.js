const db = require("../db/queries");

async function getAllCategoriesAndItems(req, res) {
  const categories = await db.getAllCategories();
  const items = await db.getAllItems();
//   console.log(items, categories);
  res.render("index", { categories, items });
}

// async function getAllItems(req, res) {
//     const items = await db.getAllItems();
//     res.render("index", { items });
// }

async function createCategory(req, res) {
  const { name, description } = req.body;
  await db.createCategory(name, description);
  res.redirect("/");
}

async function createItemGet(req, res) {
  const categories = await db.getAllCategories();
  res.render("createItem", { categories });
}
async function createItem(req, res) {
  const { category_id, name, description, price, quantity } = req.body;
  await db.createItem(category_id, name, description, price, quantity);
  res.redirect("/");
}

module.exports = {
  getAllCategoriesAndItems,
  createItemGet,
  createCategory,
  createItem,
};
