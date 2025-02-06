import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminAllowSeller() {
        return (
                <>
                        <nav aria-label="breadcrumb" className="py-2">
                                <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item"><Link to={'/admin/dashboard'} className="text-decoration-none">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Quản lý cửa hàng</li>
                                        <li className="breadcrumb-item active" aria-current="page">Duyệt cửa hàng</li>
                                </ol>
                        </nav>
                        <div className="fs-3 mb-2">Duyệt cửa hàng</div>
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
                                                                        <td >Email chủ shop</td>
                                                                        <td >Tên cửa hàng</td>
                                                                        <td >Đánh giá</td>
                                                                        <td >Trạng thái</td>
                                                                        <td style={{ width: "5%" }}></td>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                                <tr>
                                                                        <td>quangle@gmail.com</td>
                                                                        <td>quangle</td>
                                                                        <td>quangle</td>
                                                                        <td>quangle</td>
                                                                        <td >
                                                                                <button
                                                                                        type="button"
                                                                                        className="btn btn-primary btn-sm"
                                                                                        data-bs-toggle="modal"
                                                                                        data-bs-target="#detail"
                                                                                >
                                                                                        Chitiet
                                                                                </button>




                                                                        </td>
                                                                </tr>

                                                        </tbody>
                                                </table>
                                        </div>
                                </div>

                        </div>
                        <div className="modal fade" id="detail" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                                <div className="modal-dialog  modal-lg">
                                        <div className="modal-content">
                                                <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalToggleLabel">Chi tiết</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">      <div className='row'>
                                                        <div className='col-lg-4 col-md-12'>
                                                                <div className="card">
                                                                        <img src="https://picsum.photos/100/100" className="rounded " alt="..." />
                                                                </div>
                                                        </div>
                                                        <div className='col-lg-4 col-md-12'>
                                                                <p className='mb-4'>Họ tên</p>
                                                                <p className='mb-4'>Email</p>
                                                                <p className='mb-4'>Số điện thoại</p>
                                                                <p className='mb-4'>Địa chỉ</p>

                                                        </div>
                                                        <div className='col-lg-4 col-md-12'>
                                                                <p className='mb-4'>Tên shop</p>
                                                                <p className='mb-4'>Mô tả</p>
                                                                <p className='mb-4'>Địa chỉ shop</p>

                                                        </div>

                                                </div>
                                                </div>
                                                <div className="modal-footer">
                                                        <button className="btn btn-success" data-bs-target="#browseStore" data-bs-toggle="modal" data-bs-dismiss="modal">Duyệt shop</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="modal fade" id="browseStore" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                                <div className="modal-dialog">
                                        <div className="modal-content">
                                                <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalToggleLabel2">Email shop</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                        Bạn chắc chắn muốn duyệt cửa hàng này name?
                                                </div>
                                                <div className="modal-footer">
                                                        <button className="btn btn-primary" data-bs-target="#detail" data-bs-toggle="modal" data-bs-dismiss="modal">Trở về</button>

                                                        <button
                                                                type="button"
                                                                className="btn btn-success"
                                                        >
                                                                Xác nhận
                                                        </button>

                                                </div>
                                        </div>
                                </div>
                        </div>


                </>
        )
}
