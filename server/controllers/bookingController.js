const bookingModel = require("../models/bookingModel");

// Menampilkan semua booking
const getAllBookings = async (req, res) => {
  try {
    const bookings = await bookingModel.getAllBookings();

    res.status(200).json({
      success: true,
      message: "Data booking berhasil diambil",
      data: bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal mengambil data booking",
      error: error.message,
    });
  }
};

// Menampilkan booking berdasarkan ID
const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await bookingModel.getBookingById(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      message: "Data booking berhasil ditemukan",
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal mengambil data booking",
      error: error.message,
    });
  }
};

// Menambahkan booking baru
const createBooking = async (req, res) => {
  try {
    const {
      user_id,
      package_id,
      customer_name,
      phone,
      location,
      booking_date,
      event_date,
      status,
    } = req.body;

    const booking = await bookingModel.createBooking(
      user_id,
      package_id,
      customer_name,
      phone,
      location,
      booking_date,
      event_date,
      status
    );

    res.status(201).json({
      success: true,
      message: "Booking berhasil ditambahkan",
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal menambahkan booking",
      error: error.message,
    });
  }
};

// Mengubah booking
const updateBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      user_id,
      package_id,
      customer_name,
      phone,
      location,
      booking_date,
      event_date,
      status,
    } = req.body;

    const booking = await bookingModel.updateBooking(
      id,
      user_id,
      package_id,
      customer_name,
      phone,
      location,
      booking_date,
      event_date,
      status
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking berhasil diperbarui",
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal memperbarui booking",
      error: error.message,
    });
  }
};

// Menghapus booking
const deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const booking = await bookingModel.deleteBooking(id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: "Booking tidak ditemukan",
      });
    }

    res.status(200).json({
      success: true,
      message: "Booking berhasil dihapus",
      data: booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Gagal menghapus booking",
      error: error.message,
    });
  }
};

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
};