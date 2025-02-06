import React from 'react'
import { Button, Container } from 'react-bootstrap'
// import '../css/favourite.css'
export default function Favourite() {
        return (
                <Container className="wishlist-container">
                        <h4>Danh sách yêu thích</h4>
                        <div className="wishlist-empty">
                                <div className="wishlist-icon">
                                        <i className="bi bi-person"></i>
                                </div>
                                <p>Hãy <span className="highlight">&#10084;</span> sản phẩm bạn yêu thích khi mua sắm để xem lại thuận tiện nhất</p>
                                <Button variant="warning">Tiếp tục mua sắm</Button>
                        </div>
                </Container>
        )
}
