# Wedding Booking System

Link Video Demonstrasi:
https://youtu.be/HHrEaGeTJnw?si=aYTH8t9w6yaNy1p6

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

## 3. Halaman Packages (Pelanggan)

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

## 4. Halaman Booking (Pelanggan)

Halaman Booking merupakan halaman yang digunakan pelanggan untuk melakukan pemesanan paket wedding yang telah dipilih.

Pada halaman ini pelanggan mengisi data pemesanan seperti nama pemesan, nomor WhatsApp, tanggal acara, lokasi acara, serta informasi paket wedding yang akan dipesan.

Data booking yang dikirim oleh pelanggan akan diproses melalui backend menggunakan REST API. Frontend Next.js mengirimkan data booking menggunakan Axios ke endpoint `/api/bookings`, kemudian backend Express.js akan menyimpan data tersebut ke database PostgreSQL pada tabel bookings.

Halaman ini berfungsi sebagai proses utama transaksi pada sistem, yaitu menghubungkan pelanggan dengan layanan wedding yang tersedia.

### Tampilan Booking 1

![Booking 1](screenshots/booking1.png)

---

### Tampilan Booking 2

![Booking 2](screenshots/booking2.png)

---

### Tampilan Booking 3

![Booking 3](screenshots/booking3.png)

---

### Tampilan Booking 4

![Booking 4](screenshots/booking4.png)

---

### Tampilan Booking 5

![Booking 5](screenshots/booking5.png)

---

## 5. Halaman About (Pelanggan)

Halaman About merupakan halaman yang digunakan untuk memberikan informasi mengenai aplikasi Wedding Booking System serta layanan wedding yang tersedia.

Pada halaman ini pelanggan dapat mengetahui informasi mengenai profil layanan, tujuan aplikasi, serta gambaran umum mengenai sistem yang dibuat. Halaman About berfungsi sebagai media informasi agar pengguna lebih memahami konsep dan layanan yang ditawarkan oleh Wedding Booking System.

Halaman ini bersifat informatif dan tidak mengambil data dari database, karena konten yang ditampilkan merupakan informasi statis yang dibuat pada sisi frontend menggunakan Next.js.

### Tampilan About 1

![About 1](screenshots/about1.png)

---

### Tampilan About 2

![About 2](screenshots/about2.png)

---

### Tampilan About 3

![About 3](screenshots/about3.png)

---

### Tampilan About 4

![About 4](screenshots/about4.png)

---

### Tampilan About 5

![About 5](screenshots/about5.png)

---

### Tampilan About 6

![About 6](screenshots/about6.png)

---

## 6. Halaman Contact (Pelanggan)

Halaman Contact merupakan halaman yang digunakan untuk memberikan informasi kontak yang dapat digunakan pelanggan apabila ingin menghubungi pihak wedding organizer.

Pada halaman ini pengguna dapat melihat informasi seperti alamat, nomor kontak, email, serta media komunikasi yang tersedia. Halaman Contact dibuat untuk mempermudah pelanggan dalam mendapatkan informasi tambahan atau melakukan komunikasi terkait layanan wedding.

Halaman ini bersifat informatif dan menggunakan data statis yang dibuat pada frontend menggunakan Next.js. Tidak terdapat proses pengambilan data dari database karena informasi kontak tidak berubah secara dinamis.

### Tampilan Contact 1

![Contact 1](screenshots/contact1.png)

---

### Tampilan Contact 2

![Contact 2](screenshots/contact2.png)

---

### Tampilan Contact 3

![Contact 3](screenshots/contact3.png)

---

### Tampilan Contact 4

![Contact 4](screenshots/contact4.png)

---

### Tampilan Contact 5

![Contact 5](screenshots/contact5.png)

---

### Tampilan Contact 6

![Contact 6](screenshots/contact6.png)

---

### Tampilan Contact 7

![Contact 7](screenshots/contact7.png)

---

## 7. Halaman Login (Admin)

Halaman Login Admin merupakan halaman autentikasi yang digunakan oleh administrator untuk masuk ke dalam sistem pengelolaan Wedding Booking System.

Pada halaman ini admin memasukkan data login berupa username/email dan password. Data tersebut akan dikirimkan ke backend untuk dilakukan proses verifikasi melalui REST API.

Jika data login sesuai dengan data yang tersimpan pada database PostgreSQL, maka admin berhasil masuk ke halaman Dashboard Admin. Namun, jika data yang dimasukkan tidak sesuai, sistem akan memberikan pesan bahwa proses login gagal.

Halaman login ini berfungsi untuk menjaga keamanan sistem agar hanya pengguna dengan hak akses admin yang dapat mengelola data kategori, paket wedding, dan booking pelanggan.

### Tampilan Login Admin

![Login Admin](screenshots/login.png)

---

## 8. Halaman Dashboard (Admin)

Halaman Dashboard Admin merupakan halaman utama yang ditampilkan setelah admin berhasil melakukan proses login.

Dashboard berfungsi sebagai pusat informasi dan pengelolaan sistem Wedding Booking System. Pada halaman ini admin dapat melihat ringkasan data penting seperti jumlah kategori, jumlah paket wedding, jumlah booking, dan jumlah pelanggan.

Selain menampilkan informasi statistik, dashboard juga menyediakan navigasi menuju halaman pengelolaan data seperti Categories, Packages, dan Booking Management.

Data statistik pada dashboard diperoleh dari database PostgreSQL melalui backend Express.js menggunakan REST API. Frontend Next.js mengambil data tersebut menggunakan Axios kemudian menampilkan informasi dalam bentuk kartu statistik dan tabel agar mudah dipahami oleh admin.

