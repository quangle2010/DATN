import React from "react";
// import "../css/aside_left.css";
import { Layout, Menu } from "antd";
const { Sider } = Layout;
const AsideLeft = ({ categories }) => {
        return (
                <>
                        {/* Sider */}
                        <Sider className="aside-left">
                                <div className="d-flex justify-content-center">
                                        <h5 className="fw-bold">Danh mục sách</h5>
                                </div>
                                <Menu
                                        mode="inline"
                                        defaultSelectedKeys={["1"]}
                                        items={categories.map((category) => ({
                                                key: category.key,
                                                icon: (
                                                        <img
                                                                src={category.icon}
                                                                alt={category.label}
                                                                style={{
                                                                        width: "24px", // Kích thước của icon
                                                                        height: "24px",
                                                                        borderRadius: "50%", // Hình tròn
                                                                }}
                                                        />
                                                ),
                                                label: category.label,
                                                style: {
                                                        padding: "5px", // Ghi đè hoàn toàn padding cho từng item
                                                },
                                        }))}
                                        className="menu-aside"
                                />
                        </Sider>
                </>
        );
};

export default AsideLeft;