"use client";

import { useEffect, useState } from "react";
import api from "@/services/api";

import {
  FaFolderOpen,
  FaPlus,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import "./categories.css";

export default function CategoriesPage() {

  /* ==================================================
     DATA
  ================================================== */

  const [categories, setCategories] = useState([]);


  /* ==================================================
     LOADING
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
     FORM
  ================================================== */

  const [formData, setFormData] =
    useState({
      id: null,
      name: "",
      description: "",
    });


  /* ==================================================
     FETCH CATEGORIES
  ================================================== */

  const fetchCategories = async () => {

    try {

      setPageLoading(true);

      const response = await api.get(
        "/categories"
      );

      const categoriesData =
        response?.data?.data ||
        response?.data ||
        [];

      setCategories(categoriesData);

    } catch (error) {

      console.error(
        "Fetch Category Error:",
        error
      );

      alert(
        "Gagal mengambil data kategori."
      );

    } finally {

      setPageLoading(false);

    }

  };


  /* ==================================================
     INITIAL LOAD
  ================================================== */

  useEffect(() => {

    fetchCategories();

  }, []);


  /* ==================================================
     RESET FORM
  ================================================== */

  const resetForm = () => {

    setFormData({
      id: null,
      name: "",
      description: "",
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
     EDIT CATEGORY
  ================================================== */

  const handleEdit = (category) => {

    setFormData({
      id: category.id,
      name: category.name || "",
      description:
        category.description || "",
    });

    setIsEdit(true);

    setShowModal(true);

  };


  /* ==================================================
     VALIDATE FORM
  ================================================== */

  const validateForm = () => {

    if (!formData.name.trim()) {

      alert(
        "Nama kategori wajib diisi."
      );

      return false;

    }

    return true;

  };


  /* ==================================================
     BUILD PAYLOAD
  ================================================== */

  const buildPayload = () => {

    return {
      name: formData.name.trim(),
      description:
        formData.description.trim(),
    };

  };


  /* ==================================================
     DELETE CATEGORY
  ================================================== */

  const handleDelete = async (id) => {

    const confirmed = window.confirm(
      "Apakah Anda yakin ingin menghapus kategori ini?"
    );

    if (!confirmed) return;

    try {

      setDeleteLoading(id);

      await api.delete(
        `/categories/${id}`
      );

      alert(
        "Kategori berhasil dihapus."
      );

      await fetchCategories();

    } catch (error) {

      console.error(
        "Delete Category Error:",
        error
      );

      alert(
        error?.response?.data?.message ||
        "Gagal menghapus kategori."
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

    if (!validateForm()) return;

    try {

      setSubmitLoading(true);

      const payload =
        buildPayload();

      if (isEdit) {

        await api.put(
          `/categories/${formData.id}`,
          payload
        );

        alert(
          "Kategori berhasil diperbarui."
        );

      } else {

        await api.post(
          "/categories",
          payload
        );

        alert(
          "Kategori berhasil ditambahkan."
        );

      }

      await fetchCategories();

      handleCloseModal();

    } catch (error) {

      console.error(
        "Submit Category Error:",
        error
      );

      alert(
        error?.response?.data?.message ||
        "Tidak dapat terhubung ke server."
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

      <div className="catx-loading">

        <h2>
          Memuat kategori...
        </h2>

      </div>

    );

  }

    /* ==================================================
     JSX
  ================================================== */

  return (

    <div className="catx-page">

      {/* ==================================================
          PAGE HEADER
      ================================================== */}

      <div className="catx-header">

        <div className="catx-header-left">

          <div className="catx-header-icon">

            <FaFolderOpen />

          </div>

          <div className="catx-header-content">

            <h1>
              Manajemen Kategori
            </h1>

            <p>
              Kelola seluruh kategori layanan
              wedding yang tersedia pada sistem.
            </p>

          </div>

        </div>


        <button
          type="button"
          className="catx-add-button"
          onClick={handleOpenAddModal}
        >

          <FaPlus />

          <span>
            Tambah Kategori
          </span>

        </button>

      </div>



      {/* ==================================================
          STATISTICS
      ================================================== */}

      <div className="catx-stat-grid">

        <div className="catx-stat-card">

          <div className="catx-stat-icon">

            <FaFolderOpen />

          </div>

          <div className="catx-stat-content">

            <h3>

              {categories.length}

            </h3>

            <p>

              Total Kategori

            </p>

          </div>

        </div>

      </div>



      {/* ==================================================
          TABLE CARD
      ================================================== */}

      <div className="catx-table-card">

        <div className="catx-table-header">

          <div>

            <h2>

              Daftar Kategori

            </h2>

            <p>

              Seluruh kategori wedding
              yang tersedia pada sistem.

            </p>

          </div>

        </div>


        <div className="catx-table-wrapper">

          <table className="catx-table">
                        <thead>

              <tr>

                <th width="70">
                  No
                </th>

                <th>
                  Nama Kategori
                </th>

                <th>
                  Deskripsi
                </th>

                <th width="220">
                  Aksi
                </th>

              </tr>

            </thead>


            <tbody>

              {categories.length > 0 ? (

                categories.map(
                  (
                    category,
                    index
                  ) => (

                    <tr
                      key={category.id}
                    >

                      <td>

                        {index + 1}

                      </td>

                      <td>

                        <div className="catx-category-name">

                          {category.name}

                        </div>

                      </td>

                      <td>

                        {
                          category.description ||
                          "-"
                        }

                      </td>

                      <td>

                        <div className="catx-action-group">

                          <button
                            type="button"
                            className="catx-edit-button"
                            onClick={() =>
                              handleEdit(
                                category
                              )
                            }
                          >

                            <FaEdit />

                            <span>

                              Edit

                            </span>

                          </button>


                          <button
                            type="button"
                            className="catx-delete-button"
                            onClick={() =>
                              handleDelete(
                                category.id
                              )
                            }
                            disabled={
                              deleteLoading ===
                              category.id
                            }
                          >

                            <FaTrash />

                            <span>

                              {deleteLoading ===
                              category.id
                                ? "Menghapus..."
                                : "Hapus"}

                            </span>

                          </button>

                        </div>

                      </td>

                    </tr>

                  )
                )

              ) : (

                <tr>

                  <td
                    colSpan="4"
                    className="catx-empty-state"
                  >

                    <div className="catx-empty-icon">

                      <FaFolderOpen />

                    </div>

                    <h3>

                      Belum Ada Kategori

                    </h3>

                    <p>

                      Silakan tambahkan
                      kategori pertama
                      untuk mulai mengelola
                      data kategori.

                    </p>

                    <button
                      type="button"
                      className="catx-add-button catx-empty-button"
                      onClick={
                        handleOpenAddModal
                      }
                    >

                      <FaPlus />

                      <span>

                        Tambah Kategori

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
          className="catx-modal-overlay"
          onClick={handleCloseModal}
        >

          <div
            className="catx-modal"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* ==================================================
                MODAL HEADER
            ================================================== */}

            <div className="catx-modal-header">

              <h2>

                {isEdit
                  ? "Edit Kategori"
                  : "Tambah Kategori"}

              </h2>

              <p>

                Lengkapi informasi kategori
                yang akan disimpan ke dalam
                sistem.

              </p>

            </div>



            {/* ==================================================
                FORM
            ================================================== */}

            <form
              className="catx-form"
              onSubmit={handleSubmit}
            >

              {/* ==================================================
                  NAMA KATEGORI
              ================================================== */}

              <div className="catx-form-group">

                <label htmlFor="name">

                  Nama Kategori

                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="off"
                  placeholder="Masukkan nama kategori"
                  value={formData.name}
                  onChange={handleInputChange}
                  disabled={submitLoading}
                  required
                />

              </div>



              {/* ==================================================
                  DESKRIPSI
              ================================================== */}

              <div className="catx-form-group">

                <label htmlFor="description">

                  Deskripsi

                </label>

                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  placeholder="Masukkan deskripsi kategori..."
                  value={formData.description}
                  onChange={handleInputChange}
                  disabled={submitLoading}
                />

              </div>



              {/* ==================================================
                  INFO BOX
              ================================================== */}

              <div className="catx-info-box">

                <strong>

                  Informasi

                </strong>

                <p>

                  Pastikan nama kategori
                  mudah dipahami dan tidak
                  duplikat dengan kategori
                  yang sudah tersedia.

                </p>

              </div>



              {/* ==================================================
                  ACTION BUTTONS
              ================================================== */}

              <div className="catx-modal-actions">

                <button
                  type="button"
                  className="catx-cancel-button"
                  onClick={handleCloseModal}
                  disabled={submitLoading}
                >

                  Batal

                </button>


                <button
                  type="submit"
                  className="catx-save-button"
                  disabled={submitLoading}
                >

                  {submitLoading
                    ? "Menyimpan..."
                    : isEdit
                    ? "Update Kategori"
                    : "Simpan Kategori"}

                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>

  );

}