### Tampilan Dashboard Admin 1

![Dashboard 1](screenshots/dashboard1.png)

---

### Tampilan Dashboard Admin 2

![Dashboard 2](screenshots/dashboard2.png)

---

### Tampilan Dashboard Admin 3

![Dashboard 3](screenshots/dashboard3.png)

---

## 10. Halaman Packages (Admin)

Halaman Packages Admin digunakan untuk mengelola seluruh data paket wedding yang tersedia pada sistem. Halaman ini hanya dapat diakses oleh administrator setelah berhasil melakukan proses login.

Pada halaman ini admin dapat melakukan operasi **CRUD (Create, Read, Update, Delete)** terhadap data paket wedding. Setiap paket terdiri dari beberapa informasi, seperti nama paket, kategori, harga, deskripsi, dan gambar paket.

Seluruh data paket tersimpan pada database PostgreSQL dan dikelola melalui backend Express.js menggunakan REST API. Frontend Next.js menggunakan Axios untuk mengirim request ke backend sehingga setiap perubahan data dapat langsung tersimpan dan ditampilkan kembali pada sistem.

### Fitur Halaman Packages Admin

- Menampilkan seluruh data paket wedding.
- Menambahkan paket wedding baru.
- Mengunggah gambar paket.
- Mengubah informasi paket.
- Menghapus paket wedding.
- Menampilkan data terbaru setelah proses CRUD berhasil.

### Tampilan Packages Admin 1

![Packages Admin 1](screenshots/packagesadmin1.png)

---

### Tampilan Packages Admin 2

![Packages Admin 2](screenshots/packagesadmin2.png)

---

### Tampilan Packages Admin 3

![Packages Admin 3](screenshots/packagesadmin3.png)

---

### Tampilan Packages Admin 4

![Packages Admin 4](screenshots/packagesadmin4.png)

---

## 11. Halaman Bookings (Admin)

Halaman Bookings Admin digunakan untuk mengelola seluruh data pemesanan (booking) yang dilakukan oleh pelanggan. Halaman ini hanya dapat diakses oleh administrator setelah berhasil melakukan proses login.

Pada halaman ini admin dapat melihat seluruh data booking yang masuk, seperti nama pemesan, paket wedding yang dipilih, tanggal acara, lokasi acara, serta status pemesanan. Selain itu, admin juga dapat mengubah status booking sesuai dengan proses yang sedang berjalan.

Seluruh data booking diambil dari database PostgreSQL melalui backend Express.js menggunakan REST API. Frontend Next.js memanfaatkan Axios untuk mengambil dan mengirim data sehingga informasi yang ditampilkan selalu sesuai dengan data yang tersimpan pada database.

### Fitur Halaman Bookings Admin

- Menampilkan seluruh data booking pelanggan.
- Melihat detail informasi setiap booking.
- Mengubah status booking menjadi **Pending**, **Diterima**, atau **Ditolak**.
- Menampilkan data booking terbaru secara langsung setelah dilakukan perubahan.

### Tampilan Bookings Admin 1

![Bookings Admin 1](screenshots/bookingsadmin1.png)

---

### Tampilan Bookings Admin 2

![Bookings Admin 2](screenshots/bookingsadmin2.png)

---

### Tampilan Bookings Admin 3

![Bookings Admin 3](screenshots/bookingsadmin3.png)

---

### Tampilan Bookings Admin 4

![Bookings Admin 4](screenshots/bookingsadmin4.png)

---

## 12. Halaman Profile (Admin)

Halaman Profile Admin digunakan untuk menampilkan informasi akun administrator yang sedang login ke dalam sistem Wedding Booking System.

Pada halaman ini admin dapat melihat informasi profil seperti nama, email, dan no telepon. Selain menampilkan informasi profil, halaman ini juga menyediakan fitur untuk memperbarui data profil.

### Tampilan Profile Admin 1

![Profile Admin 1](screenshots/profile1.png)

---

### Tampilan Profile Admin 2

![Profile Admin 2](screenshots/profile2.png)

---

## 13. Halaman Logout (Admin)

Halaman Logout digunakan untuk mengakhiri sesi login administrator sehingga akun dapat keluar dari sistem dengan aman.

Sebelum proses logout dilakukan, sistem menampilkan kotak dialog konfirmasi (SweetAlert) untuk memastikan bahwa admin benar-benar ingin keluar dari aplikasi. Jika admin memilih **Logout**, maka sesi login akan dihapus dan pengguna akan diarahkan kembali ke halaman home pelanggan. Sebaliknya, jika memilih **Batal**, admin tetap berada di halaman yang sedang dibuka.

Fitur logout bertujuan untuk menjaga keamanan sistem, terutama agar akun administrator tidak tetap aktif ketika aplikasi ditinggalkan atau digunakan oleh orang lain.

### Fitur Halaman Logout

- Menampilkan popup konfirmasi menggunakan **SweetAlert2**.
- Menghapus sesi login admin.
- Mengarahkan pengguna kembali ke halaman home pelanggan.
- Membatalkan proses logout apabila admin memilih **Batal**.

### Tampilan Logout Admin

![Logout Admin](screenshots/logout.png)

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

## Pelanggan

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

| Software | Versi (Disarankan) |
|----------|---------------------|
| Node.js | v18 atau lebih baru |
| PostgreSQL | v15 atau lebih baru |
| Git | Versi terbaru |


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
PORT=5000
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=wedding_booking
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

Youtube Video Demonstrasi aplikasi:

