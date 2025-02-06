import React from "react";
import { Card, Badge, Rate, Typography } from "antd";
import { useNavigate } from 'react-router-dom';
const { Text } = Typography;

const ProductItem = ({ product }) => {
        const navigate = useNavigate();
        const routeToProductDetail = () => {
                navigate("/product-detail");
        }
        return (
                <Card
                        onClick={routeToProductDetail}
                        className="product-item"
                        hoverable
                        styles={{
                                body: { padding: "10px" },
                        }}
                        cover={
                                <>
                                        <img
                                                alt={product.title}
                                                src={product.image}
                                                style={{
                                                        height: "200px",
                                                        objectFit: "cover",
                                                }}
                                        />
                                </>
                        }
                >
                        <Typography.Text strong className="product-item-title">
                                {product.title}
                        </Typography.Text>
                        <Rate
                                disabled
                                defaultValue={product.rate}
                                className="product-item-rate d-block"
                        />
                        <div className="product-item-price">
                                <Badge count={product.discount} offset={[35, 25]}>
                                        <Text className="price-actual d-block" strong>
                                                {product.price}
                                        </Text>
                                        <Text className="price-delete d-block" delete>
                                                {product.oldPrice}
                                        </Text>
                                </Badge>
                        </div>
                </Card>
        );
};

export default ProductItem;