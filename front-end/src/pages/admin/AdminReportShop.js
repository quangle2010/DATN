import { Select } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminReportShop() {
        return (
                <>
                        <nav aria-label="breadcrumb" className="py-2">
                                <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item"><Link to={'/admin/dashboard'} className="text-decoration-none">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Báo cáo</li>
                                        <li className="breadcrumb-item active" aria-current="page">Báo cáo cửa hàng</li>
                                </ol>
                        </nav>
                        <div className="fs-3 mb-2">Báo cáo cửa hàng</div>
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
                                                <div className="col-auto">
                                                        <button
                                                                type="button"
                                                                className="btn btn-outline-success d-flex align-items-center"
                                                        >
                                                                <i class='bx bxs-file-pdf'></i>
                                                        </button>
                                                </div>
                                                <div className="col-auto">
                                                        <button
                                                                type="button"
                                                                className="btn btn-outline-success d-flex align-items-center"
                                                        >
                                                                <i class='bx bxs-file-export'></i>
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
                                                                        <th scope="col">Trạng thái</th>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                                <tr>
                                                                        <td>Shop ABC</td>
                                                                        <td>10,000,000 VND</td>
                                                                        <td>1,000,000 VND</td>
                                                                        <td>9,000,000 VND</td>
                                                                        <td>50</td>
                                                                        <td><span class="badge bg-success">Đang bán</span></td>
                                                                </tr>

                                                        </tbody>
                                                </table>
                                        </div>
                                </div>

                        </div>
                </>
        )
}
