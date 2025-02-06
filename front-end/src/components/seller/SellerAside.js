import React, { useState } from "react";

import { Layout, Menu, FloatButton } from "antd";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Sider } = Layout;

const SellerAside = ({ asideArray, selectedKey, handleMenuClick }) => {
      const [collapsed, setCollapsed] = useState(false);

      return (
            <Sider
                  trigger={null}
                  className="sellerMenu"
                  width={"15vw"}
                  mode="inline"
                  collapsible
                  collapsed={collapsed}
                  onCollapse={(value) => {
                        setCollapsed(value);
                  }}
                  breakpoint="lg"
            >
                  <Menu
                        mode="inline"
                        selectedKeys={selectedKey}
                        onClick={handleMenuClick}
                        style={{
                              height: "100%",
                              borderRight: 0,
                        }}
                        items={asideArray}
                  />
                  <FloatButton
                        className="collasp-btn"
                        shape="circle"
                        type="primary"
                        icon={
                              collapsed ? (
                                    <MenuUnfoldOutlined />
                              ) : (
                                    <MenuFoldOutlined />
                              )
                        }
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                              fontSize: "16px",
                              width: 64,
                              height: 64,
                              left: "8px",
                        }}
                        tooltip={
                              <div>
                                    {collapsed
                                          ? "Mở rộng thanh công cụ"
                                          : "Thu gọn thanh công cụ"}
                              </div>
                        }
                        placement="left"
                        breakpoint="sm"
                  />
            </Sider>
      );
};

export default SellerAside;
