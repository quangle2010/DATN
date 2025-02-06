import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosInstance from '../../utils/axiosInstance';

export default function AdminProduct() {

        const [items, setItems] = useState([]);
        const [totalItems, setTotalItems] = useState(0);
        const [currentPage, setCurrentPage] = useState(1);

        const fetchData = async (page) => {
                try {
                        const response = await axiosInstance.get(`/admin/product/list?page=${page}`);
                        setItems(response.data.data.objects);
                        setTotalItems(response.data.data.totalItems);
                } catch (error) {
                        console.error("Lỗi load dữ liệu:", error);
                }
        };
        useEffect(() => {
                fetchData(currentPage);
        }, [currentPage]);

        useEffect(() => {
                fetchData(currentPage);
                const params = new URLSearchParams(window.location.search);

                params.set("page", currentPage);
                window.history.replaceState(null, "", "?" + params.toString());
        }, [currentPage]);
        return (
                <>
                        <nav aria-label="breadcrumb" className="py-2">
                                <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item"><Link to={'/admin/dashboard'} className="text-decoration-none">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Quản lý sản phẩm</li>

                                </ol>
                        </nav>
                        <div className="fs-3 mb-2">Quản lý sản phẩm</div>
                        <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                        <div className='me-3'>
                                                <input
                                                        type="text"
                                                        className="form-control"
                                                        name=""
                                                        id=""
                                                        aria-describedby="helpId"
                                                        placeholder=""
                                                />
                                        </div>
                                </div>
                                <div className="card-body ">
                                        <div className="table-responsive">
                                                <table className="table align-middle">
                                                        <thead>
                                                                <tr>
                                                                        <th scope="col" >Tên sản phẩm</th>
                                                                        <th scope="col" >Tên cửa hàng </th>
                                                                        <th scope="col" >Số lượng</th>
                                                                        <th scope="col" >Giá sản phẩm</th>
                                                                        <th scope="col" >Tỷ lệ</th>
                                                                        <th scope="col" >Trạng thái</th>
                                                                        <th style={{ width: "10%" }}></th>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                                {
                                                                        items.map((item, index) => {
                                                                                return (
                                                                                        <tr key={index}>
                                                                                                <td>{item?.name}</td>
                                                                                                <td>Cần thơ</td>
                                                                                                <td>quangle</td>
                                                                                                <td>Cần thơ</td>
                                                                                                <td>quangle</td>
                                                                                                <td>Cần thơ</td>
                                                                                                <td>
                                                                                                        <Link
                                                                                                                to={`/admin/confirm-product?id=${item.id}`}

                                                                                                                className='text-decoration-none'
                                                                                                        >
                                                                                                                Chitiet
                                                                                                        </Link>


                                                                                                </td>
                                                                                        </tr>
                                                                                )
                                                                        })
                                                                }

                                                        </tbody>
                                                </table>
                                        </div>
                                </div>

                        </div>
                </>
        )
}
