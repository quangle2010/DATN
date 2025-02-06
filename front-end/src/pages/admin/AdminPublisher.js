import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../../utils/axiosInstance';
import { showErrorToast, showSuccessToast } from '../../utils/Toast';
import { closeModal, openModal } from '../../utils/Open_Close_Modal';
import { useForm } from 'react-hook-form';

export default function AdminPublisher() {


        const [data, setData] = useState([]);
        const [selected, setSelected] = useState(null);
        const { register, handleSubmit, formState: { errors }, reset } = useForm();
        const fetchData = async () => {
                try {
                        const response = await axiosInstance.get('/admin/publisher/list');
                        if (response.data.status) {
                                setData(response.data.data);
                        }
                } catch (error) {
                        console.log(error);
                }
        }
        useEffect(() => {
                fetchData();
        }, []);
        const handleSavePublisher = async (data) => {
                try {
                        const response = await axiosInstance.post(`/admin/publisher/save`, data);
                        if (response.data.status === true) {
                                showSuccessToast(response.data.message);
                        } else {
                                showErrorToast(response.data.message);
                        }
                        handleCloseModal("editPublisher")
                        fetchData();
                } catch (error) {
                        showErrorToast(error.response?.data?.message || "Có lỗi xảy ra. Vui lòng thử lại.");
                }
        };
        const handleDeletePublisher = async (id) => {
                try {
                        const response = await axiosInstance.post(`/admin/publisher/delete?id=${id}`);
                        if (response.data.status) {
                                showSuccessToast(response.data.message);
                        } else {
                                showErrorToast(response.data.message)
                        }
                        handleCloseModal("deletePublisher");
                        fetchData();
                } catch (error) {
                        showErrorToast(error);
                }

        }
        const handleOpenModal = (item, nameModal) => {
                setSelected(item);
                reset({
                        id: item?.id || '',
                        name: item?.name || '',
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

        return (
                <>
                        <nav aria-label="breadcrumb" className="py-2">
                                <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item"><Link to={'/admin/dashboard'} className="text-decoration-none">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Quản lý nhà xuất bản</li>

                                </ol>
                        </nav>
                        <div className="fs-3 mb-2">Quản lý nhà xuất bản</div>
                        <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                        <div className='me-3'>
                                                <input
                                                        type="text"
                                                        className="form-control"
                                                        name=""
                                                        id=""
                                                        aria-describedby="helpId"
                                                        placeholder=""
                                                />
                                        </div>
                                        <div>
                                                <button className='btn btn-success btn-sm' onClick={() => { handleOpenModal(null, "editPublisher") }}>add</button>
                                        </div>
                                </div>
                                <div className="card-body ">
                                        <div className="table-responsive">
                                                <table className="table align-middle">
                                                        <thead>
                                                                <tr>
                                                                        <td >Tên nhà xuất bản</td>

                                                                        <td style={{ width: "10%" }}></td>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                                {
                                                                        data.map((item, index) => {
                                                                                return (
                                                                                        <tr key={index}>
                                                                                                <td>{item?.name}</td>
                                                                                                <td>
                                                                                                        <div className="d-flex gap-2">
                                                                                                                <button

                                                                                                                        className="btn btn-primary btn-sm"
                                                                                                                        onClick={() => { handleOpenModal(item, "editPublisher") }}
                                                                                                                >
                                                                                                                        Chitiet
                                                                                                                </button>
                                                                                                                <button
                                                                                                                        onClick={() => { handleOpenModal(item, "deletePublisher") }}
                                                                                                                        className="btn btn-danger btn-sm"

                                                                                                                >
                                                                                                                        Delete
                                                                                                                </button>
                                                                                                        </div>




                                                                                                </td>
                                                                                        </tr>
                                                                                )
                                                                        })
                                                                }
                                                        </tbody>
                                                </table>
                                        </div>
                                </div>

                        </div>
                        <div
                                className="modal fade"
                                id="editPublisher"

                        >
                                <div
                                        className="modal-dialog  modal-md"
                                        role="document"
                                >
                                        <div className="modal-content">
                                                <div className="modal-header">
                                                        <h5 className="modal-title" id="modalTitleId">
                                                                {selected?.id ? 'Cập nhật' : 'Thêm mới'}
                                                        </h5>
                                                        <button

                                                                className="btn-close"
                                                                onClick={() => {
                                                                        handleCloseModal("editPublisher")
                                                                }}
                                                        ></button>
                                                </div>
                                                <div className="modal-body">
                                                        <div className="mb-3">
                                                                <input type="hidden" {...register("id")} />
                                                                <label htmlFor="name" className="form-label">Tên nhà xuất bản</label>
                                                                <input type="text" className="form-control" id='name' {...register("name", { required: "Tên không được để trống" })} />
                                                                {errors.name && <small className="text-danger">{errors.name.message}</small>}
                                                        </div>


                                                </div>
                                                <div className="modal-footer">

                                                        <button type="button" className="btn btn-primary" onClick={handleSubmit(handleSavePublisher)}>Save</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div
                                className="modal fade"
                                id="deletePublisher"

                        >
                                <div
                                        className="modal-dialog   modal-md"
                                        role="document"
                                >
                                        <div className="modal-content">
                                                <div className="modal-header">
                                                        <h5 className="modal-title" id="modalTitleId">
                                                                Bạn chắc chắn muốn xóa?
                                                        </h5>
                                                        <button

                                                                className="btn-close"
                                                                onClick={() => {
                                                                        setSelected(null);
                                                                        closeModal("deletePublisher")
                                                                }}
                                                        ></button>
                                                </div>
                                                <div className="modal-body">
                                                        {selected?.name}
                                                </div>
                                                <div className="modal-footer">
                                                        <button type="button" className="btn btn-primary"
                                                                onClick={() => { handleDeletePublisher(selected?.id) }}
                                                        >Yes</button>
                                                </div>
                                        </div>
                                </div>
                        </div >
                </>
        )
}
