import React from 'react'
import { Tab, Tabs } from 'react-bootstrap'

export default function Ordered() {
        return (
                <>
                        <h3 className="my-4">Đơn hàng của tôi</h3>
                        <Tabs defaultActiveKey="all-orders" id="orderTabs" className="mb-3">
                                <Tab eventKey="all-orders" title="Tất cả đơn">
                                        <div className="text-center mt-5">
                                                <img src="https://via.placeholder.com/100" alt="No orders" className="mb-3" />
                                                <p className="text-muted">Chưa có đơn hàng</p>
                                        </div>
                                </Tab>
                                <Tab eventKey="pending-payment" title="Chờ thanh toán">
                                        <div className="text-center mt-5">
                                                <p className="text-muted">Không có đơn hàng chờ thanh toán</p>
                                        </div>
                                </Tab>
                                <Tab eventKey="processing" title="Đang xử lý">
                                        <div className="text-center mt-5">
                                                <p className="text-muted">Không có đơn hàng đang xử lý</p>
                                        </div>
                                </Tab>
                                <Tab eventKey="shipping" title="Đang vận chuyển">
                                        <div className="text-center mt-5">
                                                <p className="text-muted">Không có đơn hàng đang vận chuyển</p>
                                        </div>
                                </Tab>
                                <Tab eventKey="delivered" title="Đã giao">
                                        <div className="text-center mt-5">
                                                <p className="text-muted">Không có đơn hàng đã giao</p>
                                        </div>
                                </Tab>
                                <Tab eventKey="cancelled" title="Đã hủy">
                                        <div className="text-center mt-5">
                                                <p className="text-muted">Không có đơn hàng đã hủy</p>
                                        </div>
                                </Tab>
                        </Tabs>
                </>
        )
}
