# Wedding Booking System

## Deskripsi Aplikasi

**Wedding Booking System** merupakan aplikasi berbasis web yang dibuat untuk membantu proses pemesanan layanan wedding secara online.

Aplikasi ini memungkinkan pengguna untuk melihat berbagai paket wedding yang tersedia dan melakukan pemesanan secara mudah. Selain itu, admin dapat mengelola data kategori, paket wedding, serta data booking melalui halaman admin.

Project ini menerapkan konsep **Full Stack Web Application** dengan menggunakan Next.js sebagai frontend, Express.js sebagai backend, PostgreSQL sebagai database, dan REST API sebagai komunikasi antara frontend dan backend.

---

# Tampilan Aplikasi

## 1. Halaman Home (Pelanggan)

Halaman utama menampilkan informasi awal mengenai layanan **Wedding Booking System**, navigasi website, informasi layanan wedding, serta tombol menuju halaman paket dan booking.

Berikut merupakan tampilan halaman Home:

### Tampilan Home 1

![Home Page 1](screenshots/home1.png)

---

### Tampilan Home 2

![Home Page 2](screenshots/home2.png)

---

### Tampilan Home 3

![Home Page 3](screenshots/home3.png)

---

### Tampilan Home 4

![Home Page 4](screenshots/home4.png)

---

## 2. Halaman Categories (Pelanggan)

Halaman Categories digunakan untuk menampilkan informasi kategori layanan wedding yang tersedia. Data kategori diambil dari database PostgreSQL melalui backend Express.js menggunakan endpoint REST API.

Pada halaman ini pengguna dapat melihat daftar kategori sebelum memilih paket wedding yang tersedia.

### Tampilan Categories 1

![Categories 1](screenshots/categories1.png)

---

### Tampilan Categories 2

![Categories 2](screenshots/categories2.png)

---

### Tampilan Categories 3

![Categories 3](screenshots/categories3.png)

---

### Tampilan Categories 4

![Categories 4](screenshots/categories4.png)

---

## 2. Halaman Packages (Pelanggan)

Halaman Packages merupakan halaman yang digunakan pelanggan untuk melihat daftar paket wedding yang tersedia pada sistem.

Pada halaman ini, pengguna dapat melihat informasi detail mengenai paket wedding seperti nama paket, kategori, harga, gambar, dan deskripsi paket. Data paket tidak ditampilkan secara statis, tetapi diambil dari database melalui backend menggunakan REST API.

Frontend Next.js melakukan request data paket menggunakan Axios ke endpoint API `/api/packages`, kemudian data yang diterima akan ditampilkan dalam bentuk card paket wedding.

Halaman ini membantu pelanggan dalam memilih paket wedding yang sesuai sebelum melakukan proses booking.

### Tampilan Packages 1

![Packages 1](screenshots/packages1.png)

---

### Tampilan Packages 2

![Packages 2](screenshots/packages2.png)

---

### Tampilan Packages 3

![Packages 3](screenshots/packages3.png)

---

### Tampilan Packages 4

![Packages 4](screenshots/packages4.png)

---

## Halaman Booking

Halaman booking digunakan pelanggan untuk melakukan pemesanan paket wedding dengan mengisi data yang diperlukan.

![Booking Page](screenshots/booking.png)

---

## Halaman Admin Dashboard

Halaman admin digunakan untuk mengelola data sistem seperti kategori, paket, dan booking.

![Admin Dashboard](screenshots/admin-dashboard.png)

---

# Teknologi yang Digunakan

| Bagian      | Teknologi            |
| ----------- | -------------------- |
| Frontend    | Next.js + React.js   |
| Styling     | CSS                  |
| HTTP Client | Axios                |
| Backend     | Node.js + Express.js |
| Database    | PostgreSQL           |
| API         | REST API             |

---

# Fitur Aplikasi

## Customer

| No | Fitur            | Deskripsi                             |
| -- | ---------------- | ------------------------------------- |
| 1  | Melihat Home     | Menampilkan informasi layanan wedding |
| 2  | Melihat Packages | Melihat daftar paket wedding          |
| 3  | Booking          | Melakukan pemesanan paket wedding     |
| 4  | About            | Melihat informasi aplikasi            |
| 5  | Contact          | Melihat informasi kontak              |

