const pool = require("../config/db");

// ===============================
// Ambil semua booking
// ===============================
const getAllBookings = async () => {
  const result = await pool.query(`
    SELECT
      bookings.id,
      bookings.user_id,
      bookings.package_id,
      bookings.customer_name,
      bookings.phone,
      bookings.location,
      bookings.booking_date,
      bookings.event_date,
      bookings.status,
      packages.package_name,
      users.fullname AS user_name
    FROM bookings
    LEFT JOIN packages
      ON bookings.package_id = packages.id
    LEFT JOIN users
      ON bookings.user_id = users.id
    ORDER BY bookings.id ASC
  `);

  return result.rows;
};

// ===============================
// Ambil booking berdasarkan ID
// ===============================
const getBookingById = async (id) => {
  const result = await pool.query(
    `
    SELECT
      bookings.id,
      bookings.user_id,
      bookings.package_id,
      bookings.customer_name,
      bookings.phone,
      bookings.location,
      bookings.booking_date,
      bookings.event_date,
      bookings.status,
      packages.package_name,
      users.fullname AS user_name
    FROM bookings
    LEFT JOIN packages
      ON bookings.package_id = packages.id
    LEFT JOIN users
      ON bookings.user_id = users.id
    WHERE bookings.id = $1
    `,
    [id]
  );

  return result.rows[0];
};

// ===============================
// Tambah booking
// ===============================
const createBooking = async (
  user_id,
  package_id,
  customer_name,
  phone,
  location,
  booking_date,
  event_date,
  status
) => {
  const result = await pool.query(
    `
    INSERT INTO bookings (
      user_id,
      package_id,
      customer_name,
      phone,
      location,
      booking_date,
      event_date,
      status
    )
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
    `,
    [
      user_id,
      package_id,
      customer_name,
      phone,
      location,
      booking_date,
      event_date,
      status,
    ]
  );

  return result.rows[0];
};

// ===============================
// Update booking
// ===============================
const updateBooking = async (
  id,
  user_id,
  package_id,
  customer_name,
  phone,
  location,
  booking_date,
  event_date,
  status
) => {
  const result = await pool.query(
    `
    UPDATE bookings
    SET
      user_id = $1,
      package_id = $2,
      customer_name = $3,
      phone = $4,
      location = $5,
      booking_date = $6,
      event_date = $7,
      status = $8
    WHERE id = $9
    RETURNING *
    `,
    [
      user_id,
      package_id,
      customer_name,
      phone,
      location,
      booking_date,
      event_date,
      status,
      id,
    ]
  );

  return result.rows[0];
};

// ===============================
// Hapus booking
// ===============================
const deleteBooking = async (id) => {
  const result = await pool.query(
    `
    DELETE FROM bookings
    WHERE id = $1
    RETURNING *
    `,
    [id]
  );

  return result.rows[0];
};

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  updateBooking,
  deleteBooking,
};