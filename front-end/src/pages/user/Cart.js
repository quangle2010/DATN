import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart() {
        return (
                <div className='row'>
                        <h3 className="my-4">Giỏ hàng của tôi</h3>
                        <div className="col-lg-12">
                                <div className="card">
                                        <div className="card-body p-2">
                                                <div className="row align-items-center">
                                                        <div className="col-12 col-md-5 text-start">
                                                                <input type="checkbox" id="select-all" className="form-check-input" />
                                                                <label for="select-all" className="mx-1">Tất cả (3 sản phẩm)</label>
                                                        </div>
                                                        <div className="col-12 col-md-2 text-start">Đơn giá</div>
                                                        <div className="col-12 col-md-2 text-start">Số lượng</div>
                                                        <div className="col-12 col-md-2 text-start">Thành tiền</div>
                                                        <div className="col-12 col-md-1 text-start"></div>
                                                </div>
                                        </div>
                                </div>
                                <div className="card my-2">
                                        <div className="card-body p-2">
                                                <div className="row align-items-center">

                                                        <div className="col-12 mb-3 text-start d-flex align-items-center justify-content-between">
                                                                <div>
                                                                        <input type="checkbox" className="form-check-input" />
                                                                        <Link className='text-decoration-none ' to={'/shop'}> <i className="bi bi-shop text-black"></i> Nhà xuất bản</Link>
                                                                </div>

                                                        </div>


                                                        <div className="col-12 mb-3">
                                                                <div className="row align-items-center">

                                                                        <div className="col-12 col-md-5 d-flex align-items-center">
                                                                                <input type="checkbox" className="form-check-input" />
                                                                                <img src="https://via.placeholder.com/60x80" alt="Product" className="product-image mx-1" />
                                                                                <div className="text-muted">Sách không hỗ trợ Bookcare</div>
                                                                        </div>

                                                                        <div className="col-12 col-md-2 text-start">
                                                                                <span className="discount-price">84.000đ</span>
                                                                                <br />
                                                                                <span className="original-price">105.000đ</span>
                                                                        </div>

                                                                        <div className="col-12 col-md-2 text-start">
                                                                                <div className="d-flex  align-items-center">
                                                                                        <button className="btn btn-outline-secondary btn-sm">-</button>
                                                                                        <input type="text" className="form-control form-control-sm text-center mx-1" value="1" style={{ width: "50px" }} />
                                                                                        <button className="btn btn-outline-secondary btn-sm">+</button>
                                                                                </div>
                                                                        </div>

                                                                        <div className="col-12 col-md-2 text-start discount-price">84.000đ</div>

                                                                        <div className="col-12 col-md-1 text-start">
                                                                                <button type="button" className="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                                        <i className="bi bi-trash"></i>
                                                                                </button>

                                                                        </div>
                                                                </div>
                                                        </div>
                                                        <div className='col-12'>
                                                                <div className="btn-group">
                                                                        <button type="button" className="btn">voucher</button>
                                                                        <button type="button" className="btn  dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                <span className="visually-hidden">Toggle Dropdown</span>
                                                                        </button>
                                                                        <ul className="dropdown-menu p-0">
                                                                                <li>
                                                                                        <div className="card p-0" style={{ width: "30rem" }}>
                                                                                                <div className="card-body">
                                                                                                        <h4 className="card-title fs-6 mb-4">Voucher của shop</h4>
                                                                                                        <div className="row m-0 p-0 align-items-center justify-content-between">
                                                                                                                <div className="col-10 ps-0">
                                                                                                                        <input type="password" className="form-control" id="inputPassword2" />
                                                                                                                </div>
                                                                                                                <div className="col-2 p-0">
                                                                                                                        <button type="submit" className="btn btn-primary w-100">submit</button>
                                                                                                                </div>
                                                                                                        </div>

                                                                                                        <div className="card my-3">
                                                                                                                <div className="row m-0 p-0 align-items-center justify-content-start">
                                                                                                                        <div className="col-4 p-0">
                                                                                                                                <img src="https://via.placeholder.com/200x100" className="img-fluid rounded-start" alt="..." />
                                                                                                                        </div>
                                                                                                                        <div className="col-5 p-0">
                                                                                                                                <h5 className="card-title p-2">Voucher</h5>
                                                                                                                        </div>
                                                                                                                        <div className="col-3 p-0">
                                                                                                                                <div className='me-2'>
                                                                                                                                        <button
                                                                                                                                                type="button"
                                                                                                                                                className="btn btn-primary btn-sm w-100"
                                                                                                                                        >
                                                                                                                                                áp dụng
                                                                                                                                        </button>
                                                                                                                                </div>


                                                                                                                        </div>
                                                                                                                </div>
                                                                                                        </div>



                                                                                                </div>
                                                                                        </div>

                                                                                </li>

                                                                        </ul>
                                                                </div>
                                                        </div>


                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                        <div className="modal-content">
                                                <div className="modal-header">
                                                        <h5 className="modal-title" id="exampleModalLabel">Xác nhận xóa sản phẩm này ra khỏi giỏ hàng</h5>
                                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                        Bạn chắc chắn muốn xóa sản phẩm này ra khỏi giỏ hàng?
                                                </div>
                                                <div className="modal-footer">

                                                        <button type="button" className="btn btn-primary btn-sm">Xác nhận</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className='col-lg-12'>
                                <div className="card">
                                        <div className="card-body p-2">

                                                <div className='d-flex justify-content-between align-items-center'>
                                                        <div className='w-50'>
                                                                <input type="checkbox" id="select-all" className="form-check-input" />
                                                                <label for="select-all" className="mx-1">Tất cả (3 sản phẩm)</label>
                                                        </div>
                                                        <div className='w-50'>
                                                                <div className='d-flex justify-content-between align-items-center'>
                                                                        <div className=''>Tổng tiền</div>
                                                                        <div className=''>
                                                                                <Link to={'/user/checkout-cart'}

                                                                                        className="btn btn-success text-decoration-none "
                                                                                >
                                                                                        Mua hàng
                                                                                </Link>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                        </div>



                </div>
        )
}
