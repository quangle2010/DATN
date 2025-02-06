import React from 'react'
export default function ResetPass() {
        return (
                <div className='d-flex justify-content-center align-items-center'>
                        <div className='card my-3 w-75' >
                                <div className='card-body'>
                                        <div className='row'>
                                                <div className='col-lg-6'>
                                                        <div className='card-title text-center fs-3 fw-bold'>Đặt lại mật khẩu mới</div>
                                                        <small className='fs-6 my-2'>
                                                                Mật khẩu dài từ 8-20 ký tự, bao gồm chữ cái và số
                                                        </small>
                                                        <div className="mb-3">
                                                                <label for="" className="form-label">Mật khẩu mới</label>
                                                                <input
                                                                        type="password"
                                                                        className="form-control"
                                                                        name=""
                                                                        id=""
                                                                        aria-describedby="helpId"
                                                                        placeholder=""
                                                                />

                                                        </div>
                                                        <div className="mb-3">
                                                                <label for="" className="form-label">Xác nhận mật khẩu mới</label>
                                                                <input
                                                                        type="password"
                                                                        className="form-control"
                                                                        name=""
                                                                        id=""
                                                                        aria-describedby="helpId"
                                                                        placeholder=""
                                                                />

                                                        </div>
                                                        <button
                                                                type="button"
                                                                className="btn btn-primary w-100"
                                                        >
                                                                Gửi
                                                        </button>

                                                </div>
                                                <div className='col-lg-6'>

                                                </div>
                                        </div>
                                </div>
                        </div>

                </div>
        )
}
