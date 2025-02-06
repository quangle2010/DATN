import { Select } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminShopRevenue() {
        return (
                <>
                        <nav aria-label="breadcrumb" className="py-2">
                                <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item"><Link to={'/admin/dashboard'} className="text-decoration-none">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Thống kê</li>
                                        <li className="breadcrumb-item active" aria-current="page">Doanh thu cửa hàng</li>
                                </ol>
                        </nav>
                        <div className="fs-3 mb-2">Doanh thu cửa hàng</div>
                        <div className="card">
                                <div className="card-header ">
                                        <div className="row  align-items-center">
                                                <div className="col-auto">
                                                        <label htmlFor="startDate" className="col-form-label">Ngày bắt đầu:</label>
                                                </div>
                                                <div className="col-auto">
                                                        <input type="date" id="startDate" className="form-control form-control-sm" />
                                                </div>
                                                <div className="col-auto">
                                                        <label for="endDate" className="col-form-label">Ngày kết thúc:</label>
                                                </div>
                                                <div className="col-auto">
                                                        <input type="date" id="endDate" className="form-control form-control-sm" />
                                                </div>
                                                <div className='col-auto'>
                                                        <Select
                                                                showSearch
                                                                style={{ width: 200 }}
                                                                placeholder="Tên shop"
                                                                options={[
                                                                        {
                                                                                value: '1',
                                                                                label: 'Jack',
                                                                        },
                                                                        {
                                                                                value: '2',
                                                                                label: 'Lucy',
                                                                        },
                                                                        {
                                                                                value: '3',
                                                                                label: 'Tom',
                                                                        },
                                                                ]}
                                                        />
                                                </div>
                                                <div className="col-auto">
                                                        <button
                                                                type="button"
                                                                className="btn btn-outline-success d-flex align-items-center"
                                                        >
                                                                <i className='bx bx-search-alt-2'></i>
                                                        </button>
                                                </div>

                                        </div>
                                </div>
                                <div className="card-body ">
                                        <div className="table-responsive">
                                                <table className="table align-middle">
                                                        <thead>
                                                                <tr>
                                                                        <th scope="col">Tên Shop</th>
                                                                        <th scope="col">Doanh thu (Trước chiết khấu)</th>
                                                                        <th scope="col">Chiết khấu</th>
                                                                        <th scope="col">Doanh thu thực tế</th>
                                                                        <th scope="col">Số đơn hàng</th>

                                                                        <th scope="col"></th>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                                <tr>
                                                                        <td>Shop ABC</td>
                                                                        <td>10,000,000 VND</td>
                                                                        <td>1,000,000 VND</td>
                                                                        <td>9,000,000 VND</td>
                                                                        <td>50</td>

                                                                        <td>
                                                                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                                                                        Chi tiết
                                                                                </button>

                                                                        </td>
                                                                </tr>

                                                        </tbody>
                                                </table>
                                        </div>
                                </div>

                        </div>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                        <div class="modal-content">
                                                <div class="modal-header">
                                                        <h5 class="modal-title" id="exampleModalLabel">Top 5 sản phẩm bán chạy NameShop</h5>
                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div class="modal-body">
                                                        <table class="table table-hover">
                                                                <thead>
                                                                        <tr>
                                                                                <th scope="col">Tên Sản phẩm</th>
                                                                                <th scope="col">Doanh thu</th>
                                                                                <th scope="col">Số lượng bán</th>
                                                                                <th scope="col">Trạng thái</th>
                                                                        </tr>
                                                                </thead>
                                                                <tbody>
                                                                        <tr>
                                                                                <td>Sách A</td>
                                                                                <td>5,000,000 VND</td>
                                                                                <td>200</td>
                                                                                <td><span class="badge bg-success">Còn hàng</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                                <td>Sách B</td>
                                                                                <td>3,000,000 VND</td>
                                                                                <td>120</td>
                                                                                <td><span class="badge bg-warning">Sắp hết hàng</span></td>
                                                                        </tr>
                                                                        <tr>
                                                                                <td>Sách C</td>
                                                                                <td>7,000,000 VND</td>
                                                                                <td>300</td>
                                                                                <td><span class="badge bg-danger">Hết hàng</span></td>
                                                                        </tr>
                                                                </tbody>
                                                        </table>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </>
        )
}
