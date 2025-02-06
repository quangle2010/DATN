import React, { useState } from "react";
import { Card, Tag, Avatar, Col, Image, Row, Button, Popconfirm } from "antd";
import { UserOutlined } from "@ant-design/icons";
import OrderDetailsModal from "../../components/seller/OrderDetailModal";
const OrderCard = ({ order }) => {
      const {
            id,
            username,
            products,
            status,
            statusColor,
            orderDate,
            deliveryDate,
      } = order;
      const orderDetails = {
            orderId: "123456",
            product: "Sách: Nghệ thuật giao tiếp",
            price: "300,000₫",
            orderDate: "2025-01-01",
            address: "123 Đường ABC, Quận 1, TP. HCM",
      };
      const [isModalVisible, setIsModalVisible] = useState(false);
      return (
            <>
                  <Card className="seller-order-items mt-3">
                        <div className="seller-order-item-header pb-3">
                              {/* Username và mã đơn hàng */}
                              <div>
                                    <Avatar icon={<UserOutlined />} />
                                    <span className="order-username">
                                          @{username}
                                    </span>
                              </div>
                              <Tag color="blue">{id}</Tag>
                        </div>

                        {/* Hiển thị thông tin thành hàng ngang */}

                        <Row className="seller-order-item-product p-1">
                              {/* Sản phẩm */}
                              <Col span={7} className="ms-3">
                                    {products.map((product) => (
                                          <Row>
                                                <Col
                                                      span={12}
                                                      className="d-flex justifly-content-center"
                                                >
                                                      <div className="order-item-product">
                                                            <Image
                                                                  width={50}
                                                                  src={
                                                                        product.productImage
                                                                  }
                                                            />
                                                            <span
                                                                  style={{
                                                                        marginLeft: 8,
                                                                  }}
                                                            >
                                                                  {
                                                                        product.productName
                                                                  }
                                                            </span>
                                                      </div>
                                                </Col>
                                                <Col
                                                      span={12}
                                                      className="d-flex justifly-content-center"
                                                >
                                                      <div className="order-item-product">
                                                            {product.price.toLocaleString(
                                                                  "vi-VN",
                                                                  {
                                                                        style: "currency",
                                                                        currency: "VND",
                                                                  }
                                                            )}
                                                      </div>
                                                </Col>
                                          </Row>
                                    ))}
                              </Col>
                              <Col span={15} className="ms-5">
                                    <Row>
                                          <Col span={7}>
                                                <div>
                                                      <Tag color={statusColor}>
                                                            {status}
                                                      </Tag>
                                                </div>
                                          </Col>
                                          <Col span={7}>
                                                <div>{orderDate}</div>
                                          </Col>
                                          <Col span={7}>
                                                <div>{deliveryDate}</div>
                                          </Col>
                                          <Col span={3}>
                                                <div className="my-3 d-flex">
                                                      <Button
                                                            className="mx-1 bg-warning"
                                                            color="danger"
                                                            variant="solid"
                                                            onClick={() =>
                                                                  setIsModalVisible(
                                                                        true
                                                                  )
                                                            }
                                                      >
                                                            Sửa
                                                      </Button>
                                                      <Popconfirm
                                                            title="Hủy đơn hàng"
                                                            description="Bạn có chắc chắn muốn hủy?"
                                                            okText="Yes"
                                                            cancelText="No"
                                                      >
                                                            <Button
                                                                  color="danger"
                                                                  variant="solid"
                                                            >
                                                                  Hủy
                                                            </Button>
                                                      </Popconfirm>
                                                </div>
                                          </Col>
                                    </Row>
                              </Col>
                        </Row>
                        <OrderDetailsModal
                              visible={isModalVisible}
                              onCancel={() => setIsModalVisible(false)}
                              orderDetails={orderDetails}
                        />
                  </Card>
            </>
      );
};

export default OrderCard;
