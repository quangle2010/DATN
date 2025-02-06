import React, { useState, useEffect } from "react";
import { Layout } from "antd";
import '../assets/css/seller.css';
import { useNavigate, Outlet } from "react-router-dom";
import { ASIDE_DATA, HEADER_DATA } from "../assets/data/LayoutConfigData";
import SellerHeader from "../components/seller/SellerHeader";
import SellerAside from "../components/seller/SellerAside";
export default function SellerLayout() {
        const [selectedKey, setSelectedKey] = useState("1-1");
        const navigate = useNavigate();
        const [route, setRoute] = useState();
        const handleMenuClick = (e) => {
                setSelectedKey(e.key);
                const path = findRoute(e.key, ASIDE_DATA.aside_array);
                setRoute(path.substring(1));
                navigate(path);
        };

        const findRoute = (key, options) => {
                let mainKey = key;
                if (key.length > 2) {
                        [mainKey] = key.split("-");
                }
                for (let option of options) {
                        if (mainKey === option?.key || key === option?.key) {
                                if (option.route) {
                                        return option.route;
                                } else {
                                        return findRoute(key, option.children);
                                }
                        }
                }
        };
        return (
                <Layout className="seller">
                        <SellerHeader
                                navItems={HEADER_DATA.nav_item}
                                profileMenu={HEADER_DATA.profile_menu}
                        />
                        <Layout style={{ height: "100vh" }}>
                                <SellerAside
                                        asideArray={ASIDE_DATA.aside_array}
                                        findRoute={selectedKey}
                                        handleMenuClick={handleMenuClick}
                                />
                                <Layout className="content-section">
                                        <div className="content-container">
                                                <Outlet />
                                        </div>
                                </Layout>
                        </Layout>
                </Layout>
        );
}
