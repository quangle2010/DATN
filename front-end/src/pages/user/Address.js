import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'

export default function Address() {
        return (
                <Container className="mt-4">
                        <Card>
                                <Card.Body>
                                        <Row className="mb-3">
                                                <Col>
                                                        <h5>Địa chỉ</h5>
                                                </Col>
                                        </Row>
                                        <Row>
                                                <Col>
                                                        <Button variant="outline-primary" className="mb-3">
                                                                + Thêm địa chỉ mới
                                                        </Button>
                                                </Col>
                                        </Row>
                                        <Row>
                                                <Col>
                                                        <Card className="mb-3">
                                                                <Card.Body>
                                                                        <Row>
                                                                                <Col xs={12} className="mb-2">
                                                                                        <strong>HAOSHOKU KO</strong>{' '}
                                                                                        <span className="text-success">✔ Địa chỉ mặc định</span>
                                                                                </Col>
                                                                        </Row>
                                                                        <Row>
                                                                                <Col xs={12} className="mb-2">
                                                                                        <p className="mb-1">
                                                                                                Địa chỉ: 39/1 quốc lộ 1, Phường Phạm Ngũ Lão, Quận 1, Hồ Chí Minh
                                                                                        </p>
                                                                                </Col>
                                                                        </Row>
                                                                        <Row>
                                                                                <Col xs={12} className="mb-2">
                                                                                        <p className="mb-0">Điện thoại: 0327205797</p>
                                                                                </Col>
                                                                        </Row>
                                                                        <Row className="mt-3">
                                                                                <Col xs={12} className="text-end">
                                                                                        <Button variant="link" className="text-primary">
                                                                                                Chỉnh sửa
                                                                                        </Button>
                                                                                </Col>
                                                                        </Row>
                                                                </Card.Body>
                                                        </Card>
                                                </Col>
                                        </Row>
                                </Card.Body>
                        </Card>
                </Container>
        )
}
