const multer = require("multer");
const path = require("path");

// Konfigurasi penyimpanan file
const storage = multer.diskStorage({

  // Folder tujuan penyimpanan
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  // Nama file agar tidak bentrok
  filename: (req, file, cb) => {

    const uniqueName =
      Date.now() +
      "-" +
      Math.round(Math.random() * 1000000) +
      path.extname(file.originalname);

    cb(null, uniqueName);
  },

});

// Filter hanya gambar
const fileFilter = (req, file, cb) => {

  const allowedTypes = /jpg|jpeg|png|webp/;

  const extension = path
    .extname(file.originalname)
    .toLowerCase();

  if (allowedTypes.test(extension)) {

    cb(null, true);

  } else {

    cb(
      new Error(
        "Hanya file JPG, JPEG, PNG, dan WEBP yang diperbolehkan."
      ),
      false
    );

  }

};

// Batas ukuran file (5 MB)
const upload = multer({

  storage,

  fileFilter,

  limits: {
    fileSize: 5 * 1024 * 1024,
  },

});

module.exports = upload;