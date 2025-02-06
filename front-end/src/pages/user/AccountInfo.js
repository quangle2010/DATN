import React from 'react'
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
// import '../css/accountinfo.css'
export default function AccountInfo() {
        return (
                <Container className="account-info-container">
                        <h4>Thông tin tài khoản</h4>
                        <Row className="mt-3">
                                {/* Personal Info Section */}
                                <Col md={8}>
                                        <Form>
                                                <div className="profile-picture-section">
                                                        <div className="profile-picture">
                                                                <i className="bi bi-person"></i>
                                                        </div>
                                                        <Button className='btn' variant="outline-secondary">Cập nhật</Button>
                                                </div>

                                                <Form.Group className="mb-3">
                                                        <h6>Họ và Tên</h6>
                                                        <Form.Control type="text" placeholder="Nhập họ và tên" defaultValue="Haoshoku Ko" />
                                                </Form.Group>

                                                <Form.Group className="mb-3">
                                                        <h6>Số điện thoại và Email</h6>
                                                        <InputGroup className="mb-2">
                                                                <Form.Control type="text" value="0327205797" />
                                                        </InputGroup>
                                                        <InputGroup>
                                                                <Form.Control type="text" value="tukhoa234@gmail.com" />

                                                        </InputGroup>
                                                </Form.Group>



                                                <Button variant="primary">Lưu thay đổi</Button>
                                        </Form>
                                </Col>
                                <Col md={4}>


                                        <div className="security-section">
                                                <h6>Bảo mật</h6>
                                                <Button variant="outline-secondary" className="d-block w-100 mb-2">
                                                        Thiết lập mật khẩu
                                                </Button>
                                                <Button variant="outline-danger" className="d-block w-100">
                                                        Yêu cầu xóa tài khoản
                                                </Button>
                                        </div>

                                        <div className="social-links-section">
                                                <h6>Liên kết mạng xã hội</h6>
                                                <Button variant="outline-secondary" className="d-block w-100 mb-2">
                                                        Facebook
                                                </Button>
                                                <Button variant="outline-secondary" className="d-block w-100">
                                                        Google
                                                </Button>
                                        </div>
                                </Col>
                        </Row>
                </Container>

        )
}
