import React from 'react'
import { closeModal, openModal } from '../../utils/Open_Close_Modal';
import { useAuth } from '../../utils/AuthProvider';
import { Link } from 'react-router-dom';
import { showSuccessToast } from '../../utils/Toast';

export default function AdminNavbar({ isToggleSidebar, toggleSidebar }) {
        const { userInfo, logout } = useAuth();
        const handleLogout = () => {
                logout();
                closeModal("logoutModal");
                showSuccessToast("Đăng xuất thành công");
        };
        return (

                <>
                        <nav class="navbar fixed-top  navbar-expand-lg navbar-light bg-light">
                                <div class="container-fluid">
                                        <div>

                                                {
                                                        isToggleSidebar ? (
                                                                <i className='bi bi-text-indent-left fs-4 bold_icon ms-1' onClick={toggleSidebar}></i>
                                                        ) : (
                                                                <i className='bi bi-text-indent-right fs-4 bold_icon ms-1' onClick={toggleSidebar}></i>
                                                        )
                                                }
                                        </div>
                                        <Link className='text-black navbar-toggler' data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span class='bx bx-dots-vertical' ></span>
                                        </Link>


                                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                                                        <li class="nav-item dropdown">
                                                                <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                        {userInfo?.email}
                                                                </Link>
                                                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                                                        <li><Link class="dropdown-item" href="#">Thông tin</Link></li>


                                                                        <li><Link class="dropdown-item" onClick={() => { openModal("logoutModal") }}>Đăng xuất</Link></li>
                                                                </ul>
                                                        </li>

                                                </ul>
                                        </div>
                                </div>
                        </nav>

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
