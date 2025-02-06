// ProductCard.js

import React from "react";
import { Card, Typography, Image } from "antd";

// Tạo component ProductCard
const BrandItem = ({ brand }) => {
        return (
                <Card
                        hoverable
                        styles={{
                                body: { padding: "10px" },
                        }}
                        cover={
                                <img
                                        alt="ABC"
                                        src={brand.cover}
                                        style={{
                                                height: "150px",
                                                objectFit: "cover",
                                        }}
                                />
                        }
                >
                        <div className="d-flex justify-content-center">
                                <Image className="brand-home-icon" src={brand.icon} />
                        </div>
                        <Typography.Text
                                strong
                                className="d-flex justify-content-center"
                        >
                                {brand.description}
                        </Typography.Text>
                </Card>
        );
};

export default BrandItem;