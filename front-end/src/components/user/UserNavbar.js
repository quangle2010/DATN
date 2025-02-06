import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../utils/AuthProvider'
import { closeModal, openModal } from '../../utils/Open_Close_Modal';
import { showSuccessToast } from '../../utils/Toast';

export default function UserNavbar() {

        const { isAuthenticated, userInfo, logout } = useAuth();
        const handleLogout = () => {
                logout();
                closeModal("logoutModal");
                showSuccessToast("Đăng xuất thành công");
        };
        return (
                <>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                                <div className='container'>
                                        <Link className="navbar-brand d-block" to={'/home'}>Logo</Link>
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse " id=" navbarNavDropdown">

                                                <form className="d-flex w-50">
                                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                                </form>
                                                <ul className="navbar-nav ms-auto">
                                                        <li className="nav-item dropdown">
                                                                <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        {isAuthenticated && userInfo.role !== 3 ? userInfo.email : 'user'}
                                                                </Link>
                                                                <ul
                                                                        className="dropdown-menu"
                                                                        style={{ left: isAuthenticated && userInfo.role !== 3 ? "28px" : "-110px" }}
                                                                        aria-labelledby="navbarDropdownMenuLink"
                                                                >
                                                                        {
                                                                                isAuthenticated && userInfo.role !== 3 ? (
                                                                                        <>
                                                                                                <li><Link className="dropdown-item" to={'/user/profile'}>Thông tin tài khoản</Link></li>
                                                                                                <li><Link className="dropdown-item" to={'/user/ordered'}>Đơn hàng</Link></li>
                                                                                                <li><Link className="dropdown-item" to={'/user/favourite'}>Yêu thích</Link></li>
                                                                                                <li><Link className="dropdown-item" onClick={() => { openModal("logoutModal") }}>Đăng xuất</Link></li></>
                                                                                ) : (<>
                                                                                        <li><Link className="dropdown-item" to="/login">Đăng nhập</Link></li>
                                                                                        <li><Link className="dropdown-item" to="/register">Đăng ký</Link></li>
                                                                                </>)
                                                                        }



                                                                </ul>
                                                        </li>
                                                        <li className="nav-item">
                                                                <Link className="nav-link" to={'/user/cart'}>
                                                                        <i className="bi bi-cart position-relative">
                                                                                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger small-badge ">3</span>
                                                                        </i></Link>
                                                        </li>
                                                </ul>
                                        </div>
                                </div >
                        </nav >
                        <div class="modal fade" id="logoutModal" >
                                <div class="modal-dialog">
                                        <div class="modal-content">
                                                <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">Xác nhận</h5>
                                                        <button type="button" class="btn-close" onClick={() => { closeModal("logoutModal") }}></button>
                                                </div>
                                                <div class="modal-body">
                                                        Bạn chắc chắn muốn đăng xuất?
                                                </div>
                                                <div class="modal-footer">

                                                        <button type="button" class="btn btn-primary" onClick={handleLogout}>Đăng xuất</button>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        )
}