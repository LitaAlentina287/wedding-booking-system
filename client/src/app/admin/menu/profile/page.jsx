"use client";

import { useState } from "react";
import "./profile.css";

export default function ProfilePage() {
  const [fullname, setFullname] = useState("Admin Wedding");
  const [email, setEmail] = useState("admin@gmail.com");
  const [phone, setPhone] = useState("081234567890");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Profile berhasil diperbarui");
  };

  return (
    <div className="profile">

<div className="profile-header">
    <h1>Profile Admin</h1>
    <p>
        Kelola informasi akun administrator Wedding Booking System dengan
        mudah dan aman.
    </p>
</div>

      <div className="profile-card">

        <div className="profile-avatar">
          <div className="avatar">
            {fullname.charAt(0)}
          </div>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Nama Lengkap</label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>No. Telepon</label>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="save-btn"
          >
            Simpan Perubahan
          </button>

        </form>

      </div>

    </div>
  );
}