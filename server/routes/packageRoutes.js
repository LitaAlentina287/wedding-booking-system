const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");

const {
  getAllPackages,
  getPackageById,
  createPackage,
  updatePackage,
  deletePackage,
} = require("../controllers/packageController");

// GET semua paket
router.get("/", getAllPackages);

// GET paket berdasarkan ID
router.get("/:id", getPackageById);

// POST tambah paket + upload gambar
router.post(
  "/",
  upload.single("image"),
  createPackage
);

// PUT ubah paket + upload gambar baru
router.put(
  "/:id",
  upload.single("image"),
  updatePackage
);

// DELETE hapus paket
router.delete("/:id", deletePackage);

module.exports = router;

