"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";

import {
  FaGem,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import "./packages.css";

export default function PackagesPage() {

  /* ==================================================
     DATA
  ================================================== */

  const [packages, setPackages] =
    useState([]);

  const [categories, setCategories] =
    useState([]);


  /* ==================================================
     PAGE STATE
  ================================================== */

  const [pageLoading, setPageLoading] =
    useState(true);

  const [submitLoading, setSubmitLoading] =
    useState(false);

  const [deleteLoading, setDeleteLoading] =
    useState(null);


  /* ==================================================
     MODAL
  ================================================== */

  const [showModal, setShowModal] =
    useState(false);

  const [isEdit, setIsEdit] =
    useState(false);


  /* ==================================================
     FORM DATA
  ================================================== */

  const [formData, setFormData] =
    useState({
      id: null,
      category_id: "",
      package_name: "",
      price: "",
      description: "",
      image: null,
    });


  /* ==================================================
     FETCH PACKAGES
  ================================================== */

  const fetchPackages = async () => {

    try {

      const response =
        await api.get("/packages");

      const result =
        response?.data?.data ??
        response?.data ??
        [];

      setPackages(result);

    } catch (error) {

      console.error(
        "Fetch Packages Error:",
        error
      );

      alert(
        "Gagal mengambil data paket."
      );

    }

  };


  /* ==================================================
     FETCH CATEGORIES
  ================================================== */

  const fetchCategories = async () => {

    try {

      const response =
        await api.get("/categories");

      const result =
        response?.data?.data ??
        response?.data ??
        [];

      setCategories(result);

    } catch (error) {

      console.error(
        "Fetch Categories Error:",
        error
      );

      alert(
        "Gagal mengambil data kategori."
      );

    }

  };


  /* ==================================================
     INITIAL LOAD
  ================================================== */

  useEffect(() => {

    const loadData = async () => {

      try {

        setPageLoading(true);

        await Promise.all([
          fetchPackages(),
          fetchCategories(),
        ]);

      } finally {

        setPageLoading(false);

      }

    };

    loadData();

  }, []);


  /* ==================================================
     RESET FORM
  ================================================== */

  const resetForm = () => {

    setFormData({

      id: null,

      category_id: "",

      package_name: "",

      price: "",

      description: "",

      image: null,

    });

    setIsEdit(false);

  };


  /* ==================================================
     OPEN ADD MODAL
  ================================================== */

  const handleOpenAddModal = () => {

    resetForm();

    setShowModal(true);

  };


  /* ==================================================
     CLOSE MODAL
  ================================================== */

  const handleCloseModal = () => {

    if (submitLoading) return;

    resetForm();

    setShowModal(false);

  };


  /* ==================================================
     INPUT HANDLER
  ================================================== */

  const handleInputChange = (e) => {

    const {

      name,

      value,

    } = e.target;

    setFormData((prev) => ({

      ...prev,

      [name]: value,

    }));

  };


  /* ==================================================
     IMAGE HANDLER
  ================================================== */

  const handleImageChange = (e) => {

    setFormData((prev) => ({

      ...prev,

      image: e.target.files[0],

    }));

  };


  /* ==================================================
     EDIT PACKAGE
  ================================================== */

  const handleEdit = (item) => {

    setFormData({

      id: item.id,

      category_id: String(
        item.category_id ?? ""
      ),

      package_name:
        item.package_name ?? "",

      price:
        item.price ?? "",

      description:
        item.description ?? "",

      image: null,

    });

    setIsEdit(true);

    setShowModal(true);

  };


  /* ==================================================
     VALIDATE FORM
  ================================================== */

  const validateForm = () => {

    if (!formData.category_id) {

      alert(
        "Kategori wajib dipilih."
      );

      return false;

    }

    if (!formData.package_name.trim()) {

      alert(
        "Nama paket wajib diisi."
      );

      return false;

    }

    if (!formData.price) {

      alert(
        "Harga paket wajib diisi."
      );

      return false;

    }

    return true;

  };


  /* ==================================================
     BUILD FORM DATA
  ================================================== */

  const buildFormData = () => {

    const data = new FormData();

    data.append(
      "category_id",
      formData.category_id
    );

    data.append(
      "package_name",
      formData.package_name.trim()
    );

    data.append(
      "price",
      formData.price
    );

    data.append(
      "description",
      formData.description.trim()
    );

    if (formData.image) {

      data.append(
        "image",
        formData.image
      );

    }

    return data;

  };


  /* ==================================================
     DELETE PACKAGE
  ================================================== */

  const handleDelete = async (id) => {

    const confirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus paket ini?"
    );

    if (!confirmed) {

      return;

    }

    try {

      setDeleteLoading(id);

      await api.delete(
        `/packages/${id}`
      );

      alert(
        "Paket berhasil dihapus."
      );

      await fetchPackages();

    } catch (error) {

      console.error(
        "Delete Package Error:",
        error
      );

      alert(

        error?.response?.data?.message ||

        "Gagal menghapus paket."

      );

    } finally {

      setDeleteLoading(null);

    }

  };


  /* ==================================================
     SUBMIT FORM
  ================================================== */

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validateForm()) {

      return;

    }

    try {

      setSubmitLoading(true);

      const payload =
        buildFormData();

      const config = {

        headers: {

          "Content-Type":
            "multipart/form-data",

        },

      };

      if (isEdit) {

        await api.put(

          `/packages/${formData.id}`,

          payload,

          config

        );

        alert(
          "Paket berhasil diperbarui."
        );

      } else {

        await api.post(

          "/packages",

          payload,

          config

        );

        alert(
          "Paket berhasil ditambahkan."
        );

      }

      await fetchPackages();

      handleCloseModal();

    } catch (error) {

      console.error(
        "Submit Package Error:",
        error
      );

      alert(

        error?.response?.data?.message ||

        "Terjadi kesalahan saat menyimpan data."

      );

    } finally {

      setSubmitLoading(false);

    }

  };


  /* ==================================================
     PAGE LOADING
  ================================================== */

  if (pageLoading) {

    return (

      <div className="pkgx-loading">

        <h2>

          Memuat data paket...

        </h2>

      </div>

    );

  }

    /* ==================================================
     JSX
  ================================================== */

  return (

    <div className="pkgx-page">

      {/* ==================================================
          PAGE HEADER
      ================================================== */}

      <div className="pkgx-header">

        <div className="pkgx-header-left">

          <div className="pkgx-header-icon">

            <FaGem />

          </div>

          <div className="pkgx-header-content">

            <h1>

              Manajemen Paket

            </h1>

            <p>

              Kelola seluruh paket wedding
              yang tersedia pada sistem.

            </p>

          </div>

        </div>


        <button
          type="button"
          className="pkgx-add-button"
          onClick={handleOpenAddModal}
        >

          <FaPlus />

          <span>

            Tambah Paket

          </span>

        </button>

      </div>


      {/* ==================================================
          STATISTICS
      ================================================== */}

      <div className="pkgx-stat-grid">

        <div className="pkgx-stat-card">

          <div className="pkgx-stat-icon">

            <FaGem />

          </div>

          <div className="pkgx-stat-content">

            <h3>

              {packages.length}

            </h3>

            <p>

              Total Paket Wedding

            </p>

          </div>

        </div>

      </div>


      {/* ==================================================
          TABLE CARD
      ================================================== */}

      <div className="pkgx-table-card">

        {/* ==============================================
            TABLE HEADER
        ============================================== */}

        <div className="pkgx-table-header">

          <div>

            <h2>

              Daftar Paket Wedding

            </h2>

            <p>

              Seluruh paket wedding
              yang tersedia pada sistem.

            </p>

          </div>

        </div>


        {/* ==============================================
            TABLE WRAPPER
        ============================================== */}

        <div className="pkgx-table-wrapper">

          <table className="pkgx-table">

            <thead>

              <tr>

                <th width="70">

                  No

                </th>

                <th width="120">

                  Gambar

                </th>

                <th>

                  Nama Paket

                </th>

                <th width="180">

                  Kategori

                </th>

                <th width="180">

                  Harga

                </th>

                <th>

                  Deskripsi

                </th>

                <th width="170">

                  Aksi

                </th>

              </tr>

            </thead>

            <tbody>

                            {packages.length > 0 ? (

                packages.map((item, index) => (

                  <tr key={item.id}>

                    <td>

                      {index + 1}

                    </td>

                    <td>

                      {item.image ? (

                        <img
                          src={`http://localhost:5000${item.image}`}
                          alt={item.package_name}
                          className="pkgx-image"
                        />

                      ) : (

                        <span>-</span>

                      )}

                    </td>

                    <td>

                      <div className="pkgx-package-name">

                        {item.package_name}

                      </div>

                    </td>

                    <td>

                      {item.category_name}

                    </td>

                    <td>

                      Rp{" "}

                      {Number(
                        item.price
                      ).toLocaleString(
                        "id-ID"
                      )}

                    </td>

                    <td>

                      <div className="pkgx-description">

                        {item.description || "-"}

                      </div>

                    </td>

                    <td>

                      <div className="pkgx-action-group">

                        <button
                          type="button"
                          className="pkgx-edit-button"
                          onClick={() =>
                            handleEdit(item)
                          }
                        >

                          <FaEdit />

                          <span>

                            Edit

                          </span>

                        </button>

                        <button
                          type="button"
                          className="pkgx-delete-button"
                          onClick={() =>
                            handleDelete(item.id)
                          }
                          disabled={
                            deleteLoading === item.id
                          }
                        >

                          <FaTrash />

                          <span>

                            {deleteLoading === item.id
                              ? "Menghapus..."
                              : "Hapus"}

                          </span>

                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan={7}
                    className="pkgx-empty-state"
                  >

                    <div className="pkgx-empty-icon">

                      <FaGem />

                    </div>

                    <h3>

                      Belum Ada Paket

                    </h3>

                    <p>

                      Belum terdapat data paket
                      wedding pada sistem.
                      Silakan tambahkan paket
                      pertama untuk mulai
                      mengelola layanan wedding.

                    </p>

                    <button
                      type="button"
                      className="pkgx-add-button pkgx-empty-button"
                      onClick={handleOpenAddModal}
                    >

                      <FaPlus />

                      <span>

                        Tambah Paket

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
          className="pkgx-modal-overlay"
          onClick={handleCloseModal}
        >

          <div
            className="pkgx-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* ==========================================
                MODAL HEADER
            ========================================== */}

            <div className="pkgx-modal-header">

              <h2>

                {isEdit
                  ? "Edit Paket Wedding"
                  : "Tambah Paket Wedding"}

              </h2>

              <p>

                Lengkapi seluruh informasi
                paket sebelum disimpan ke
                dalam sistem.

              </p>

            </div>


            {/* ==========================================
                FORM
            ========================================== */}

            <form
              className="pkgx-form"
              onSubmit={handleSubmit}
            >

              {/* ======================================
                  KATEGORI
              ====================================== */}

              <div className="pkgx-form-group">

                <label htmlFor="category_id">

                  Kategori

                </label>

                <select
                  id="category_id"
                  name="category_id"
                  value={formData.category_id}
                  onChange={handleInputChange}
                  disabled={submitLoading}
                  required
                >

                  <option value="">

                    -- Pilih Kategori --

                  </option>

                  {categories.map((category) => (

                    <option
                      key={category.id}
                      value={category.id}
                    >

                      {category.name}

                    </option>

                  ))}

                </select>

              </div>


              {/* ======================================
                  NAMA PAKET
              ====================================== */}

              <div className="pkgx-form-group">

                <label htmlFor="package_name">

                  Nama Paket

                </label>

                <input
                  id="package_name"
                  name="package_name"
                  type="text"
                  placeholder="Masukkan nama paket"
                  value={formData.package_name}
                  onChange={handleInputChange}
                  disabled={submitLoading}
                  required
                />

              </div>


              {/* ======================================
                  HARGA
              ====================================== */}

              <div className="pkgx-form-group">

                <label htmlFor="price">

                  Harga

                </label>

                <input
                  id="price"
                  name="price"
                  type="number"
                  placeholder="Masukkan harga paket"
                  value={formData.price}
                  onChange={handleInputChange}
                  disabled={submitLoading}
                  required
                />

              </div>


              {/* ======================================
                  DESKRIPSI
              ====================================== */}

              <div className="pkgx-form-group">

                <label htmlFor="description">

                  Deskripsi

                </label>

                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  placeholder="Masukkan deskripsi paket"
                  value={formData.description}
                  onChange={handleInputChange}
                  disabled={submitLoading}
                  required
                />

              </div>


              {/* ======================================
                  GAMBAR
              ====================================== */}

              <div className="pkgx-form-group">

                <label htmlFor="image">

                  Upload Gambar

                </label>

                <input
                  id="image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  disabled={submitLoading}
                />

              </div>


              {/* ======================================
                  PREVIEW
              ====================================== */}

              {formData.image && (

                <div className="pkgx-preview">

                  <img
                    src={URL.createObjectURL(
                      formData.image
                    )}
                    alt="Preview"
                  />

                </div>

              )}


              {/* ======================================
                  INFO BOX
              ====================================== */}

              <div className="pkgx-info-box">

                <strong>

                  Informasi

                </strong>

                <p>

                  Pastikan kategori, nama
                  paket, harga, deskripsi,
                  dan gambar telah sesuai
                  sebelum data disimpan.

                </p>

              </div>


              {/* ======================================
                  ACTION BUTTON
              ====================================== */}

              <div className="pkgx-modal-actions">

                <button
                  type="button"
                  className="pkgx-cancel-button"
                  onClick={handleCloseModal}
                  disabled={submitLoading}
                >

                  Batal

                </button>

                <button
                  type="submit"
                  className="pkgx-save-button"
                  disabled={submitLoading}
                >

                  {submitLoading
                    ? "Menyimpan..."
                    : isEdit
                    ? "Update Paket"
                    : "Simpan Paket"}

                </button>

              </div>

            </form>

          </div>

        </div>

      )}

          </div>

  );

}