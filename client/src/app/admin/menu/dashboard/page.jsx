"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import {
  FaFolderOpen,
  FaGem,
  FaCalendarCheck,
  FaClock,
} from "react-icons/fa";

import "./dashboard.css";

export default function DashboardPage() {
  const [categories, setCategories] = useState([]);
  const [packages, setPackages] = useState([]);
  const [bookings, setBookings] = useState([]);

  const [loading, setLoading] = useState(true);

  // ==========================================
  // FETCH DATA
  // ==========================================

  const fetchDashboard = async () => {
    try {
      setLoading(true);

      const [
        categoriesResponse,
        packagesResponse,
        bookingsResponse,
      ] = await Promise.all([
        api.get("/categories"),
        api.get("/packages"),
        api.get("/bookings"),
      ]);

      setCategories(
        categoriesResponse.data.data || []
      );

      setPackages(
        packagesResponse.data.data || []
      );

      setBookings(
        bookingsResponse.data.data || []
      );
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  // ==========================================
  // STATISTIC
  // ==========================================

  const totalCategories = categories.length;

  const totalPackages = packages.length;

  const totalBookings = bookings.length;

  const totalPending = bookings.filter(
    (item) => item.status === "Pending"
  ).length;

  const totalConfirmed = bookings.filter(
    (item) => item.status === "Confirmed"
  ).length;

  const totalCancelled = bookings.filter(
    (item) => item.status === "Cancelled"
  ).length;

  // ==========================================
  // CHART DATA
  // ==========================================

  const chartData = [
    {
      status: "Pending",
      total: totalPending,
    },
    {
      status: "Confirmed",
      total: totalConfirmed,
    },
    {
      status: "Cancelled",
      total: totalCancelled,
    },
  ];

  // ==========================================
  // RECENT BOOKINGS
  // ==========================================

  const recentBookings = [...bookings]
    .sort((a, b) => b.id - a.id)
    .slice(0, 5);

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <div className="dashboard-loading">
        <h2>Memuat Dashboard...</h2>
      </div>
    );
  }

  return (
    <div className="dashboard">

      {/* ==========================
          HEADER
      ========================== */}

      <div className="dashboard-header">

        <h1>Dashboard Admin</h1>

        <p>
          Selamat datang di Wedding Booking
          System
        </p>

      </div>

      {/* ==========================
          STATISTIC CARD
      ========================== */}

      <div className="stats-container">

        <div className="stat-card">

          <div className="icon category">
            <FaFolderOpen />
          </div>

          <div>
            <h2>{totalCategories}</h2>
            <p>Total Kategori</p>
          </div>

        </div>

        <div className="stat-card">

          <div className="icon package">
            <FaGem />
          </div>

          <div>
            <h2>{totalPackages}</h2>
            <p>Total Paket</p>
          </div>

        </div>

        <div className="stat-card">

          <div className="icon booking">
            <FaCalendarCheck />
          </div>

          <div>
            <h2>{totalBookings}</h2>
            <p>Total Booking</p>
          </div>

        </div>

        <div className="stat-card">

          <div className="icon pending">
            <FaClock />
          </div>

          <div>
            <h2>{totalPending}</h2>
            <p>Booking Pending</p>
          </div>

        </div>

      </div>

      {/* ==========================
          CHART
      ========================== */}

      <div className="dashboard-chart">

        <div className="chart-header">
          <h2>Statistik Booking</h2>
        </div>

        <ResponsiveContainer
          width="100%"
          height={350}
        >

          <BarChart data={chartData}>

            <CartesianGrid
              strokeDasharray="3 3"
            />

            <XAxis dataKey="status" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="total"
              fill="#d4af37"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* ==========================
          TABLE
      ========================== */}

      <div className="dashboard-table">

        <div className="table-header">
          <h2>Booking Terbaru</h2>
        </div>

        <table>

          <thead>

            <tr>
              <th>No</th>
              <th>Customer</th>
              <th>Paket</th>
              <th>Tanggal Acara</th>
              <th>Status</th>
            </tr>

          </thead>

          <tbody>

            {recentBookings.length > 0 ? (

              recentBookings.map(
                (item, index) => (
                  <tr key={item.id}>

                    <td>{index + 1}</td>

                    <td>
                      {item.customer_name}
                    </td>

                    <td>
                      {item.package_name}
                    </td>

                    <td>
                      {new Date(
                        item.event_date
                      ).toLocaleDateString(
                        "id-ID"
                      )}
                    </td>

                    <td>

                      <span
                        className={
                          item.status ===
                          "Confirmed"
                            ? "success"
                            : item.status ===
                              "Cancelled"
                            ? "cancel"
                            : "pending"
                        }
                      >
                        {item.status}
                      </span>

                    </td>

                  </tr>
                )
              )

            ) : (

              <tr>

                <td colSpan="5">
                  Belum ada data booking
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}