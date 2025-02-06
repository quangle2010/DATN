
import React from 'react'

export default function Register() {

        return (

                <>
                        <>

                                <div className="d-flex justify-content-center align-items-center">
                                        <div className="card_layout card my-3" style={{ width: '30rem' }}>
                                                <div className="card-body">
                                                        <div className="card-title text-center fs-3 fw-bold">Đăng ký </div>
                                                        <div className="mb-3">
                                                                <label htmlFor="email" className="form-label">Họ và tên</label>
                                                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                                        </div>
                                                        <div className="mb-3">
                                                                <label htmlFor="email" className="form-label">Email</label>
                                                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                                                        </div>
                                                        <div className="mb-3">
                                                                <label htmlFor="phone" className="form-label">Số điện thoại</label>
                                                                <input type="text" className="form-control" id="phone" placeholder="Nhập số điện thoại" />
                                                        </div>
                                                        <div className="mb-3">
                                                                <label htmlFor="password" className="form-label">Mật khẩu</label>
                                                                <input type="password" className="form-control" id="password" placeholder="Nhập mật khẩu" />
                                                        </div>
                                                        <div className="mb-3">
                                                                <label htmlFor="confirmPassword" className="form-label">Xác nhận mật khẩu</label>
                                                                <input type="password" className="form-control" id="confirmPassword" placeholder="Nhập mật khẩu xác nhận" />
                                                        </div>

                                                        <div>
                                                                <button type="submit" className="btn btn-primary w-100 mb-4">Đăng ký</button>
                                                        </div>
                                                        <div className="text-muted text-center mb-3">Hoặc đăng nhập với</div>
                                                        <div className="mb-4">
                                                                <button type="button" className="btn w-50">
                                                                        <i className='bx bxl-google fs-1' style={{ color: "#ff3900" }} ></i>
                                                                </button>
                                                                <button type="button" className="btn w-50">
                                                                        <i className='bx bxl-facebook-circle fs-1' style={{ color: "#484cdc" }}></i>
                                                                </button>
                                                        </div>
                                                </div>
                                        </div>
                                </div>
                        </>
                </>

        )
}
