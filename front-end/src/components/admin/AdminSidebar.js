import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AdminSidebar({ isSidebarHidden }) {
        const [openMenus, setOpenMenus] = useState({});
        const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1000);
        useEffect(() => {
                const handleResize = () => {
                        setIsLargeScreen(window.innerWidth > 1000);
                };
                window.addEventListener("resize", handleResize);
                return () => window.removeEventListener("resize", handleResize);
        }, []);

        useEffect(() => {
                if (isSidebarHidden) {
                        setOpenMenus({});
                }
        }, [isSidebarHidden]);

        const toggleMenu = (menuId) => {
                if (isSidebarHidden && isLargeScreen) {
                        return;
                }

                setOpenMenus((prevState) => ({
                        ...prevState,
                        [menuId]: !prevState[menuId],
                }));
        };

        return (
                <section id="sidebar" className={isSidebarHidden ? "hide" : ""}>
                        <Link to={'#'} className="brand text-decoration-none">
                                <i className="bx bxs-smile"></i>
                                <span className="text">AdminHub</span>
                        </Link>
                        <ul className="side_menu">
                                <li>
                                        <Link
                                                className="text-decoration-none"
                                                to={'/admin/dashboard'}

                                        >
                                                <i className="bx bxs-grid-alt"></i>
                                                <span className="text">Dashboard</span>
                                        </Link>
                                </li>
                                <li>
                                        <Link className="text-decoration-none" to={'/admin/genre?keyword=&page=1'}>
                                                <i className="bx bxs-category-alt"></i>
                                                <span className="text">Quản lý thể loại</span>
                                        </Link>
                                </li>
                                <li>
                                        <Link className="text-decoration-none" to={'/admin/author'}>
                                                <i className="bx bxs-user"></i>
                                                <span className="text">Quản lý tác giả</span>
                                        </Link>
                                </li>
                                <li>
                                        <Link className="text-decoration-none" to={'/admin/publisher'}>
                                                <i className="bx bxs-book"></i>
                                                <span className="text">Quản lý nhà xuất bản</span>
                                        </Link>
                                </li>
                                <li>
                                        <Link className="text-decoration-none" to={'/admin/product?page=1'}>
                                                <i className="bx bxs-package"></i>
                                                <span className="text">Quản lý sản phẩm</span>
                                        </Link>
                                </li>
                                <li>
                                        <Link
                                                href="#"
                                                className="text-decoration-none d-flex justify-content-between align-items-center"
                                                aria-expanded={openMenus['shops'] ? 'true' : 'false'}
                                                onClick={() => toggleMenu('shops')}
                                        >
                                                <div className="d-flex justify-content-center align-items-center">
                                                        <i className="bx bxs-store-alt"></i>
                                                        <div className="text">Quản lý cửa hàng</div>
                                                </div>

                                                <i
                                                        className={`bx ${openMenus['shops'] ? 'bx-chevron-up' : 'bx-chevron-down'} fs-4`}
                                                ></i>
                                        </Link>
                                        <ul
                                                className={`sidebar-dropdown list-unstyled ps-2 collapse ${(!isSidebarHidden && !isLargeScreen) || openMenus['shops'] ? 'show' : ''}`}
                                                id="shops"
                                                data-bs-parent="#sidebar"
                                        >
                                                <li>
                                                        <Link className="text-decoration-none" to={'/admin/allow-store'}>
                                                                <i className="bx bx-check-circle"></i>
                                                                <span className="text">Duyệt cửa hàng</span>
                                                        </Link>
                                                </li>
                                                <li>
                                                        <Link className="text-decoration-none" to={'/admin/forbid-store'}>
                                                                <i className="bx bx-block"></i>
                                                                <span className="text">Ban cửa hàng</span>
                                                        </Link>
                                                </li>
                                        </ul>
                                </li>
                                <li>
                                        <Link
                                                href="#"
                                                className="text-decoration-none d-flex justify-content-between align-items-center"
                                                aria-expanded={openMenus['statistical'] ? 'true' : 'false'}
                                                onClick={() => toggleMenu('statistical')}
                                        >
                                                <div className="d-flex justify-content-center align-items-center">
                                                        <i className='bx bxs-bar-chart-alt-2'></i>
                                                        <div className="text">Thống kê</div>
                                                </div>

                                                <i
                                                        className={`bx ${openMenus['statistical'] ? 'bx-chevron-up' : 'bx-chevron-down'} fs-4`}
                                                ></i>
                                        </Link>
                                        <ul
                                                className={`sidebar-dropdown list-unstyled ps-2 collapse ${(!isSidebarHidden && !isLargeScreen) || openMenus['statistical'] ? 'show' : ''}`}
                                                id="statistical"
                                                data-bs-parent="#sidebar">
                                                <li>
                                                        <Link className="text-decoration-none" to={'/admin/shop-revenue'}>
                                                                <i className="bx bx-wallet"></i>
                                                                <span className="text">Doanh thu cửa hàng</span>
                                                        </Link>
                                                </li>
                                                <li>
                                                        <Link className="text-decoration-none" to={'/admin/shop-monthly-revenue'}>
                                                                <i className="bx bx-calendar-check"></i>
                                                                <span className="text">Doanh thu theo tháng</span>
                                                        </Link>
                                                </li>
                                        </ul>
                                </li>
                                <li>
                                        <Link
                                                href="#"
                                                className="text-decoration-none d-flex justify-content-between align-items-center"
                                                aria-expanded={openMenus['report'] ? 'true' : 'false'}
                                                onClick={() => toggleMenu('report')}
                                        >
                                                <div className="d-flex justify-content-center align-items-center">
                                                        <i className="bx bxs-report"></i>
                                                        <div className="text">Báo cáo</div>
                                                </div>

                                                <i
                                                        className={`bx ${openMenus['report'] ? 'bx-chevron-up' : 'bx-chevron-down'} fs-4`}
                                                ></i>
                                        </Link>
                                        <ul
                                                className={`sidebar-dropdown list-unstyled ps-2 collapse ${(!isSidebarHidden && !isLargeScreen) || openMenus['report'] ? 'show' : ''}`}
                                                id="report"
                                                data-bs-parent="#sidebar">
                                                <li>
                                                        <Link className="text-decoration-none" to={'/admin/report-shop'}>
                                                                <i class='bx bx-store-alt'></i>
                                                                <span className="text">Báo cáo cửa hàng</span>
                                                        </Link>
                                                </li>
                                                <li>
                                                        <Link className="text-decoration-none" to={'/admin/report-product'}>
                                                                <i className="bx bx-package"></i>
                                                                <span className="text">Báo cáo sản phẩm</span>
                                                        </Link>
                                                </li>
                                        </ul>
                                </li>
                                <li>
                                        <Link className="text-decoration-none" to={'/admin/profile'}>
                                                <i className="bx bxs-user-circle"></i>
                                                <span className="text">Thông tin</span>
                                        </Link>
                                </li>
                        </ul>
                </section>
        );
}