---

## Admin

| No | Fitur              | Deskripsi                     |
| -- | ------------------ | ----------------------------- |
| 1  | Login Admin        | Masuk ke halaman admin        |
| 2  | Dashboard          | Melihat statistik data sistem |
| 3  | CRUD Categories    | Mengelola kategori wedding    |
| 4  | CRUD Packages      | Mengelola paket wedding       |
| 5  | Booking Management | Mengelola data pemesanan      |
| 6  | Update Status      | Mengubah status booking       |

Status booking:

| Status   | Keterangan                |
| -------- | ------------------------- |
| Pending  | Menunggu konfirmasi admin |
| Diterima | Booking telah diterima    |
| Ditolak  | Booking ditolak admin     |

---

# Struktur Folder Project

```
wedding-booking-system

├── client
│   ├── src
│   │   ├── app
│   │   │   ├── categories
│   │   │   ├── packages
│   │   │   ├── booking
│   │   │   ├── about
│   │   │   ├── contact
│   │   │   └── admin
│   │   │
│   │   ├── components
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── PackageCard.jsx
│   │   │   └── BookingForm.jsx
│   │   │
│   │   └── services
│   │       └── api.js
│   │
│   └── package.json
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── config
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# Database

Database yang digunakan adalah **PostgreSQL**.

Berikut tabel utama yang digunakan:

| Nama Tabel | Fungsi                           |
| ---------- | -------------------------------- |
| users      | Menyimpan data pengguna dan role |
| categories | Menyimpan kategori wedding       |
| packages   | Menyimpan data paket wedding     |
| bookings   | Menyimpan data pemesanan         |

Relasi database:

| Relasi                | Keterangan                                        |
| --------------------- | ------------------------------------------------- |
| users - bookings      | Satu user dapat memiliki beberapa booking         |
| categories - packages | Satu kategori dapat memiliki beberapa paket       |
| packages - bookings   | Satu paket dapat digunakan dalam beberapa booking |

---

# REST API

API digunakan sebagai penghubung antara frontend Next.js dengan backend Express.js.

| Method | Endpoint            | Fungsi                  |
| ------ | ------------------- | ----------------------- |
| GET    | /api/users          | Mengambil data user     |
| GET    | /api/categories     | Mengambil data kategori |
| POST   | /api/categories     | Menambah kategori       |
| PUT    | /api/categories/:id | Mengubah kategori       |
| DELETE | /api/categories/:id | Menghapus kategori      |
| GET    | /api/packages       | Mengambil data paket    |
| POST   | /api/packages       | Menambah paket          |
| PUT    | /api/packages/:id   | Mengubah paket          |
| DELETE | /api/packages/:id   | Menghapus paket         |
| GET    | /api/bookings       | Mengambil data booking  |
| POST   | /api/bookings       | Membuat booking         |
| PUT    | /api/bookings/:id   | Mengubah status booking |

---

# Cara Menjalankan Project

## Persiapan

Pastikan sudah menginstall:

* Node.js
* PostgreSQL
* Git

---

# Menjalankan Backend

Masuk ke folder backend:

```bash
cd server
```

Install dependency:

```bash
npm install
```

Buat file `.env` pada folder server:

```env
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=password_database
DB_NAME=wedding_booking
DB_PORT=5432
```

Jalankan backend:

```bash
npm run start
```

Backend berjalan pada:

```
http://localhost:5000
```

---

# Menjalankan Frontend

Buka terminal baru.

Masuk ke folder frontend:

```bash
cd client
```

Install dependency:

```bash
npm install
```

Jalankan frontend:

```bash
npm run dev
```

Frontend berjalan pada:

```
http://localhost:3000
```

---

# Konfigurasi API

Frontend menggunakan Axios untuk melakukan komunikasi dengan backend.

Konfigurasi API terdapat pada:

```
client/src/services/api.js
```

Contoh:

```javascript
const api = axios.create({
    baseURL:"http://localhost:5000/api",
    headers:{
        "Content-Type":"application/json"
    }
});
```

---

# Author

**Lita Alentina**

Program Studi Teknik Informatika
Universitas Teknologi Bandung

---

# Repository

GitHub:

https://github.com/LitaAlentina287/wedding-booking-system

```
```
