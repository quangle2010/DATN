import React from "react";
import {
      Layout,
      Card,
      Row,
      Col,
      Statistic,
      Typography,
      Button,
      Rate,
} from "antd";
import {
      ShoppingCartOutlined,
      BookOutlined,
      TeamOutlined,
} from "@ant-design/icons";

const { Header, Content } = Layout;
const { Title } = Typography;

const SellerHome = () => {
      const shopRatings = [
            { name: "Shop A", rating: 4.5 },
            { name: "Shop B", rating: 3.8 },
            { name: "Shop C", rating: 4.0 },
      ];

      return (
            <Layout style={{ minHeight: "100vh" }}>
                  <Layout>
                        <Header
                              style={{
                                    background: "#fff",
                                    padding: "0 16px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                              }}
                        >
                              <Title level={3} style={{ margin: 0 }}>
                                    Trang chủ
                              </Title>
                        </Header>
                        <Content
                              style={{ margin: "16px", background: "#f0f2f5" }}
                        >
                              <Row gutter={[16, 16]}>
                                    <Col span={6}>
                                          <Card>
                                                <Statistic
                                                      title="Sách đã bán"
                                                      value={2500}
                                                      prefix={<BookOutlined />}
                                                />
                                          </Card>
                                    </Col>
                                    <Col span={6}>
                                          <Card>
                                                <Statistic
                                                      title="Doanh thu"
                                                      value={1200000}
                                                      prefix="₫"
                                                />
                                          </Card>
                                    </Col>
                                    <Col span={6}>
                                          <Card>
                                                <Statistic
                                                      title="Đơn hàng"
                                                      value={320}
                                                      prefix={
                                                            <ShoppingCartOutlined />
                                                      }
                                                />
                                          </Card>
                                    </Col>
                                    <Col span={6}>
                                          <Card>
                                                <Statistic
                                                      title="Khách hàng"
                                                      value={150}
                                                      prefix={<TeamOutlined />}
                                                />
                                          </Card>
                                    </Col>
                              </Row>
                              <Row
                                    gutter={[16, 16]}
                                    style={{ marginTop: "16px" }}
                              >
                                    <Col span={12}>
                                          <Card title="Đánh giá shop">
                                                <ul
                                                      style={{
                                                            listStyle: "none",
                                                            padding: 0,
                                                            margin: 0,
                                                      }}
                                                >
                                                      {shopRatings.map(
                                                            (shop, index) => (
                                                                  <li
                                                                        key={
                                                                              index
                                                                        }
                                                                        style={{
                                                                              marginBottom:
                                                                                    "10px",
                                                                        }}
                                                                  >
                                                                        <span
                                                                              style={{
                                                                                    marginRight:
                                                                                          "8px",
                                                                              }}
                                                                        >
                                                                              @
                                                                              {
                                                                                    shop.name
                                                                              }
                                                                        </span>
                                                                        <Rate
                                                                              allowHalf
                                                                              disabled
                                                                              defaultValue={
                                                                                    shop.rating
                                                                              }
                                                                        />
                                                                  </li>
                                                            )
                                                      )}
                                                </ul>
                                                <Button type="link">
                                                      Xem tất cả đánh giá
                                                </Button>
                                          </Card>
                                    </Col>
                                    <Col span={12}>
                                          <Card title="Hoạt động gần đây">
                                                <p>
                                                      - Đơn hàng mới: 5 phút
                                                      trước
                                                </p>
                                                <p>
                                                      - Thêm sản phẩm mới: 10
                                                      phút trước
                                                </p>
                                                <Button type="link">
                                                      Xem chi tiết
                                                </Button>
                                          </Card>
                                    </Col>
                              </Row>
                        </Content>
                  </Layout>
            </Layout>
      );
};

export default SellerHome;
