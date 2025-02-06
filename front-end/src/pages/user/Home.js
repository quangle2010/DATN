import React, { useState } from "react";
// import { Navbar, Container, Nav } from 'react-bootstrap';
// import Slider from 'react-slick'; // Import the Slider component
import "slick-carousel/slick/slick.css";
import { Container } from "react-bootstrap";
import "slick-carousel/slick/slick-theme.css";
import { default as ReactCarousel } from "react-multi-carousel";
import Aside from "../../assets/components/AsideLeft";
import { Carousel, Card, Row, Col, Image, Typography, Button } from "antd";
import "react-multi-carousel/lib/styles.css";

import ProductItem from "../../assets/components/ProductItem";
import BrandItem from "../../assets/components/BrandItem";
export default function Home() {
        const [searchTerm, setSearchTerm] = useState("");
        const brands = [
                {
                        cover: "https://vcdn1-kinhdoanh.vnecdn.net/2022/03/26/Fahasa-1648285042-9511-1648285188.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=qVCgEGreK9XIL1Z7X46NlA",
                        icon: "https://yt3.googleusercontent.com/c4_uCz50AG1xyNOyT8z8cF9fbhnIf7_dv_YnlQKWLOjy8D6PV8Zkz-tVo7fVjTFyuJHApKTuoeI=s900-c-k-c0x00ffffff-no-rj",
                        description: "Mua sách thả ga, không lo về giá",
                },
                {
                        cover: "https://vcdn1-kinhdoanh.vnecdn.net/2022/03/26/Fahasa-1648285042-9511-1648285188.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=qVCgEGreK9XIL1Z7X46NlA",
                        icon: "https://yt3.googleusercontent.com/c4_uCz50AG1xyNOyT8z8cF9fbhnIf7_dv_YnlQKWLOjy8D6PV8Zkz-tVo7fVjTFyuJHApKTuoeI=s900-c-k-c0x00ffffff-no-rj",
                        description: "Mua sách thả ga, không lo về giá",
                },
        ];

        const responsive = {
                superLargeDesktop: {
                        // the naming can be any, depends on you.
                        breakpoint: { max: 4000, min: 3000 },
                        items: 5,
                },
                desktop: {
                        breakpoint: { max: 3000, min: 1024 },
                        items: 5,
                },
                tablet: {
                        breakpoint: { max: 1024, min: 464 },
                        items: 2,
                },
                mobile: {
                        breakpoint: { max: 464, min: 0 },
                        items: 1,
                },
        };
        const product_items = [
                {
                        title: "Suối Ấm Mặt Trời: Tập 2 Của Cây Cam Ngọt",
                        price: "125.000₫",
                        oldPrice: "160.000₫",
                        discount: "-22%",
                        image: "https://placehold.co/200x300/png",
                        rate: 5,
                },
                {
                        title: "Giải mã Hoóc-môn Dopamine",
                        price: "139.000₫",
                        oldPrice: "1.980.000₫",
                        discount: "-30%",
                        image: "https://placehold.co/200x300/png",
                        rate: 4,
                },
                {
                        title: "Giải mã Hoóc-môn Dopamine",
                        price: "139.000₫",
                        oldPrice: "1.980.000₫",
                        discount: "-30%",
                        image: "https://placehold.co/200x300/png",
                        rate: 4,
                },
                {
                        title: "Giải mã Hoóc-môn Dopamine",
                        price: "139.000₫",
                        oldPrice: "1.980.000₫",
                        discount: "-30%",
                        image: "https://placehold.co/200x300/png",
                        rate: 4,
                },
                {
                        title: "Giải mã Hoóc-môn Dopamine",
                        price: "139.000₫",
                        oldPrice: "1.980.000₫",
                        discount: "-30%",
                        image: "https://placehold.co/200x300/png",
                        rate: 4,
                },
                {
                        title: "Giải mã Hoóc-môn Dopamine",
                        price: "139.000₫",
                        oldPrice: "1.980.000₫",
                        discount: "-30%",
                        image: "https://placehold.co/200x300/png",
                        rate: 4,
                },
                {
                        title: "Giải mã Hoóc-môn Dopamine",
                        price: "139.000₫",
                        oldPrice: "1.980.000₫",
                        discount: "-30%",
                        image: "https://placehold.co/200x300/png",
                        rate: 4,
                },
        ];
        const banners = [
                {
                        key: "1",
                        img: "https://placehold.co/1200x300/png",
                },
                {
                        key: "2",
                        img: "https://placehold.co/1200x300/png",
                },
        ];
        const categories = [
                {
                        key: "1",
                        label: "Khoa học",
                        icon: "https://placehold.co/40x40",
                },
                {
                        key: "2",
                        label: "Tiểu thuyết",
                        icon: "https://placehold.co/40x40",
                },
                {
                        key: "3",
                        label: "Lịch sử",
                        icon: "https://placehold.co/40x40",
                },
                {
                        key: "4",
                        label: "Công nghệ",
                        icon: "https://placehold.co/40x40",
                },
                {
                        key: "5",
                        label: "Tình cảm",
                        icon: "https://placehold.co/40x40",
                },
        ];

        return (
                <>
                        <Container fluid className="home-content user-container py-3">
                                <Row>
                                        <Col xs={0} sm={0} lg={4}>
                                                <Aside categories={categories}></Aside>
                                        </Col>
                                        <Col xs={24} sm={24} lg={20}>
                                                <div className="banner">
                                                        <Card>
                                                                <Carousel
                                                                        autoplay
                                                                        arrows
                                                                        dots={false}
                                                                >
                                                                        {banners.map((banner) => (
                                                                                <div>
                                                                                        <Image
                                                                                                className="banner-img"
                                                                                                src={
                                                                                                        banner.img
                                                                                                }
                                                                                        ></Image>
                                                                                </div>
                                                                        ))}
                                                                </Carousel>
                                                        </Card>
                                                </div>
                                                <div className="top-deal my-3">
                                                        <Card>
                                                                <div className="d-flex align-item-center mb-3 fs-4 top-deal-title">
                                                                        <i className="fa-solid fa-thumbs-up"></i>
                                                                        <Typography.Title
                                                                                className="text-uppercase m-0 ms-1 top-deal-title px-1"
                                                                                level={4}
                                                                        >
                                                                                TOP DEAL SIÊU RẺ
                                                                        </Typography.Title>
                                                                </div>
                                                                <ReactCarousel
                                                                        arrows
                                                                        swipeable
                                                                        infinite
                                                                        responsive={responsive}
                                                                        className="py-3"
                                                                >
                                                                        {product_items.map(
                                                                                (
                                                                                        product,
                                                                                        index
                                                                                ) => (
                                                                                        <div
                                                                                                key={
                                                                                                        index
                                                                                                }
                                                                                                className="px-2"
                                                                                        >
                                                                                                <ProductItem
                                                                                                        product={
                                                                                                                product
                                                                                                        }
                                                                                                ></ProductItem>
                                                                                        </div>
                                                                                )
                                                                        )}
                                                                </ReactCarousel>
                                                        </Card>
                                                </div>
                                                <div className="brands my-3">
                                                        <Card>
                                                                <div className="d-flex align-item-center mb-3 fs-4 brand-title text-primary">
                                                                        <i class="fa-solid fa-copyright"></i>
                                                                        <Typography.Title
                                                                                className="text-uppercase m-0 ms-1 brand-title px-1 text-primary"
                                                                                level={4}
                                                                        >
                                                                                Thương hiệu nổi bật
                                                                        </Typography.Title>
                                                                </div>
                                                                <Row>
                                                                        {brands.map((brand) => (
                                                                                <Col
                                                                                        span={4}
                                                                                        className="px-2"
                                                                                >
                                                                                        <BrandItem
                                                                                                brand={
                                                                                                        brand
                                                                                                }
                                                                                        ></BrandItem>
                                                                                </Col>
                                                                        ))}
                                                                </Row>
                                                        </Card>
                                                </div>
                                                <div className="products my-3">
                                                        <Card>
                                                                <div className="d-flex align-item-center mb-3 fs-4 ">
                                                                        <Typography.Title
                                                                                className="text-uppercase m-0 ms-1  px-1"
                                                                                level={4}
                                                                        >
                                                                                Sản phẩm
                                                                        </Typography.Title>
                                                                </div>
                                                                <Row>
                                                                        {product_items.map(
                                                                                (
                                                                                        product,
                                                                                        index
                                                                                ) => (
                                                                                        <Col
                                                                                                span={4}
                                                                                                key={
                                                                                                        index
                                                                                                }
                                                                                                className="px-2"
                                                                                        >
                                                                                                <ProductItem
                                                                                                        product={
                                                                                                                product
                                                                                                        }
                                                                                                ></ProductItem>
                                                                                        </Col>
                                                                                )
                                                                        )}
                                                                </Row>
                                                                <div className="d-flex justify-content-center">
                                                                        <Button
                                                                                variant="outlined"
                                                                                color="primary"
                                                                        >
                                                                                Xem thêm
                                                                        </Button>
                                                                </div>
                                                        </Card>
                                                </div>
                                        </Col>
                                </Row>
                        </Container>
                </>
        );
}