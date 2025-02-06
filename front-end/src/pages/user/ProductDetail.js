
import React from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; // Import the CSS
export default function ProductDetail() {
        const responsive = {
                superLargeDesktop: {
                        breakpoint: { max: 4000, min: 1024 },
                        items: 5,
                },
                desktop: {
                        breakpoint: { max: 1024, min: 768 },
                        items: 3,
                },
                tablet: {
                        breakpoint: { max: 768, min: 464 },
                        items: 2,
                },
                mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 1,
                },
        };
        return (
                <div className="mt-5">

                        <div className="store-header mb-4">
                                <i className="fas fa-book-open store-icon"></i>
                                <h3>Nhà Sách Giảng Dương</h3>
                        </div>

                        <Row>
                                <Col md={4}>
                                        <img
                                                src="https://via.placeholder.com/300x400"
                                                alt="Sách"
                                                className="product-image img-fluid"
                                        />
                                </Col>

                                <Col md={8}>
                                        <h2 className="product-title">
                                                Combo 2 Cuốn: Văn Hóa Giảng Dương + Những Bài Học Không Có Nơi Giảng Dương
                                        </h2>
                                        <p className="product-price">180,000 VND</p>

                                        <div className="rating mb-3">
                                                <span>⭐⭐⭐⭐☆</span> <span>4.0/5 - 120 đánh giá</span>
                                        </div>

                                        <div className="product-description mb-3">
                                                <p>
                                                        Combo 2 cuốn sách gồm "Văn Hóa Giảng Dương" và "Những Bài Học Không Có Nơi Giảng Dương" sẽ
                                                        mang đến cho bạn cái nhìn sâu sắc về văn hóa và những bài học quý giá trong cuộc sống. Đây là sự lựa
                                                        chọn tuyệt vời cho những ai yêu thích sự phát triển bản thân và khám phá tri thức.
                                                </p>
                                        </div>

                                        <div className="product-details mb-3">
                                                <ul>
                                                        <li><strong>Thương hiệu:</strong> Giảng Dương</li>
                                                        <li><strong>Nhà xuất bản:</strong> NXB Tri Thức</li>
                                                        <li><strong>Kích thước:</strong> 14.5 x 20.5 cm</li>
                                                        <li><strong>Loại bìa:</strong> Bìa mềm</li>
                                                        <li><strong>Số trang:</strong> 300 trang</li>
                                                        <li><strong>Ngày phát hành:</strong> 2023</li>
                                                </ul>
                                        </div>

                                        <div className="d-flex align-items-center mt-3">
                                                <label htmlFor="quantity" className="me-3">Số lượng:</label>
                                                <input type="number" id="quantity" className="form-control w-25" value="1" min="1" max="10" />
                                                <Button variant="primary" className="ms-3">Thêm vào giỏ hàng</Button>
                                        </div>
                                </Col>
                        </Row>
                        <div className="mt-5">
                                <h3>Sách Liên Quan</h3>
                                <Carousel
                                        responsive={responsive}
                                        infinite={true}
                                        arrows={true}
                                        autoPlay={true}
                                        autoPlaySpeed={5000}
                                        centerMode={false}
                                        itemclassName="carousel-item-card"
                                >
                                        <div className="card">
                                                <img
                                                        className="card-img-top"
                                                        src="https://via.placeholder.com/200x100"
                                                        alt="Title"
                                                />
                                                <div className="card-body">
                                                        <h4 className="card-title">Title 1</h4>
                                                        <p className="card-text">Body 1</p>
                                                </div>
                                        </div>
                                        <div className="card ">
                                                <img
                                                        className="card-img-top"
                                                        src="https://via.placeholder.com/200x100"
                                                        alt="Title"
                                                />
                                                <div className="card-body">
                                                        <h4 className="card-title">Title 1</h4>
                                                        <p className="card-text">Body 1</p>
                                                </div>
                                        </div>
                                        <div className="card ">
                                                <img
                                                        className="card-img-top"
                                                        src="https://via.placeholder.com/200x100"
                                                        alt="Title"
                                                />
                                                <div className="card-body">
                                                        <h4 className="card-title">Title 1</h4>
                                                        <p className="card-text">Body 1</p>
                                                </div>
                                        </div>
                                        <div className="card ">
                                                <img
                                                        className="card-img-top"
                                                        src="https://via.placeholder.com/200x100"
                                                        alt="Title"
                                                />
                                                <div className="card-body">
                                                        <h4 className="card-title">Title 1</h4>
                                                        <p className="card-text">Body 1</p>
                                                </div>
                                        </div>
                                        <div className="card">
                                                <img
                                                        className="card-img-top"
                                                        src="https://via.placeholder.com/200x100"
                                                        alt="Title"
                                                />
                                                <div className="card-body">
                                                        <h4 className="card-title">Title 1</h4>
                                                        <p className="card-text">Body 1</p>
                                                </div>
                                        </div>
                                        <div className="card">
                                                <img
                                                        className="card-img-top"
                                                        src="https://via.placeholder.com/200x100"
                                                        alt="Title"
                                                />
                                                <div className="card-body">
                                                        <h4 className="card-title">Title 1</h4>
                                                        <p className="card-text">Body 1</p>
                                                </div>
                                        </div>
                                        <div className="card">
                                                <img
                                                        className="card-img-top"
                                                        src="https://via.placeholder.com/200x100"
                                                        alt="Title"
                                                />
                                                <div className="card-body">
                                                        <h4 className="card-title">Title 1</h4>
                                                        <p className="card-text">Body 1</p>
                                                </div>
                                        </div>
                                </Carousel>
                        </div>

                        <div className="mt-5">
                                <h3>Đánh Giá Sản Phẩm</h3>
                                <div className="mb-4">
                                        <h5>Chia sẻ đánh giá của bạn:</h5>
                                        <Form>
                                                <Form.Group className="mb-3">
                                                        <Form.Label htmlFor="review-text">Viết đánh giá:</Form.Label>
                                                        <Form.Control
                                                                as="textarea"
                                                                id="review-text"
                                                                rows={4}
                                                                placeholder="Nhập đánh giá của bạn..."
                                                        />
                                                </Form.Group>
                                                <Button type="submit" variant="primary">Gửi Đánh Giá</Button>
                                        </Form>
                                </div>
                                <h5>Đánh Giá Từ Khách Hàng</h5>
                                <div className="border p-3 mb-3">
                                        <p><strong>Nguyễn Văn A</strong> - <span className="text-muted">⭐⭐⭐⭐⭐</span></p>
                                        <p>Cuốn sách rất hay và bổ ích, tôi đã học được rất nhiều điều từ sách này. Chắc chắn sẽ mua thêm các
                                                cuốn khác của nhà sách Giảng Dương!</p>
                                </div>
                                <div className="border p-3 mb-3">
                                        <p><strong>Trần Thị B</strong> - <span className="text-muted">⭐⭐⭐⭐☆</span></p>
                                        <p>Sách hay, tuy nhiên có một số phần hơi khó hiểu với người mới bắt đầu. Nhưng vẫn rất đáng đọc!</p>
                                </div>
                        </div>
                </div>
        );
}
