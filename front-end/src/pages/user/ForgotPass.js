import React from 'react'
export default function ForgotPass() {
        return (
                <div className='d-flex justify-content-center align-items-center'>
                        <div className='card my-3' style={{ width: '50rem' }}>
                                <div className='card-body'>
                                        <div className='row'>
                                                <div className='col-lg-6'>
                                                        <div className='card-title text-center fs-3 fw-bold'>Quên mật khẩu ?</div>
                                                        <div>
                                                                Vui lòng nhập email để khổi phục mật khẩu
                                                        </div>
                                                        <div className="mb-3">
                                                                <label for="" className="form-label">Email</label>
                                                                <input
                                                                        type="text"
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
