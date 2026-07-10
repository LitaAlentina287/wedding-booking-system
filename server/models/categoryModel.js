const pool = require("../config/db");

// Mengambil semua kategori
const getAllCategories = async () => {
  const result = await pool.query(
    "SELECT * FROM categories ORDER BY id ASC"
  );
  return result.rows;
};

// Mengambil kategori berdasarkan ID
const getCategoryById = async (id) => {
  const result = await pool.query(
    "SELECT * FROM categories WHERE id = $1",
    [id]
  );
  return result.rows[0];
};

// Menambahkan kategori baru
const createCategory = async (name, description) => {
  const result = await pool.query(
    `INSERT INTO categories (name, description)
     VALUES ($1, $2)
     RETURNING *`,
    [name, description]
  );

  return result.rows[0];
};

// Mengubah data kategori
const updateCategory = async (id, name, description) => {
  const result = await pool.query(
    `UPDATE categories
     SET name = $1,
         description = $2
     WHERE id = $3
     RETURNING *`,
    [name, description, id]
  );

  return result.rows[0];
};

// Menghapus kategori
const deleteCategory = async (id) => {
  const result = await pool.query(
    "DELETE FROM categories WHERE id = $1 RETURNING *",
    [id]
  );

  return result.rows[0];
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};