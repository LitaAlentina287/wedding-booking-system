const categoryModel = require("../models/categoryModel");

// Menampilkan semua kategori
const getAllCategories = async (req, res) => {
  try {
    const categories = await categoryModel.getAllCategories();

    res.status(200).json({
      success: true,
      message: "Data kategori berhasil diambil",
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal mengambil data kategori",
      error: error.message,
    });
  }
};

// Menampilkan kategori berdasarkan ID
const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await categoryModel.getCategoryById(id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Kategori tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      message: "Data kategori berhasil ditemukan",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal mengambil data kategori",
      error: error.message,
    });
  }
};

// Menambahkan kategori
const createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;

    const category = await categoryModel.createCategory(name, description);

    res.status(201).json({
      success: true,
      message: "Kategori berhasil ditambahkan",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal menambahkan kategori",
      error: error.message,
    });
  }
};

// Mengubah kategori
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    const category = await categoryModel.updateCategory(
      id,
      name,
      description
    );

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Kategori tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      message: "Kategori berhasil diperbarui",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal memperbarui kategori",
      error: error.message,
    });
  }
};

// Menghapus kategori
const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await categoryModel.deleteCategory(id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Kategori tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      message: "Kategori berhasil dihapus",
      data: category,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal menghapus kategori",
      error: error.message,
    });
  }
};

module.exports = {
  getAllCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};