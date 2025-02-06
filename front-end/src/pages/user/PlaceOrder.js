import React from 'react'
import { Link } from 'react-router-dom'
// import '../css/main.css';
export default function PlaceOrder() {
        return (
                <div className='mt-5'>
                        <div className='col-lg-12 fs-3 fw-bold '>
                                Giỏ hàng
                        </div>
                        <div className='row my-4'>
                                <div className='col-md-8 col-12'>
                                        <div className="position-relative p-3  border rounded mb-4">
                                                <div className="package-label">
                                                        Gói 1: Giao thứ 2, trước 19h, 06/01
                                                </div>
                                                <div className="card mt-3">
                                                        <div className="card-body">
                                                                <div className='d-flex justify-content-between align-items-center'>
                                                                        <p className='fw-bold'>Giao hàng nhanh</p>
                                                                        <p className=' text-danger fw-bold'>12.000 đ</p>
                                                                </div>
                                                                <div className='mb-2'>
                                                                        <div className='row p-0 m-0 d-flex justify-content-between align-items-center'>
                                                                                <div className='col-2 p-0'>
                                                                                        <img src="https://via.placeholder.com/200x100" className="img-fluid rounded-start" alt="..." />
                                                                                </div>

                                                                                <div className='col-4 '>

                                                                                        Nhà Lãnh Đạo Không Chức Danh
                                                                                </div>
                                                                                <div className='col-2 p-0'>
                                                                                        100
                                                                                </div>
                                                                                <div className='col-4 fw-bold flex-nowrap'>

                                                                                        87.200 ₫
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <Link
                                                                                className="text-decoration-none d-block"
                                                                                data-bs-toggle="modal" data-bs-target="#myModal"
                                                                                href="#"

                                                                        ><i className="bi bi-tag"></i>  Chọn hoặc nhập mã khác <i className="bi bi-chevron-right"></i></Link>

                                                                </div>
                                                        </div>

                                                </div>
                                        </div>
                                        <div className="position-relative p-3  border rounded mb-4 ">
                                                <div className="package-label">
                                                        Gói 1: Giao thứ 2, trước 19h, 06/01
                                                </div>
                                                <div className="card mt-3">
                                                        <div className="card-body">

                                                                <div className='d-flex justify-content-between align-items-center'>
                                                                        <p className='fw-bold'>Giao hàng nhanh</p>
                                                                        <p className=' text-danger fw-bold'>12.000 đ</p>
                                                                </div>

                                                                <div>
                                                                        <div className='mb-2'>
                                                                                <div className='row p-0 m-0 d-flex justify-content-between align-items-center'>
                                                                                        <div className='col-2 p-0'>
                                                                                                <img src="https://via.placeholder.com/200x100" className="img-fluid rounded-start" alt="..." />
                                                                                        </div>

                                                                                        <div className='col-4 '>

                                                                                                Nhà Lãnh Đạo Không Chức Danh
                                                                                        </div>
                                                                                        <div className='col-2 p-0'>
                                                                                                100
                                                                                        </div>
                                                                                        <div className='col-4 fw-bold flex-nowrap'>

                                                                                                87.200 ₫
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                        <div className='mb-2'>
                                                                                <div className='row p-0 m-0 d-flex justify-content-between align-items-center'>
                                                                                        <div className='col-2 p-0'>
                                                                                                <img src="https://via.placeholder.com/200x100" className="img-fluid rounded-start" alt="..." />
                                                                                        </div>

                                                                                        <div className='col-4 '>

                                                                                                Nhà Lãnh Đạo Không Chức Danh
                                                                                        </div>
                                                                                        <div className='col-2 p-0'>
                                                                                                100
                                                                                        </div>
                                                                                        <div className='col-4 fw-bold flex-nowrap'>

                                                                                                87.200 ₫
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                                <div>
                                                                        <Link
                                                                                className="text-decoration-none d-block"
                                                                                data-bs-toggle="modal" data-bs-target="#myModal"
                                                                                href="#"

                                                                        ><i className="bi bi-tag"></i>  Chọn hoặc nhập mã khác <i className="bi bi-chevron-right"></i></Link>

                                                                </div>
                                                        </div>


                                                </div>
                                        </div>



                                </div>
                                <div className='col-md-4 col-12'>
                                        <div className="card mb-4">
                                                <div className="card-body">
                                                        <div className='d-flex justify-content-between align-items-center'>
                                                                <h4 className='m-0'>Giao tới</h4>
                                                                <Link
                                                                        className="text-decoration-none d-block"

                                                                        href="#"

                                                                >Thay đổi</Link>
                                                        </div>
                                                        <div className='py-2'>
                                                                <p className="card-text m-0">họ tên/ số điện thoại</p>
                                                                <p className="card-text">Số nhà</p>
                                                        </div>
                                                </div>
                                        </div>
                                        <div className="card mb-4">
                                                <div className="card-body">
                                                        <h4 className="card-title">Phương thức thanh toán</h4>

                                                        <div className=" d-flex align-items-center">
                                                                <input className="form-check-input  d-block mt-0 border border-dark" type="radio" name="thanhtoan" id="1" checked />
                                                                <label className="form-check-label d-block ms-2" for="1">

                                                                        Thanh toán khi nhận hàng
                                                                </label>
                                                        </div>


                                                        <div className=" d-flex align-items-center">
                                                                <input className="form-check-input  d-block mt-0 border border-dark" type="radio" name="thanhtoan" id="2" />
                                                                <label className="form-check-label d-block ms-2" for="2">
                                                                        <img className="method-icon" src="https://salt.tikicdn.com/ts/upload/77/6a/df/a35cb9c62b9215dbc6d334a77cda4327.png" width="32" height="32" alt="icon"></img>
                                                                        VNPAY
                                                                </label>
                                                        </div>


                                                </div>
                                        </div>

                                        <div className="card mb-4">
                                                <div className="card-body">
                                                        <div className='d-flex justify-content-between align-items-center'>
                                                                <h4 className='m-0'>Đơn hàng</h4>
                                                                <Link
                                                                        className="text-decoration-none d-block"

                                                                        to={'/user/cart'}

                                                                >Thay đổi</Link>
                                                        </div>
                                                        <hr ></hr>
                                                        <div className='d-flex justify-content-between align-items-center'>
                                                                <p className="card-text m-0">Tổng tiền hàng</p>
                                                                <p className="card-text">1000</p>
                                                        </div>
                                                        <div className='d-flex justify-content-between align-items-center'>
                                                                <p className="card-text m-0">Phí vận chuyển</p>
                                                                <p className="card-text">1000</p>
                                                        </div>
                                                        <hr ></hr>
                                                        <div className='d-flex justify-content-between align-items-center mb-3'>
                                                                <p className="card-text m-0 fs-4 fw-bold">Tổng tiền</p>
                                                                <p className="card-text">1000</p>
                                                        </div>
                                                        <button
                                                                type="button"
                                                                className="btn btn-danger w-100"
                                                        >
                                                                Thanh toán
                                                        </button>

                                                </div>
                                        </div>
                                        <div className="modal" id="myModal">
                                                <div className="modal-dialog modal-dialog-scrollable">
                                                        <div className="modal-content">


                                                                <div className="modal-header d-flex justify-content-between align-items-center">
                                                                        <h4 className="modal-title">Shopvoucher</h4>
                                                                        <button type="button" className="btn" data-bs-dismiss="modal"><i className="bi bi-arrow-return-left fs-4"></i></button>
                                                                </div>


                                                                <div className="modal-body">
                                                                        <div className="card mb-2">
                                                                                <div className="card-body p-1">
                                                                                        <div className='row align-items-center p-0 m-0'>
                                                                                                <div className='col-4 p-0'>
                                                                                                        <img src="https://via.placeholder.com/200x100" className="img-fluid rounded-start" alt="..." />
                                                                                                </div>
                                                                                                <div className='col-6'>
                                                                                                        voucher
                                                                                                </div>
                                                                                                <div className='col-2 d-flex justify-content-lg-evenly'>
                                                                                                        <input className="form-check-input border border-dark" type="checkbox" value="" id="" />
                                                                                                </div>
                                                                                        </div>
                                                                                </div>

                                                                        </div>
                                                                        <div className="card mb-2">
                                                                                <div className="card-body p-1">
                                                                                        <div className='row align-items-center p-0 m-0'>
                                                                                                <div className='col-4 p-0'>
                                                                                                        <img src="https://via.placeholder.com/200x100" className="img-fluid rounded-start" alt="..." />
                                                                                                </div>
                                                                                                <div className='col-6'>
                                                                                                        voucher
                                                                                                </div>
                                                                                                <div className='col-2 d-flex justify-content-lg-evenly'>
                                                                                                        <input className="form-check-input border border-dark" type="checkbox" value="" id="" />
                                                                                                </div>
                                                                                        </div>
                                                                                </div>

                                                                        </div>
                                                                        <div className="card mb-2">
                                                                                <div className="card-body p-1">
                                                                                        <div className='row align-items-center p-0 m-0'>
                                                                                                <div className='col-4 p-0'>
                                                                                                        <img src="https://via.placeholder.com/200x100" className="img-fluid rounded-start" alt="..." />
                                                                                                </div>
                                                                                                <div className='col-6'>
                                                                                                        voucher
                                                                                                </div>
                                                                                                <div className='col-2 d-flex justify-content-lg-evenly'>
                                                                                                        <input className="form-check-input border border-dark" type="checkbox" value="" id="" />
                                                                                                </div>
                                                                                        </div>
                                                                                </div>

                                                                        </div>
                                                                        <div className="card mb-2">
                                                                                <div className="card-body p-1">
                                                                                        <div className='row align-items-center p-0 m-0'>
                                                                                                <div className='col-4 p-0'>
                                                                                                        <img src="https://via.placeholder.com/200x100" className="img-fluid rounded-start" alt="..." />
                                                                                                </div>
                                                                                                <div className='col-6'>
                                                                                                        voucher
                                                                                                </div>
                                                                                                <div className='col-2 d-flex justify-content-lg-evenly'>
                                                                                                        <input className="form-check-input border border-dark" type="checkbox" value="" id="" />
                                                                                                </div>
                                                                                        </div>
                                                                                </div>

                                                                        </div>
                                                                        <div className="card mb-2">
                                                                                <div className="card-body p-1">
                                                                                        <div className='row align-items-center p-0 m-0'>
                                                                                                <div className='col-4 p-0'>
                                                                                                        <img src="https://via.placeholder.com/200x100" className="img-fluid rounded-start" alt="..." />
                                                                                                </div>
                                                                                                <div className='col-6'>
                                                                                                        voucher
                                                                                                </div>
                                                                                                <div className='col-2 d-flex justify-content-lg-evenly'>
                                                                                                        <input className="form-check-input border border-dark" type="checkbox" value="" id="" />
                                                                                                </div>
                                                                                        </div>
                                                                                </div>

                                                                        </div>
                                                                        <div className="card mb-2">
                                                                                <div className="card-body p-1">
                                                                                        <div className='row align-items-center p-0 m-0'>
                                                                                                <div className='col-4 p-0'>
                                                                                                        <img src="https://via.placeholder.com/200x100" className="img-fluid rounded-start" alt="..." />
                                                                                                </div>
                                                                                                <div className='col-6'>
                                                                                                        voucher
                                                                                                </div>
                                                                                                <div className='col-2 d-flex justify-content-lg-evenly'>
                                                                                                        <input className="form-check-input border border-dark" type="checkbox" value="" id="" />
                                                                                                </div>
                                                                                        </div>
                                                                                </div>

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
