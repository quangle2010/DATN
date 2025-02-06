import React from "react";
import { Card, Row, Col, Typography, Popconfirm, Button } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const VoucherCard = () => {
      return (
            <div
                  className="my-3"
                  style={{
                        position: "relative",
                        backgroundColor: "#fff",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        maxWidth: "450px",
                  }}
            >
                  {/* Lỗ hổng bên trái */}
                  <Card
                        bodyStyle={{ padding: "5px 5px" }}
                        style={{ borderRadius: "10px" }}
                  >
                        <Row>
                              {/* Logo và tên store ở giữa */}
                              <Col
                                    span={5}
                                    style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          justifyContent: "center",
                                          alignItems: "center",
                                          borderRight: "1px dashed #d9d9d9",
                                          padding: "10px",
                                    }}
                              >
                                    <img
                                          src="https://sachphotos.com/wp-content/uploads/2022/05/fahasa-logo.png"
                                          alt="Store Logo"
                                          style={{
                                                width: "50px",
                                                height: "50px",
                                                borderRadius: "10px",
                                                objectFit: "cover",
                                                marginBottom: "8px",
                                          }}
                                    />
                                    <Text strong style={{ fontSize: "10px" }}>
                                          Fahasa
                                    </Text>
                              </Col>

                              {/* Nội dung voucher */}
                              <Col span={19} style={{ paddingLeft: "15px" }}>
                                    <Title level={5} className="m-1">
                                          Giảm 9K
                                    </Title>
                                    <br />

                                    <Text className="m-1" type="secondary">
                                          Cho đơn hàng từ 489K
                                    </Text>
                                    <br />
                                    <Text
                                          className="m-1"
                                          type="secondary"
                                          style={{ fontSize: "12px" }}
                                    >
                                          HSD: 24/09/27
                                    </Text>
                              </Col>
                        </Row>
                  </Card>

                  {/* Icon thông tin */}
                  <div
                        style={{
                              position: "absolute",
                              top: "10px",
                              right: "10px",
                              cursor: "pointer",
                        }}
                  >
                        <InfoCircleOutlined />
                  </div>
                  <div
                        className="my-3"
                        style={{
                              position: "absolute",
                              right: "10px",
                              bottom: "10px",
                        }}
                  >
                        <Button
                              className="mx-1 bg-warning"
                              color="danger"
                              variant="solid"
                        >
                              Sửa
                        </Button>
                        <Popconfirm
                              title="Xóa voucher"
                              description="Bạn có chắc chắn muốn xóa?"
                              okText="Yes"
                              cancelText="No"
                        >
                              <Button color="danger" variant="solid">
                                    Xóa
                              </Button>
                        </Popconfirm>
                  </div>
            </div>
      );
};

export default VoucherCard;
