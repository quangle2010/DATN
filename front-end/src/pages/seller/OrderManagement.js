import React from "react";
import { Button, Row, Col, Tabs, Card } from "antd";
import OrderCard from "../../components/seller/OrderCard";
import { CONTENT_DATA } from "../../assets/data/LayoutConfigData";
import SellerOrderToolBar from "../../components/seller/SellerOrderToolBar";


const operations = <Button>Extra Action</Button>;
const handleTabClick = (key) => {
      console.log("Tab đã chọn: " + key);
};

const orderItems = [
      {
            id: "DH001",
            username: "Nguyen Van A",
            products: [
                  {
                        productID: "P001",
                        productImage: "https://via.placeholder.com/100",
                        productName: "Sản phẩm A",
                        price: 500000,
                  },
                  {
                        productID: "P002",
                        productImage: "https://via.placeholder.com/100",
                        productName: "Sản phẩm B",
                        price: 300000,
                  },
            ],
            status: "Hoàn thành",
            statusColor: "green",
            orderDate: "2025-01-01",
            deliveryDate: "2025-01-05",
      },
      {
            id: "DH002",
            username: "Nguyen Van A",
            products: [
                  {
                        productID: "P001",
                        productImage: "https://via.placeholder.com/100",
                        productName: "Sản phẩm A",
                        price: 500000,
                  },
                  {
                        productID: "P002",
                        productImage: "https://via.placeholder.com/100",
                        productName: "Sản phẩm B",
                        price: 300000,
                  },
            ],
            status: "Hoàn thành",
            statusColor: "green",
            orderDate: "2025-01-01",
            deliveryDate: "2025-01-05",
      },
];

const onSearch = (value, _e, info) => console.log(info?.source, value);
const handleChange = (value) => {
      console.log(value);
};
// tess
// tess

const OrderManagement = () => {
      return (
            <>
                  <h1>Danh sách đơn hàng</h1>
                  <Tabs
                        tabBarExtraContent={operations}
                        items={CONTENT_DATA.orderManage.tabArray}
                        size={"large"}
                        onTabClick={handleTabClick}
                  />
                  <SellerOrderToolBar
                        className="my-3"
                        typeSearch={CONTENT_DATA.orderManage.typeSearch}
                        statusSearch={CONTENT_DATA.orderManage.statusSearch}
                        onSearch={onSearch}
                        handleChange={handleChange}
                        dateFormat={CONTENT_DATA.orderManage.dateFormat}
                  />

                  <Card className="seller-table-title my-3">
                        <Row
                              wrap={true}
                              className="table-header"
                              gutter={[16, 16]}
                              align="middle"
                        >
                              <Col span={7} className="ms-5">
                                    <Row>
                                          <Col span={12}>
                                                <strong>Sản phẩm</strong>
                                          </Col>
                                          <Col span={12}>
                                                <strong>Giá tiền</strong>
                                          </Col>
                                    </Row>
                              </Col>
                              <Col span={15} className="ms-3">
                                    <Row>
                                          <Col span={7}>
                                                <strong>
                                                      Trạng thái đơn hàng
                                                </strong>
                                          </Col>
                                          <Col span={7}>
                                                <strong>Ngày đặt hàng</strong>
                                          </Col>
                                          <Col span={7}>
                                                <strong>Ngày nhận hàng</strong>
                                          </Col>
                                          <Col span={3}>
                                                <strong>Thao tác</strong>
                                          </Col>
                                    </Row>
                              </Col>
                        </Row>
                  </Card>
                  {orderItems.map((order) => (
                        <OrderCard key={order.id} order={order} />
                  ))}
            </>
      );
};
export default OrderManagement;
