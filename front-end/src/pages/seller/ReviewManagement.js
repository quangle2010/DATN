import React, { useState } from "react";
import { Table, Button, Rate, Tabs, Form, Modal, Input } from "antd";
import { CONTENT_DATA } from "../../assets/data/LayoutConfigData";
import SellerReviewToolBar from "../../components/seller/SellerReviewToolBar";

const operations = (
      <Button color="primary" variant="solid" >
            Thêm sản phẩm
      </Button>
);
const handleTabClick = (key) => {
      console.log("Tab đã chọn: " + key);
};
const onSearch = (value, _e, info) => console.log(info?.source, value);
const handleChange = (value) => {
      console.log(value);
};
const ReviewManagement = () => {
      // Dữ liệu giả lập cho bảng
      const dataSource = [
            {
                  key: "1",
                  productName: "Sản phẩm A",
                  productImg:
                        "https://bizweb.dktcdn.net/100/370/339/products/hai-so-phan-6558e727-bad7-4a5c-ade0-b388df2cbc8e.jpg?v=1630424978200",
                  reviewerName: "Nguyễn Văn A",
                  reviewContent: "Sản phẩm rất tốt!",
                  rating: 5,
                  reviewTime: "2025-01-01 10:00",
            },
            {
                  key: "2",
                  productName: "Sản phẩm B",
                  productImg:
                        "https://bizweb.dktcdn.net/100/370/339/products/hai-so-phan-6558e727-bad7-4a5c-ade0-b388df2cbc8e.jpg?v=1630424978200",
                  reviewerName: "Trần Thị B",
                  reviewContent: "Chất lượng bình thường.",
                  rating: 3,
                  reviewTime: "2025-01-03 15:30",
            },
      ];

      // Cấu hình cột cho bảng
      const columns = [
            {
                  title: "Tên sản phẩm",
                  dataIndex: "productName",
                  key: "productName",
            },
            {
                  title: "Hình ảnh",
                  dataIndex: "productImg",
                  key: "productImg",
                  render: (_, product) => {
                        return (
                              <>
                                    <img
                                          alt="ảnh sản phẩm"
                                          src={product.productImg}
                                          className="img-item"
                                    ></img>
                              </>
                        );
                  },
            },
            {
                  title: "Tên người đánh giá",
                  dataIndex: "reviewerName",
                  key: "reviewerName",
            },
            {
                  title: "Nội dung đánh giá",
                  dataIndex: "reviewContent",
                  key: "reviewContent",
            },
            {
                  title: "Số sao",
                  dataIndex: "rating",
                  key: "rating",
                  render: (rating) => <Rate value={rating} disabled />,
            },
            {
                  title: "Thời gian đánh giá",
                  dataIndex: "reviewTime",
                  key: "reviewTime",
            },
            {
                  title: "Thao tác",
                  key: "actions",
                  render: (_, record) => (
                        <Button color="primary" variant="solid" onClick={() => setIsModalOpen(true)}>
                              Trả lời
                        </Button>
                  ),
            },
      ];

      // Hàm xử lý khi nhấn nút trả lời
      const handleReply = (record) => {
            console.log("Trả lời đánh giá:", record);
      };
      const [isModalOpen, setIsModalOpen] = useState(false);
      const [form] = Form.useForm();

      // Dữ liệu ví dụ
      const reviewData = {
            productName: "Hai số phận",
            reviewerName: "Nguyễn Văn A",
            reviewContent: "Sản phẩm chất lượng tốt, giao hàng nhanh.",
            stars: 4,
      };

      const handleOk = () => {
            form.validateFields()
                  .then((values) => {
                        console.log("Reply:", values.reply); // Gửi phản hồi trong console
                        form.resetFields();
                        setIsModalOpen(false);
                  })
                  .catch((info) => {
                        console.error("Validation Failed:", info);
                  });
      };

      const handleCancel = () => {
            setIsModalOpen(false);
      };
      return (
            <>
                  <h1>Quản lý đánh giá</h1>
                  <Tabs
                        items={CONTENT_DATA.reviewManage.tabArray}
                        size={"large"}
                        onTabClick={handleTabClick}
                  />
                  <SellerReviewToolBar
                        typeSearch={CONTENT_DATA.reviewManage.typeSearch}
                        categorySearch={
                              CONTENT_DATA.reviewManage.categorySearch
                        }
                        onSearch={onSearch}
                        handleChange={handleChange}
                  />
                  <Table
                        className="my-3"
                        dataSource={dataSource}
                        columns={columns}
                        pagination={{ pageSize: 5 }}
                  />
                  <Modal
                        title="Chi Tiết Đánh Giá"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        okText="Gửi"
                        cancelText="Hủy"
                  >
                        <div>
                              <p>
                                    <strong>Tên sản phẩm:</strong>{" "}
                                    {reviewData.productName}
                              </p>
                              <p>
                                    <strong>Tên người đánh giá:</strong>{" "}
                                    {reviewData.reviewerName}
                              </p>
                              <p>
                                    <strong>Nội dung đánh giá:</strong>{" "}
                                    {reviewData.reviewContent}
                              </p>
                              <p>
                                    <strong>Số sao:</strong>{" "}
                                    <Rate
                                          disabled
                                          defaultValue={reviewData.stars}
                                    />
                              </p>
                        </div>
                        <Form
                              form={form}
                              layout="vertical"
                              name="reply_form"
                              initialValues={{
                                    reply: "",
                              }}
                        >
                              <Form.Item
                                    label="Phản hồi đánh giá"
                                    name="reply"
                                    rules={[
                                          {
                                                required: true,
                                                message: "Vui lòng nhập phản hồi!",
                                          },
                                    ]}
                              >
                                    <Input.TextArea
                                          rows={3}
                                          placeholder="Nhập phản hồi của bạn tại đây"
                                    />
                              </Form.Item>
                        </Form>
                  </Modal>
            </>
      );
};

export default ReviewManagement;
