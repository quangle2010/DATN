import React, { useEffect, useState } from "react";
import Pagination from "../../utils/Pagination";
import { Link } from "react-router-dom";
import { closeModal, openModal } from "../../utils/Open_Close_Modal";
import { showErrorToast, showSuccessToast } from "../../utils/Toast";
import { useForm } from "react-hook-form";
import axiosInstance from "../../utils/axiosInstance";
import { Select, Tooltip } from "antd";

export default function AdminGenre() {
        const [items, setItems] = useState([]);
        const [totalItems, setTotalItems] = useState(0);
        const [keyword, setKeyword] = useState("");
        const [currentPage, setCurrentPage] = useState(1);
        const [selectedValue, setSelectedValue] = useState(null);
        const [selected, setSelected] = useState(null);
        const [itemsSearch, setItemsSearch] = useState([]);
        const { register, handleSubmit, formState: { errors }, reset } = useForm();



        const getQueryParams = () => {
                const params = new URLSearchParams(window.location.search);
                const keyword = params.get("keyword") || "";
                const page = parseInt(params.get("page")) || 1;

                return { keyword, page };
        };
        const fetchData = async (keyword, page) => {
                try {
                        const response = await axiosInstance.get(`/admin/genre/list?keyword=${keyword}&page=${page}`);
                        setItems(response.data.data.objects);
                        setTotalItems(response.data.data.totalItems);
                } catch (error) {
                        console.error("Lỗi load dữ liệu:", error);
                }
        };

        useEffect(() => {
                axiosInstance.get('/admin/genre/all')
                        .then((response) => {
                                setItemsSearch(response.data.data);
                        })
                        .catch((error) => {
                                console.error("Lỗi load dữ liệu:", error);
                        });
        }, []);

        useEffect(() => {
                const { keyword: queryKeyword, page } = getQueryParams();
                setKeyword(queryKeyword);
                setCurrentPage(page);
                fetchData(queryKeyword, page);
        }, []);

        useEffect(() => {
                fetchData(keyword, currentPage);
        }, [keyword, currentPage]);

        useEffect(() => {
                fetchData(keyword, currentPage);
                const params = new URLSearchParams(window.location.search);
                params.set("keyword", keyword);
                params.set("page", currentPage);
                window.history.replaceState(null, "", "?" + params.toString());
        }, [keyword, currentPage]);

        const handleSearchChange = (value) => {
                setKeyword(value);
                setSelectedValue(value);
                setCurrentPage(1);
        };

        const handlePageChange = (newPage) => {
                setCurrentPage(newPage);
                const params = new URLSearchParams(window.location.search);
                params.set('keyword', keyword || '');
                params.set('page', newPage);
                window.history.pushState(null, '', "?" + params.toString());
        };

        const totalPages = Math.ceil(totalItems / 10);

        const handleDeleteGenre = async (id) => {
                try {
                        const response = await axiosInstance.post(`/admin/genre/delete?id=${id}`);
                        if (response.data.status === true) {
                                showSuccessToast(response.data.message);
                        } else {
                                showErrorToast(response.data.message);
                        }
                        fetchData(keyword, currentPage);
                        handleCloseModal("deleteGenre")
                } catch (error) {
                        showErrorToast(error.response?.data.message || "Có lỗi xảy ra. Vui lòng thử lại.");
                }

        };

        const handleSaveGenre = async (data) => {
                try {
                        const response = await axiosInstance.post(`/admin/genre/save`, data);
                        if (response.data.status === true) {
                                showSuccessToast(response.data.message);
                        } else {
                                showErrorToast(response.data.message);
                        }

                        fetchData(keyword, currentPage);
                        handleCloseModal("saveGenre")
                } catch (error) {
                        showErrorToast(error.response?.data?.message || "Có lỗi xảy ra. Vui lòng thử lại.");
                }
        };

        const handleOpenModal = (item, nameModal) => {
                setSelected(item);
                reset({
                        id: item?.id,
                        name: item?.name
                });
                openModal(nameModal);
        };
        const handleCloseModal = (nameModal) => {
                setSelected(null);
                reset({
                        id: '',
                        name: ''
                });
                closeModal(nameModal);
        };



        const options = [
                { label: 'Tất cả', value: '' },
                ...itemsSearch.map(item => ({
                        label: item.name,
                        value: item.name,
                })),
        ];

        return (
                <>
                        <nav aria-label="breadcrumb" className="py-2">
                                <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item">
                                                <Link to={"/admin/dashboard"} className="text-decoration-none">Dashboard</Link>
                                        </li>
                                        <li className="breadcrumb-item active" aria-current="page">Quản lý thể loại</li>
                                </ol>
                        </nav>
                        <div className="fs-3 mb-2">Quản lý thể loại</div>
                        <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                        <Select
                                                showSearch
                                                style={{ width: 400 }}
                                                placeholder="Nhập từ khóa"
                                                optionFilterProp="label"
                                                options={options}
                                                value={selectedValue}
                                                onChange={handleSearchChange}
                                        />
                                        <Tooltip placement="top" title={'Thêm'}>
                                                <button className="btn btn-outline-primary d-flex align-items-center"
                                                        onClick={() => {
                                                                handleOpenModal(null, 'saveGenre')
                                                        }}
                                                >
                                                        <i className='bx bx-plus-medical'></i>
                                                </button>
                                        </Tooltip>
                                </div>
                                <div className="card-body">
                                        <div className="table-responsive">
                                                <table className="table align-middle">
                                                        <thead>
                                                                <tr>
                                                                        <td className="fw-bold">Tên thể loại</td>
                                                                        <td style={{ width: "10%" }}></td>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                                {items.map((item) => (
                                                                        <tr key={item.id}>
                                                                                <td>{item.name}</td>
                                                                                <td>
                                                                                        <div className="d-flex flex-nowrap float-end">
                                                                                                <Tooltip placement="top" title={'Chỉnh sửa'}>
                                                                                                        <button onClick={() => {
                                                                                                                handleOpenModal(item, 'saveGenre')
                                                                                                        }}
                                                                                                                className="btn btn-outline-warning btn-sm me-2">
                                                                                                                <i className='bx bxs-edit-alt'></i>
                                                                                                        </button>
                                                                                                </Tooltip>
                                                                                                <Tooltip placement="top" title={'Xóa'}>
                                                                                                        <button onClick={() => { handleOpenModal(item, 'deleteGenre') }}
                                                                                                                className="btn btn-outline-danger btn-sm">
                                                                                                                <i className="bx bxs-trash"></i>
                                                                                                        </button>
                                                                                                </Tooltip>
                                                                                        </div>
                                                                                </td>
                                                                        </tr>
                                                                ))}
                                                        </tbody>
                                                </table>
                                        </div>
                                        <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={handlePageChange} />
                                </div>
                        </div>

                        {/* Modal Xóa */}
                        <div className="modal fade" id="deleteGenre" >
                                <div className="modal-dialog modal-md" role="document">
                                        <div className="modal-content">
                                                <div className="modal-header">
                                                        <h5 className="modal-title" id="modalTitleId">Bạn chắc chắn muốn xóa?</h5>
                                                        <button type="button" className="btn-close" onClick={() => { handleCloseModal("deleteGenre") }}></button>
                                                </div>
                                                <div className="modal-body">{selected?.name}</div>
                                                <div className="modal-footer">
                                                        <button type="button" className="btn btn-primary" onClick={() => handleDeleteGenre(selected?.id)}>Yes</button>
                                                </div>
                                        </div>
                                </div>
                        </div>

                        {/* Modal Thêm/Sửa */}
                        <div className="modal fade" id="saveGenre">
                                <div className="modal-dialog modal-md" role="document">

                                        <div className="modal-content">
                                                <div className="modal-header">
                                                        <h5 className="modal-title" id="modalTitleId">{selected?.id ? 'Cập nhật' : 'Thêm mới'}</h5>
                                                        <button className="btn-close" onClick={() => handleCloseModal('saveGenre')}></button>
                                                </div>
                                                <div className="modal-body">
                                                        <div className="mb-3">
                                                                <input type="hidden" {...register("id")} />
                                                                <label htmlFor="name" className="form-label">Tên thể loại</label>
                                                                <input type="text" className="form-control" {...register("name", { required: "Tên không được để trống" })} />
                                                                {errors.name && <small className="text-danger">{errors.name.message}</small>}
                                                        </div>
                                                </div>
                                                <div className="modal-footer">
                                                        <button className="btn btn-outline-success" onClick={handleSubmit(handleSaveGenre)}><i className='bx bxs-save'></i></button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        );
}
