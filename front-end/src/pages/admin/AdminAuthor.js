import React from 'react'
import { Link } from 'react-router-dom'
export default function AdminAuthor() {
        return (
                <>
                        <nav aria-label="breadcrumb" className="py-2">
                                <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item"><Link to={'/admin/dashboard'} className="text-decoration-none">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Quản lý tác giả</li>

                                </ol>
                        </nav>
                        <div className="fs-3 mb-2">Quản lý tác giả</div>
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
                                                <button className='btn btn-success btn-sm'>add</button>
                                        </div>
                                </div>
                                <div className="card-body ">
                                        <div className="table-responsive">
                                                <table className="table align-middle">
                                                        <thead>
                                                                <tr>
                                                                        <td >Tên tác giả</td>
                                                                        <td style={{ width: "10%" }}></td>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                                <tr>
                                                                        <td>quangle</td>
                                                                        <td>
                                                                                <div className="d-flex gap-2">
                                                                                        <button
                                                                                                type="button"
                                                                                                className="btn btn-primary btn-sm"
                                                                                                data-bs-toggle="modal"
                                                                                                data-bs-target="#modalId"
                                                                                        >
                                                                                                Chitiet
                                                                                        </button>
                                                                                        <button
                                                                                                type="button"
                                                                                                className="btn btn-danger btn-sm"
                                                                                                data-bs-toggle="modal"
                                                                                                data-bs-target="#modalId1"
                                                                                        >
                                                                                                Delete
                                                                                        </button>
                                                                                </div>


                                                                        </td>
                                                                </tr>

                                                        </tbody>
                                                </table>
                                        </div>
                                </div>

                        </div>
                        <div
                                className="modal fade"
                                id="modalId"
                                tabindex="-1"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"

                                role="dialog"
                                aria-labelledby="modalTitleId"
                                aria-hidden="true"
                        >
                                <div
                                        className="modal-dialog  modal-md"
                                        role="document"
                                >
                                        <div className="modal-content">
                                                <div className="modal-header">
                                                        <h5 className="modal-title" id="modalTitleId">
                                                                Chi tiết
                                                        </h5>
                                                        <button
                                                                type="button"
                                                                className="btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                        ></button>
                                                </div>
                                                <div className="modal-body">
                                                        <div className="mb-3">
                                                                <label for="exampleFormControlInput1" className="form-label">Tên tác giả</label>
                                                                <input type="text" className="form-control" id="exampleFormControlInput1" />
                                                        </div>

                                                </div>
                                                <div className="modal-footer">

                                                        <button type="button" className="btn btn-primary">Save</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div
                                className="modal fade"
                                id="modalId1"
                                tabindex="-1"
                                data-bs-backdrop="static"
                                data-bs-keyboard="false"

                                role="dialog"
                                aria-labelledby="modalTitleId"
                                aria-hidden="true"
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
                                                                type="button"
                                                                className="btn-close"
                                                                data-bs-dismiss="modal"
                                                                aria-label="Close"
                                                        ></button>
                                                </div>
                                                <div className="modal-body">Body</div>
                                                <div className="modal-footer">

                                                        <button type="button" className="btn btn-primary">Yes</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        )
}
