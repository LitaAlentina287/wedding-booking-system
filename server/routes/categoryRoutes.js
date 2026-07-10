const express = require("express");
const router = express.Router();

const {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

// GET semua kategori
router.get("/", getAllCategories);

// GET kategori berdasarkan ID
router.get("/:id", getCategoryById);

// POST tambah kategori
router.post("/", createCategory);

// PUT ubah kategori
router.put("/:id", updateCategory);

// DELETE hapus kategori
router.delete("/:id", deleteCategory);

module.exports = router;