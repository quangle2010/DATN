import React from "react";
import { Layout, Row, Col, Menu, Avatar, Dropdown } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const SellerHeader = ({ navItems, profileMenu }) => {
      const navigate = useNavigate();

      const userMenu = (
            <Menu
                  onClick={(e) => {
                        if (e.key === 0) {
                              navigate("/shop-update");
                        }
                  }}
                  items={profileMenu}
            ></Menu>
      );

      return (
            <Header
                  className="seller-header"
                  style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                  }}
            >
                  {/* Left: Logo and Name */}
                  <Row
                        align="middle"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/home")}
                  >
                        <Col>
                              <img
                                    src="https://via.placeholder.com/40"
                                    alt="logo"
                                    style={{ marginRight: 10 }}
                              />
                        </Col>
                        <Col>
                              <span
                                    style={{ color: "black", fontSize: "18px" }}
                              >
                                    My App
                              </span>
                        </Col>
                  </Row>

                  {/* Right: Avatar and Menu */}
                  <Row align="middle">
                        <Col>
                              <Menu
                                    mode="horizontal"
                                    items={navItems}
                                    className="seller-nav"
                              />
                        </Col>
                        <Col>
                              {/* Dropdown menu when clicking on Avatar */}
                              <Dropdown overlay={userMenu} trigger={["click"]}>
                                    <Avatar
                                          size="large"
                                          icon={<UserOutlined />}
                                          src="https://cdn.europosters.eu/image/750/posters/rick-and-morty-free-rick-i49321.jpg"
                                          style={{
                                                backgroundColor: "#1890FF",
                                                marginRight: 10,
                                          }}
                                    />
                              </Dropdown>
                        </Col>
                  </Row>
            </Header>
      );
};

export default SellerHeader;
