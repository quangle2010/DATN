import React from 'react';
// import '../css/login.css';
import { Link } from 'react-router-dom';
import { showErrorToast, showSuccessToast } from '../../utils/Toast';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../utils/AuthProvider';

export default function Login() {
        const { register, handleSubmit, formState: { errors } } = useForm();

        const { login } = useAuth();
        console.log("login");
        const handleLogin = async (data) => {
                try {
                        const response = await axios.post("http://localhost:8080/login", {
                                email: data.email,
                                password: data.password
                        });

                        if (response.data.status === true) {
                                login(response.data.data);
                                showSuccessToast(response.data.message);

                        } else {
                                showErrorToast(response.data.message || "Đăng nhập thất bại");
                        }
                } catch (error) {
                        const errorMessage = error.response?.data?.message;
                        showErrorToast(errorMessage);
                }
        };

        return (
                <div className="d-flex justify-content-center align-items-center">
                        <div className="card my-3" style={{ width: '25rem' }}>
                                <div className="card-body">
                                        <div className="fs-1 fw-bold mb-3 text-center">The Bugs</div>
                                        <div className="card-title text-center fs-3 fw-bold">Đăng nhập</div>
                                        <div className="mb-3">
                                                <label htmlFor="email" className="form-label">Email</label>
                                                <input
                                                        type="email"
                                                        className="form-control"
                                                        id="email"
                                                        placeholder=""
                                                        {...register("email", { required: "Email không được để trống" })}
                                                />
                                                {errors.email && (
                                                        <small className="form-text text-danger fw-medium">{errors.email.message}</small>
                                                )}
                                        </div>
                                        <div className="mb-3">
                                                <label htmlFor="password" className="form-label">Password</label>
                                                <input
                                                        type="password"
                                                        className="form-control"
                                                        id="password"
                                                        placeholder=""
                                                        {...register("password", { required: "Password không được để trống" })}
                                                />
                                                {errors.password && (
                                                        <small className="form-text text-danger fw-medium">{errors.password.message}</small>
                                                )}
                                        </div>
                                        <div className="d-flex justify-content-between mb-3 align-items-center">
                                                <Link to={'/forgot-password'} className="text-primary text-decoration-none">Quên mật khẩu?</Link>
                                                <Link to="/register" className="text-primary text-decoration-none">Đăng ký</Link> {/* Chuyển hướng đến trang đăng ký */}
                                        </div>
                                        <div>
                                                <button
                                                        type="button"
                                                        className="btn btn-primary w-100 mb-4"
                                                        onClick={handleSubmit(handleLogin)}
                                                >
                                                        Đăng nhập
                                                </button>
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
        );
}
