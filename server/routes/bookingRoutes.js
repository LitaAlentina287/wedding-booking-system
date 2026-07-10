const express = require("express");
const router = express.Router();

const {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
} = require("../controllers/bookingController");

// GET semua booking
router.get("/", getAllBookings);

// GET booking berdasarkan ID
router.get("/:id", getBookingById);

// POST tambah booking
router.post("/", createBooking);

// PUT ubah booking
router.put("/:id", updateBooking);

// DELETE hapus booking
router.delete("/:id", deleteBooking);

module.exports = router;