const pool = require("./pool");

async function getAllItems() {
    const { rows } = await pool.query("SELECT * FROM items");
    return rows;
}

async function getAllCategories() {
    const { rows } = await pool.query("SELECT * FROM categories");
    return rows;
}

async function createItem(category_id, name, description, price, quantity) {
    return await pool.query("INSERT INTO items (category_id, name, description, price, quantity) VALUES ($1, $2, $3, $4, $5)", [category_id, name, description, price, quantity]);
}

async function createCategory(name, description) {
    return await pool.query("INSERT INTO categories (name, description) VALUES ($1, $2)", [name, description]);
}

module.exports = {
    getAllItems,
    getAllCategories,
    createItem,
    createCategory
}