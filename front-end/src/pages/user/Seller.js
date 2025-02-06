import React from 'react'
import { Link } from 'react-router-dom'

export default function Seller() {
        return (
                <div className="container my-4">
                        <div className="card p-3 ">
                                <div className="row g-0 align-items-center">
                                        <div className="col-md-2 text-center">
                                                <a to="#">
                                                        <img
                                                                src="https://salt.tikicdn.com/cache/w220/ts/seller/d1/3f/ae/13ce3d83ab6b6c5e77e6377ad61dc4a5.jpg"
                                                                alt="Shop Logo"
                                                                className="img-fluid rounded-pill"
                                                                style={{ width: "100px" }}
                                                        />
                                                </a>
                                        </div>
                                        <div className="col-md-8">
                                                <h4 className="mb-1 text-primary">Tiki Trading</h4>
                                                <p className="mb-1">
                                                        <i className="bx bxs-star" style={{ color: "#e4d53f" }}></i>
                                                        <strong>4.7 / 5</strong>
                                                </p>

                                        </div>
                                        <div className="col-md-2 text-end">
                                                <form>
                                                        <input
                                                                className="form-control"
                                                                type="search"
                                                                placeholder="Search"
                                                                aria-label="Search"
                                                        />
                                                </form>
                                        </div>
                                </div>
                        </div>

                        <ul className="nav nav-tabs mt-4">
                                <li className="nav-item">
                                        <Link className="nav-link active" data-bs-toggle="tab" to="#home"
                                        >Cửa Hàng</Link>
                                </li>
                                <li className="nav-item">
                                        <Link className="nav-link" data-bs-toggle="tab" to="#all-products"
                                        >Tất Cả Sản Phẩm</Link>
                                </li>
                                <li className="nav-item">
                                        <Link className="nav-link" data-bs-toggle="tab" to="#store-profile"
                                        >Hồ Sơ Cửa Hàng</Link>
                                </li>
                        </ul>

                        <div className="tab-content mt-4">
                                <div className="tab-pane container active" id="home">
                                        <div
                                                id="carouselExampleSlidesOnly"
                                                className="carousel slide mb-4"
                                                data-bs-ride="carousel"
                                        >
                                                <div className="carousel-inner">
                                                        <div className="carousel-item active">
                                                                <img
                                                                        src="https://salt.tikicdn.com/cache/w1240/ts/tmp/d7/0c/50/ec007e52055b90a6cf32f3ff360ae598.jpg"
                                                                        className="d-block w-100"
                                                                        alt="Banner"
                                                                />
                                                        </div>
                                                </div>
                                        </div>

                                        <div className="row row-cols-1 row-cols-md-3 g-4">
                                                <div className="col">
                                                        <div className="card">
                                                                <img src="https://salt.tikicdn.com/cache/w350/ts/tmp/fe/4b/2d/bb1682fec54603a2b7b4e18af1208d0d.jpg.webp" className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                        <h5 className="card-title">Top 100 bán chạy</h5>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="col">
                                                        <div className="card">
                                                                <img src="https://salt.tikicdn.com/cache/w350/ts/tmp/db/56/9f/39940f9095b3e4665c5a47bf8eaf4cdb.jpg.webp" className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                        <h5 className="card-title">Top 100 cuốn sách chọn lọc</h5>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="col">
                                                        <div className="card">
                                                                <img src="https://salt.tikicdn.com/cache/w350/ts/tmp/40/3b/c8/571e1e895f5b6fe972e2e75c7d00d002.jpg.webp" className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                        <h5 className="card-title">Sản phẩm bán chạy</h5>
                                                                </div>
                                                        </div>
                                                </div>

                                        </div>

                                        <div className="text-center mt-4">
                                                <button type="button" className="btn btn-outline-dark">
                                                        Xem tất cả <i className="bx bx-chevron-right"></i>
                                                </button>
                                        </div>

                                        <div
                                                id="carouselExampleControls"
                                                className="carousel slide mt-3"
                                                data-bs-ride="carousel"
                                        >
                                                <div className="carousel-inner">
                                                        <div className="carousel-item active">
                                                                <img
                                                                        src="https://salt.tikicdn.com/cache/w700/ts/tmp/4a/85/46/64ad2f24325b10696e1e2405207a913d.jpg.webp"
                                                                        className="d-block w-100"
                                                                        alt="..."
                                                                />
                                                        </div>
                                                        <div className="carousel-item">
                                                                <img
                                                                        src="https://salt.tikicdn.com/cache/w700/ts/tmp/57/33/f0/26cbe26c3fdae56bc8b21b581f0960fb.jpg.webp"
                                                                        className="d-block w-100"
                                                                        alt="..."
                                                                />
                                                        </div>
                                                </div>
                                                <button
                                                        className="carousel-control-prev"
                                                        type="button"
                                                        data-bs-target="#carouselExampleControls"
                                                        data-bs-slide="prev"
                                                >
                                                        <span
                                                                className="carousel-control-prev-icon"
                                                                aria-hidden="true"
                                                        ></span>
                                                        <span className="visually-hidden">Previous</span>
                                                </button>
                                                <button
                                                        className="carousel-control-next"
                                                        type="button"
                                                        data-bs-target="#carouselExampleControls"
                                                        data-bs-slide="next"
                                                >
                                                        <span
                                                                className="carousel-control-next-icon"
                                                                aria-hidden="true"
                                                        ></span>
                                                        <span className="visually-hidden">Next</span>
                                                </button>
                                        </div>


                                        <ul className="nav nav-pills mt-3">
                                                <li className="nav-item">
                                                        <Link className="nav-link active" data-bs-toggle="pill" to=""
                                                        >Phổ biến</Link>
                                                </li>
                                                <li className="nav-item">
                                                        <Link className="nav-link" data-bs-toggle="pill" to="">Bán chạy</Link>
                                                </li>
                                                <li className="nav-item">
                                                        <Link className="nav-link" data-bs-toggle="pill" to="">Hàng mới</Link>
                                                </li>
                                                <li className="nav-item">
                                                        <Link className="nav-link" data-bs-toggle="pill" to="">Giá thấp đến cao</Link>
                                                </li>
                                                <li className="nav-item">
                                                        <Link className="nav-link" data-bs-toggle="pill" to="">Giá cao đến thấp</Link>
                                                </li>
                                        </ul>


                                        <div className="tab-content mt-3">
                                                <div className="tab-pane container active" id="home">
                                                        <div className="card" style={{ width: "18rem" }}>
                                                                <img src="https://salt.tikicdn.com/cache/750x750/ts/product/90/49/97/ec88ab408c1997378344486c94dbac40.jpg.webp" className="card-img-top" alt="..." />
                                                                <div className="card-body">
                                                                        <h5 className="card-title">Thao túng tâm lý</h5>
                                                                        <p className="card-text">4.7 <i className="bx bxs-star" style={{ color: "#e4d53f" }}></i> | Đã bán 16480</p>
                                                                        <p className="card-text"> <strong>104.780 VND</strong></p>
                                                                        <div className="row mt-2">
                                                                                <div className="col-lg-6"><button type="button" className="btn btn-outline-primary">Giỏ hàng</button></div>
                                                                                <div className="col-lg-6"><button type="button" className="btn btn-outline-danger">Yêu thích</button></div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                                <div className="tab-pane container fade" id="">...</div>
                                                <div className="tab-pane container fade" id="">...</div>
                                                <div className="tab-pane container fade" id="">...</div>
                                                <div className="tab-pane container fade" id="">...</div>
                                        </div>


                                </div>

                                <div className="tab-pane container fade" id="all-products">
                                        <div className="row">
                                                <div className="col-lg-4">
                                                        <div className="list-group mt-3">
                                                                <a to="#" className="list-group-item list-group-item-action active" aria-current="true">
                                                                        Danh mục sản phẩm
                                                                </a>
                                                                <a to="#" className="list-group-item list-group-item-action">A second link item</a>
                                                                <a to="#" className="list-group-item list-group-item-action">A third link item</a>
                                                                <a to="#" className="list-group-item list-group-item-action">A fourth link item</a>
                                                                <a to="#" className="list-group-item list-group-item-action disabled" tabindex="-1" aria-disabled="true">A disabled link item</a>
                                                        </div>
                                                </div>

                                                <div className="col-lg-8">

                                                        <ul className="nav nav-pills mt-3">
                                                                <li className="nav-item">
                                                                        <Link className="nav-link active" data-bs-toggle="pill" to="">Phổ biến</Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                        <Link className="nav-link" data-bs-toggle="pill" to="">Bán chạy</Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                        <Link className="nav-link" data-bs-toggle="pill" to="">Hàng mới</Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                        <Link className="nav-link" data-bs-toggle="pill" to="">Giá thấp đến cao</Link>
                                                                </li>
                                                                <li className="nav-item">
                                                                        <Link className="nav-link" data-bs-toggle="pill" to="">Giá cao đến thấp</Link>
                                                                </li>
                                                        </ul>


                                                        <div className="tab-content mt-3">
                                                                <div className="tab-pane container active" id="all-products">
                                                                        <div className="card" style={{ width: "18rem" }}>
                                                                                <img src="https://salt.tikicdn.com/cache/750x750/ts/product/90/49/97/ec88ab408c1997378344486c94dbac40.jpg.webp" className="card-img-top" alt="..." />
                                                                                <div className="card-body">
                                                                                        <h5 className="card-title">Thao túng tâm lý</h5>
                                                                                        <p className="card-text">4.7 <i className="bx bxs-star" style={{ color: "#e4d53f" }}></i> | Đã bán 16480</p>
                                                                                        <p className="card-text"> <strong>104.780 VND</strong></p>
                                                                                        <div className="row mt-2">
                                                                                                <div className="col-lg-6"><button type="button" className="btn btn-outline-primary">Giỏ hàng</button></div>
                                                                                                <div className="col-lg-6"><button type="button" className="btn btn-outline-danger">Yêu thích</button></div>
                                                                                        </div>
                                                                                </div>
                                                                        </div>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                                <div className="tab-pane container fade" id="store-profile">
                                        <div className="row">
                                                <div className="col-lg-6">
                                                        <div className="card text-center mb-4">
                                                                <div className="card-body">
                                                                        <h5 className="card-title">Tỷ Lệ Hủy</h5>
                                                                        <p className="card-text display-4">0%</p>
                                                                </div>
                                                        </div>
                                                </div>

                                                <div className="col-lg-6">
                                                        <div className="card mb-4">
                                                                <div className="card-header">
                                                                        <strong>Thông tin cửa hàng</strong>
                                                                </div>
                                                                <div className="card-body">
                                                                        <ul className="list-group">

                                                                                <li className="list-group-item">
                                                                                        <strong> <i class='bx bx-book' style={{ color: "#020202" }}  ></i> Sản phẩm:</strong> 2000+
                                                                                </li>
                                                                                <li className="list-group-item">
                                                                                        <strong> <i class='bx bx-store-alt' style={{ color: "#020202" }}  ></i> Mô tả cửa hàng:</strong> Mua online sản phẩm của cửa hàng Tiki Trading trên Tiki.vn. ✓ chất lượng cao, uy tín, giá tốt ✓ Chính hãng ✓ Giao hàng toàn quốc
                                                                                </li>
                                                                                <li className="list-group-item">
                                                                                        <strong> <i class='bx bx-bar-chart-alt' style={{ color: "#020202" }} ></i> Đánh giá:</strong> 4.7 / 5 <i className="bx bxs-star" style={{ color: "#e4d53f" }}></i> (5.5tr+)
                                                                                </li>
                                                                        </ul>
                                                                </div>
                                                        </div>
                                                </div>
                                        </div>
                                </div>

                        </div>
                </div>
        )
}
