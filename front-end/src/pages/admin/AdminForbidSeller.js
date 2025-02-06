import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminForbidSeller() {
        return (
                <>   <nav aria-label="breadcrumb" className="py-2">
                        <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><Link to={'/admin/dashboard'} className="text-decoration-none">Dashboard</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Quản lý cửa hàng</li>
                                <li className="breadcrumb-item active" aria-current="page">Ban cửa hàng</li>
                        </ol>
                </nav>
                        <div className="fs-3 mb-2">Ban cửa hàng</div>
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
                                </div>
                                <div className="card-body ">
                                        <div className="table-responsive">
                                                <table className="table align-middle">
                                                        <thead>
                                                                <tr>
                                                                        <td >Tên cửa hàng</td>
                                                                        <td >Email chủ shop</td>
                                                                        <td >Đánh giá</td>
                                                                        <td >Trạng thái</td>
                                                                        <td style={{ width: "5%" }}></td>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                                <tr>
                                                                        <td>quangle</td>
                                                                        <td>quangle@gmail.com</td>
                                                                        <td>quangle</td>
                                                                        <td>quangle</td>
                                                                        <td >
                                                                                <button
                                                                                        type="button"
                                                                                        className="btn btn-danger btn-sm"
                                                                                        data-bs-toggle="modal"
                                                                                        data-bs-target="#banStore"
                                                                                >
                                                                                        Ban
                                                                                </button>




                                                                        </td>
                                                                </tr>

                                                        </tbody>
                                                </table>
                                        </div>
                                </div>

                        </div>
                        <div className="modal fade" id="banStore" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                <div className="modal-dialog">
                                        <div className="modal-content">
                                                <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalToggleLabel2">Email shop</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                        <div className="mb-3">
                                                                <label for="message-text" className="col-form-label">Lý do:</label>
                                                                <textarea className="form-control" id="message-text"></textarea>
                                                        </div>
                                                </div>
                                                <div className="modal-footer">


                                                        <button
                                                                type="button"
                                                                className="btn btn-success"
                                                        >
                                                                Gửi
                                                        </button>

                                                </div>
                                        </div>
                                </div>
                        </div>

                </>
        )
}
