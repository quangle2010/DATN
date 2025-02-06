import React from 'react';

export default function RegisterSellerStep1() {
        return (
                <div className='mt-2'>
                        <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Họ tên</label>
                                <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        id="fullName"
                                />
                        </div>
                        <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                        type="email"
                                        className="form-control form-control-sm"
                                        id="email"

                                />
                        </div>
                        <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Số điện thoại</label>
                                <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        id="phone"

                                />
                        </div>
                        <div className="mb-3">
                                <label htmlFor="pass" className="form-label">Mật khẩu</label>
                                <input
                                        type="password"
                                        className="form-control form-control-sm"
                                        id="pass"

                                />
                        </div>
                        <div className="mb-3">
                                <label htmlFor="cfpass" className="form-label">Xác nhận mật khẩu</label>
                                <input
                                        type="password"
                                        className="form-control form-control-sm"
                                        id="cfpass"

                                />
                        </div>
                </div>
        );
}
