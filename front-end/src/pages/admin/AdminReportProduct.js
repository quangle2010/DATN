import { Select } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export default function AdminReportProduct() {
        return (
                <>
                        <nav aria-label="breadcrumb" className="py-2">
                                <ol className="breadcrumb mb-0">
                                        <li className="breadcrumb-item"><Link to={'/admin/dashboard'} className="text-decoration-none">Dashboard</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Báo cáo</li>
                                        <li className="breadcrumb-item active" aria-current="page">Báo cáo sản phẩm</li>
                                </ol>
                        </nav>
                        <div className="fs-3 mb-2">Báo cáo sản phẩm</div>
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
                                                                        <th scope="col">Ngày bán</th>
                                                                        <th scope="col">Tên Sản phẩm</th>
                                                                        <th scope="col">Số Lượng Bán</th>
                                                                        <th scope="col">Doanh thu</th>
                                                                        <th scope="col">Shop bán</th>
                                                                        <th scope="col">Trạng thái</th>
                                                                </tr>
                                                        </thead>
                                                        <tbody>
                                                                <tr>
                                                                        <td>01/01/2024</td>
                                                                        <td>The Catcher in the Rye</td>
                                                                        <td>500</td>
                                                                        <td>5,000,000 VND</td>
                                                                        <td>Shop ABC</td>
                                                                        <td><span className="badge bg-success">Đang bán</span></td>
                                                                </tr>

                                                        </tbody>
                                                </table>
                                        </div>
                                </div>

                        </div>
                </>
        )
}
