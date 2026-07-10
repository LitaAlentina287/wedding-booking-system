"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";

import {
  FaCalendarAlt,
  FaClipboardList,
  FaClock,
  FaCheckCircle,
  FaTimesCircle,
  FaPlus,
  FaEdit,
  FaTrash,
  FaBoxOpen,
  FaUser,
  FaPhone,
  FaMapMarkerAlt,
  FaCalendarDay,
  FaSave,
  FaTimes,
} from "react-icons/fa";

import "./bookings.css";

export default function BookingsPage() {

  /* ==================================================
     DATA
  ================================================== */

  const [bookings, setBookings] = useState([]);

  const [packages, setPackages] = useState([]);


  /* ==================================================
     PAGE LOADING
  ================================================== */

  const [loadingPage, setLoadingPage] =
    useState(true);

  const [loading, setLoading] =
    useState(false);


  /* ==================================================
     MODAL
  ================================================== */

  const [showModal, setShowModal] =
    useState(false);

  const [isEdit, setIsEdit] =
    useState(false);

  const [selectedId, setSelectedId] =
    useState(null);


  /* ==================================================
     FORM
  ================================================== */

  const [userId, setUserId] =
    useState("");

  const [packageId, setPackageId] =
    useState("");

  const [customerName, setCustomerName] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [location, setLocation] =
    useState("");

  const [bookingDate, setBookingDate] =
    useState("");

  const [eventDate, setEventDate] =
    useState("");

  const [status, setStatus] =
    useState("Pending");


  /* ==================================================
     FETCH BOOKINGS
  ================================================== */

  const fetchBookings = async () => {

    try {

      const response = await api.get(
        "/bookings"
      );

      const bookingData =
        response?.data?.data ||
        response?.data ||
        [];

      setBookings(bookingData);

    } catch (error) {

      console.error(
        "Fetch Booking Error:",
        error
      );

      alert(
        "Gagal mengambil data booking."
      );

    }

  };


  /* ==================================================
     FETCH PACKAGES
  ================================================== */

  const fetchPackages = async () => {

    try {

      const response = await api.get(
        "/packages"
      );

      const packageData =
        response?.data?.data ||
        response?.data ||
        [];

      setPackages(packageData);

    } catch (error) {

      console.error(
        "Fetch Package Error:",
        error
      );

      alert(
        "Gagal mengambil data paket."
      );

    }

  };


  /* ==================================================
     INITIAL LOAD
  ================================================== */

  useEffect(() => {

    const loadData = async () => {

      try {

        setLoadingPage(true);

        await Promise.all([

          fetchBookings(),

          fetchPackages(),

        ]);

      } finally {

        setLoadingPage(false);

      }

    };

    loadData();

  }, []);


  /* ==================================================
     RESET FORM
  ================================================== */

  const resetForm = () => {

    setSelectedId(null);

    setIsEdit(false);

    setUserId("");

    setPackageId("");

    setCustomerName("");

    setPhone("");

    setLocation("");

    setBookingDate("");

    setEventDate("");

    setStatus("Pending");

  };

    /* ==================================================
     SUBMIT BOOKING
  ================================================== */

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const payload = {

        user_id:
          userId || null,

        package_id:
          packageId,

        customer_name:
          customerName.trim(),

        phone:
          phone.trim(),

        location:
          location.trim(),

        booking_date:
          bookingDate,

        event_date:
          eventDate,

        status,

      };

      if (isEdit) {

        await api.put(

          `/bookings/${selectedId}`,

          payload

        );

        alert(
          "Data booking berhasil diperbarui."
        );

      } else {

        await api.post(

          "/bookings",

          payload

        );

        alert(
          "Data booking berhasil ditambahkan."
        );

      }

      await fetchBookings();

      resetForm();

      setShowModal(false);

    } catch (error) {

      console.error(
        "Submit Booking Error:",
        error
      );

      alert(

        error?.response?.data?.message ||

        "Tidak dapat terhubung ke server."

      );

    } finally {

      setLoading(false);

    }

  };


  /* ==================================================
     EDIT BOOKING
  ================================================== */

  const handleEdit = (booking) => {

    setSelectedId(
      booking.id
    );

    setUserId(
      booking.user_id || ""
    );

    setPackageId(
      booking.package_id || ""
    );

    setCustomerName(
      booking.customer_name || ""
    );

    setPhone(
      booking.phone || ""
    );

    setLocation(
      booking.location || ""
    );

    setBookingDate(

      booking.booking_date

        ? booking.booking_date.split("T")[0]

        : ""

    );

    setEventDate(

      booking.event_date

        ? booking.event_date.split("T")[0]

        : ""

    );

    setStatus(
      booking.status || "Pending"
    );

    setIsEdit(true);

    setShowModal(true);

  };


  /* ==================================================
     DELETE BOOKING
  ================================================== */

  const handleDelete = async (id) => {

    const confirmed = window.confirm(

      "Apakah Anda yakin ingin menghapus data booking ini?"

    );

    if (!confirmed) return;

    try {

      await api.delete(

        `/bookings/${id}`

      );

      alert(
        "Data booking berhasil dihapus."
      );

      await fetchBookings();

    } catch (error) {

      console.error(
        "Delete Booking Error:",
        error
      );

      alert(

        error?.response?.data?.message ||

        "Gagal menghapus data booking."

      );

    }

  };


  /* ==================================================
     PAGE LOADING
  ================================================== */

  if (loadingPage) {

    return (

      <div className="bookx-loading">

        <h2>

          Memuat data booking...

        </h2>

      </div>

    );

  }

    /* ==================================================
     JSX
  ================================================== */

  return (

    <div className="bookx-page">

      {/* ==================================================
          PAGE HEADER
      ================================================== */}

      <div className="bookx-header">

        <div className="bookx-header-left">

          <div className="bookx-header-icon">

            <FaCalendarAlt />

          </div>

          <div className="bookx-header-content">

            <h1>
              Manajemen Booking
            </h1>

            <p>
              Kelola seluruh data booking pelanggan
              Wedding Booking System dengan mudah,
              cepat, dan terstruktur.
            </p>

          </div>

        </div>


        <button
          type="button"
          className="bookx-add-button"
          onClick={() => {

            resetForm();

            setShowModal(true);

          }}
        >

          <FaPlus />

          <span>
            Tambah Booking
          </span>

        </button>

      </div>



      {/* ==================================================
          STATISTICS
      ================================================== */}

      <div className="bookx-stat-grid">

        {/* ==================================================
            TOTAL BOOKING
        ================================================== */}

        <div className="bookx-stat-card">

          <div className="bookx-stat-icon">

            <FaClipboardList />

          </div>

          <div className="bookx-stat-content">

            <h3>

              {bookings.length}

            </h3>

            <p>

              Total Booking

            </p>

          </div>

        </div>



        {/* ==================================================
            PENDING
        ================================================== */}

        <div className="bookx-stat-card">

          <div className="bookx-stat-icon">

            <FaClock />

          </div>

          <div className="bookx-stat-content">

            <h3>

              {
                bookings.filter(
                  (booking) =>
                    booking.status === "Pending"
                ).length
              }

            </h3>

            <p>

              Pending

            </p>

          </div>

        </div>



        {/* ==================================================
            CONFIRMED
        ================================================== */}

        <div className="bookx-stat-card">

          <div className="bookx-stat-icon">

            <FaCheckCircle />

          </div>

          <div className="bookx-stat-content">

            <h3>

              {
                bookings.filter(
                  (booking) =>
                    booking.status === "Confirmed"
                ).length
              }

            </h3>

            <p>

              Confirmed

            </p>

          </div>

        </div>



        {/* ==================================================
            CANCELLED
        ================================================== */}

        <div className="bookx-stat-card">

          <div className="bookx-stat-icon">

            <FaTimesCircle />

          </div>

          <div className="bookx-stat-content">

            <h3>

              {
                bookings.filter(
                  (booking) =>
                    booking.status === "Cancelled"
                ).length
              }

            </h3>

            <p>

              Cancelled

            </p>

          </div>

        </div>

      </div>



      {/* ==================================================
          TABLE CARD
      ================================================== */}

      <div className="bookx-table-card">

        {/* ==================================================
            TABLE HEADER
        ================================================== */}

        <div className="bookx-table-header">

          <div>

            <h2>

              Daftar Booking

            </h2>

            <p>

              Seluruh data booking pelanggan
              Wedding Booking System ditampilkan
              pada tabel berikut.

            </p>

          </div>

        </div>



        {/* ==================================================
            TABLE WRAPPER
        ================================================== */}

        <div className="bookx-table-wrapper">

          <table className="bookx-table">

            {/* ==================================================
                TABLE HEAD
            ================================================== */}

            <thead>

              <tr>

                <th width="70">

                  No

                </th>

                <th>

                  Nama Customer

                </th>

                <th>

                  Paket

                </th>

                <th>

                  Telepon

                </th>

                <th>

                  Lokasi

                </th>

                <th>

                  Tanggal Acara

                </th>

                <th width="150">

                  Status

                </th>

                <th width="220">

                  Aksi

                </th>

              </tr>

            </thead>

                        {/* ==================================================
                TABLE BODY
            ================================================== */}

            <tbody>

              {bookings.length > 0 ? (

                bookings.map(
                  (
                    booking,
                    index
                  ) => (

                    <tr
                      key={booking.id}
                    >

                      {/* ==================================================
                          NO
                      ================================================== */}

                      <td>

                        {index + 1}

                      </td>



                      {/* ==================================================
                          CUSTOMER
                      ================================================== */}

                      <td>

                        <div className="bookx-customer-name">

                          {booking.customer_name}

                        </div>

                      </td>



                      {/* ==================================================
                          PACKAGE
                      ================================================== */}

                      <td>

                        {booking.package_name}

                      </td>



                      {/* ==================================================
                          PHONE
                      ================================================== */}

                      <td>

                        {booking.phone}

                      </td>



                      {/* ==================================================
                          LOCATION
                      ================================================== */}

                      <td>

                        {booking.location}

                      </td>



                      {/* ==================================================
                          EVENT DATE
                      ================================================== */}

                      <td>

                        {booking.event_date
                          ? new Date(
                              booking.event_date
                            ).toLocaleDateString(
                              "id-ID"
                            )
                          : "-"}

                      </td>



                      {/* ==================================================
                          STATUS
                      ================================================== */}

                      <td>

                        <span
                          className={`bookx-status ${
                            booking.status ===
                            "Confirmed"
                              ? "bookx-confirmed"
                              : booking.status ===
                                "Cancelled"
                              ? "bookx-cancelled"
                              : "bookx-pending"
                          }`}
                        >

                          {booking.status}

                        </span>

                      </td>



{/* ==================================================
    ACTION
================================================== */}

<td className="bookx-action-column">

  <div className="bookx-action-group">

    <button
      type="button"
      className="bookx-edit-button"
      onClick={() => handleEdit(booking)}
      disabled={loading}
      title="Edit Booking"
    >

      <FaEdit />

    </button>

    <button
      type="button"
      className="bookx-delete-button"
      onClick={() => handleDelete(booking.id)}
      disabled={loading}
      title="Hapus Booking"
    >

      <FaTrash />

    </button>

  </div>

</td>

</tr>

)

)

) : (

<tr>

  <td
    colSpan="8"
    className="bookx-empty-state"
  >
                    {/* ==================================================
                        EMPTY ICON
                    ================================================== */}

                    <div className="bookx-empty-icon">

                      <FaClipboardList />

                    </div>



                    {/* ==================================================
                        EMPTY TITLE
                    ================================================== */}

                    <h3>

                      Belum Ada Data Booking

                    </h3>



                    {/* ==================================================
                        EMPTY DESCRIPTION
                    ================================================== */}

                    <p>

                      Belum terdapat data booking
                      pelanggan pada sistem.
                      Silakan tambahkan booking
                      pertama untuk mulai
                      mengelola data.

                    </p>



                    {/* ==================================================
                        EMPTY BUTTON
                    ================================================== */}

                    <button
                      type="button"
                      className="bookx-add-button bookx-empty-button"
                      onClick={() => {

                        resetForm();

                        setShowModal(true);

                      }}
                    >

                      <FaPlus />

                      <span>

                        Tambah Booking

                      </span>

                    </button>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

            {/* ==================================================
          MODAL
      ================================================== */}

      {showModal && (

        <div
          className="bookx-modal-overlay"
          onClick={() => {

            if (loading) return;

            resetForm();

            setShowModal(false);

          }}
        >

          <div
            className="bookx-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* ==================================================
                MODAL HEADER
            ================================================== */}

            <div className="bookx-modal-header">

              <h2>

                {isEdit
                  ? "Edit Booking"
                  : "Tambah Booking"}

              </h2>

              <p>

                Lengkapi seluruh informasi
                booking pelanggan sebelum
                data disimpan ke dalam
                sistem.

              </p>

            </div>



            {/* ==================================================
                FORM
            ================================================== */}

            <form
              className="bookx-form"
              onSubmit={handleSubmit}
            >

              {/* ==================================================
                  PAKET WEDDING
              ================================================== */}

              <div className="bookx-form-group">

                <label>

                  <FaBoxOpen />

                  <span>

                    Paket Wedding

                  </span>

                </label>

                <select
                  value={packageId}
                  onChange={(e) =>
                    setPackageId(
                      e.target.value
                    )
                  }
                  disabled={loading}
                  required
                >

                  <option value="">

                    -- Pilih Paket --

                  </option>

                  {packages.map((pkg) => (

                    <option
                      key={pkg.id}
                      value={pkg.id}
                    >

                      {pkg.package_name}

                    </option>

                  ))}

                </select>

              </div>



              {/* ==================================================
                  NAMA CUSTOMER
              ================================================== */}

              <div className="bookx-form-group">

                <label>

                  <FaUser />

                  <span>

                    Nama Customer

                  </span>

                </label>

                <input
                  type="text"
                  placeholder="Masukkan nama customer"
                  value={customerName}
                  onChange={(e) =>
                    setCustomerName(
                      e.target.value
                    )
                  }
                  disabled={loading}
                  required
                />

              </div>



              {/* ==================================================
                  NOMOR TELEPON
              ================================================== */}

              <div className="bookx-form-group">

                <label>

                  <FaPhone />

                  <span>

                    Nomor Telepon

                  </span>

                </label>

                <input
                  type="text"
                  placeholder="08xxxxxxxxxx"
                  value={phone}
                  onChange={(e) =>
                    setPhone(
                      e.target.value
                    )
                  }
                  disabled={loading}
                  required
                />

              </div>



              {/* ==================================================
                  LOKASI ACARA
              ================================================== */}

              <div className="bookx-form-group">

                <label>

                  <FaMapMarkerAlt />

                  <span>

                    Lokasi Acara

                  </span>

                </label>

                <textarea
                  rows={4}
                  placeholder="Masukkan lokasi acara"
                  value={location}
                  onChange={(e) =>
                    setLocation(
                      e.target.value
                    )
                  }
                  disabled={loading}
                  required
                />

              </div>



              {/* ==================================================
                  TANGGAL BOOKING
              ================================================== */}

              <div className="bookx-form-group">

                <label>

                  <FaCalendarDay />

                  <span>

                    Tanggal Booking

                  </span>

                </label>

                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) =>
                    setBookingDate(
                      e.target.value
                    )
                  }
                  disabled={loading}
                  required
                />

              </div>



              {/* ==================================================
                  TANGGAL ACARA
              ================================================== */}

              <div className="bookx-form-group">

                <label>

                  <FaCalendarDay />

                  <span>

                    Tanggal Acara

                  </span>

                </label>

                <input
                  type="date"
                  value={eventDate}
                  onChange={(e) =>
                    setEventDate(
                      e.target.value
                    )
                  }
                  disabled={loading}
                  required
                />

              </div>



              {/* ==================================================
                  STATUS BOOKING
              ================================================== */}

              <div className="bookx-form-group">

                <label>

                  <FaClipboardList />

                  <span>

                    Status Booking

                  </span>

                </label>

                <select
                  value={status}
                  onChange={(e) =>
                    setStatus(
                      e.target.value
                    )
                  }
                  disabled={loading}
                >

                  <option value="Pending">

                    Pending

                  </option>

                  <option value="Confirmed">

                    Confirmed

                  </option>

                  <option value="Cancelled">

                    Cancelled

                  </option>

                </select>

              </div>



              {/* ==================================================
                  INFO BOX
              ================================================== */}

              <div className="bookx-info-box">

                <strong>

                  Informasi

                </strong>

                <p>

                  Pastikan seluruh informasi
                  booking telah diisi dengan
                  benar, mulai dari paket,
                  nama pelanggan, nomor
                  telepon, lokasi acara,
                  tanggal booking, tanggal
                  acara, hingga status
                  booking sebelum data
                  disimpan.

                </p>

              </div>



              {/* ==================================================
                  ACTION BUTTON
              ================================================== */}

              <div className="bookx-modal-actions">

                <button
                  type="button"
                  className="bookx-cancel-button"
                  onClick={() => {

                    resetForm();

                    setShowModal(false);

                  }}
                  disabled={loading}
                >

                  <FaTimes />

                  <span>

                    Batal

                  </span>

                </button>



                <button
                  type="submit"
                  className="bookx-save-button"
                  disabled={loading}
                >

                  <FaSave />

                  <span>

                    {loading
                      ? "Menyimpan..."
                      : isEdit
                      ? "Update Booking"
                      : "Simpan Booking"}

                  </span>

                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>

  );

}