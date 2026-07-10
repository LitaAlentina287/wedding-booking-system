"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./login.css";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Login sementara
    if (email === "admin@gmail.com" && password === "123456") {
      alert("Login Berhasil");
       window.location.href = "/admin/menu/dashboard";
} else {
      alert("Email atau Password salah");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1>Wedding Booking</h1>
        <h2>Admin Login</h2>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              placeholder="Masukkan Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              placeholder="Masukkan Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">
            Login
          </button>

          <div className="back-home">
            <Link href="/pelanggan">
              ← Kembali ke Halaman Pelanggan
            </Link>
          </div>

        </form>
      </div>
    </div>
  );
}