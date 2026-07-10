const packageModel = require("../models/packageModel");

// Menampilkan semua paket
const getAllPackages = async (req, res) => {
  try {
    const packages = await packageModel.getAllPackages();

    res.status(200).json({
      success: true,
      message: "Data paket berhasil diambil",
      data: packages,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal mengambil data paket",
      error: error.message,
    });
  }
};

// Menampilkan paket berdasarkan ID
const getPackageById = async (req, res) => {
  try {
    const { id } = req.params;

    const packageData = await packageModel.getPackageById(id);

    if (!packageData) {
      return res.status(404).json({
        success: false,
        message: "Paket tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      message: "Data paket berhasil ditemukan",
      data: packageData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal mengambil data paket",
      error: error.message,
    });
  }
};

// Menambahkan paket baru
const createPackage = async (req, res) => {
  try {
    const {
      category_id,
      package_name,
      description,
      price,
    } = req.body;

    const image = req.file
      ? `/uploads/${req.file.filename}`
      : null;

    const packageData = await packageModel.createPackage(
      category_id,
      package_name,
      description,
      price,
      image
    );

    res.status(201).json({
      success: true,
      message: "Paket berhasil ditambahkan",
      data: packageData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal menambahkan paket",
      error: error.message,
    });
  }
};

// Mengubah data paket
const updatePackage = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      category_id,
      package_name,
      description,
      price,
    } = req.body;

    const image = req.file
      ? `/uploads/${req.file.filename}`
      : null;

    const packageData = await packageModel.updatePackage(
      id,
      category_id,
      package_name,
      description,
      price,
      image
    );

    if (!packageData) {
      return res.status(404).json({
        success: false,
        message: "Paket tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      message: "Paket berhasil diperbarui",
      data: packageData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal memperbarui paket",
      error: error.message,
    });
  }
};

// Menghapus paket
const deletePackage = async (req, res) => {
  try {
    const { id } = req.params;

    const packageData = await packageModel.deletePackage(id);

    if (!packageData) {
      return res.status(404).json({
        success: false,
        message: "Paket tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      message: "Paket berhasil dihapus",
      data: packageData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal menghapus paket",
      error: error.message,
    });
  }
};

module.exports = {
  getAllPackages,
  getPackageById,
  createPackage,
  updatePackage,
  deletePackage,
};