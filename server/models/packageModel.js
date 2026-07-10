const pool = require("../config/db");

// Mengambil semua paket beserta nama kategorinya
const getAllPackages = async () => {
  const result = await pool.query(`
    SELECT
      packages.id,
      packages.package_name,
      packages.description,
      packages.price,
      packages.image,
      packages.category_id,
      categories.name AS category_name
    FROM packages
    JOIN categories
      ON packages.category_id = categories.id
    ORDER BY packages.id ASC
  `);

  return result.rows;
};

// Mengambil satu paket berdasarkan ID
const getPackageById = async (id) => {
  const result = await pool.query(
    `
    SELECT
      packages.id,
      packages.package_name,
      packages.description,
      packages.price,
      packages.image,
      packages.category_id,
      categories.name AS category_name
    FROM packages
    JOIN categories
      ON packages.category_id = categories.id
    WHERE packages.id = $1
    `,
    [id]
  );

  return result.rows[0];
};

// Menambahkan paket baru
const createPackage = async (
  category_id,
  package_name,
  description,
  price,
  image
) => {
  const result = await pool.query(
    `
    INSERT INTO packages
    (category_id, package_name, description, price, image)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *
    `,
    [category_id, package_name, description, price, image]
  );

  return result.rows[0];
};

// Mengubah data paket
const updatePackage = async (
  id,
  category_id,
  package_name,
  description,
  price,
  image
) => {
  const result = await pool.query(
    `
    UPDATE packages
    SET
      category_id = $1,
      package_name = $2,
      description = $3,
      price = $4,
      image = $5
    WHERE id = $6
    RETURNING *
    `,
    [category_id, package_name, description, price, image, id]
  );

  return result.rows[0];
};

// Menghapus paket
const deletePackage = async (id) => {
  const result = await pool.query(
    `
    DELETE FROM packages
    WHERE id = $1
    RETURNING *
    `,
    [id]
  );

  return result.rows[0];
};

module.exports = {
  getAllPackages,
  getPackageById,
  createPackage,
  updatePackage,
  deletePackage,
};