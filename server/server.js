const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const pool = require("./config/db");

// Import Routes
const categoryRoutes = require("./routes/categoryRoutes");
const packageRoutes = require("./routes/packageRoutes");
const bookingRoutes = require("./routes/bookingRoutes");

const app = express();

// ===============================
// Middleware
// ===============================

app.use(cors());
app.use(express.json());

// Folder Upload Gambar
app.use(
  "/uploads",
  express.static(path.join(__dirname, "uploads"))
);

// ===============================
// Tes koneksi database
// ===============================

pool.query("SELECT NOW()", (err, result) => {
  if (err) {
    console.log("❌ Gagal koneksi PostgreSQL");
    console.log(err.message);
  } else {
    console.log("✅ PostgreSQL terhubung");
    console.log(result.rows[0]);
  }
});

// ===============================
// Route utama
// ===============================

app.get("/", (req, res) => {
  res.send("🎉 Wedding Booking API Running...");
});

// ===============================
// API Routes
// ===============================

app.use("/api/categories", categoryRoutes);
app.use("/api/packages", packageRoutes);
app.use("/api/bookings", bookingRoutes);

// ===============================
// Jalankan Server
// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});