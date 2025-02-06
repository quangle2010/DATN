import React from "react";
import { Form, Input, Button, Upload, Typography, Card, Select } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Title } = Typography;

const ShopUpdate = () => {
      const [form] = Form.useForm();

      const handleFinish = (values) => {
            console.log("Thông tin shop:", values);
      };

      return (
            <div style={{ padding: "24px", maxWidth: "800px", margin: "auto" }}>
                  <Title
                        level={1}
                        style={{ textAlign: "center", marginBottom: "24px" }}
                  >
                        Trang cập nhật thông tin shop
                  </Title>

                  <Card>
                        <Form
                              form={form}
                              layout="vertical"
                              onFinish={handleFinish}
                              initialValues={{
                                    shopName: "Tên Shop Mặc Định",
                                    shopDescription: "Mô tả mặc định...",
                                    shopAddress:
                                          "123 Đường ABC, Quận 1, TP.HCM",
                              }}
                        >
                              {/* Tên Shop */}
                              <Form.Item
                                    name="shopName"
                                    label="Tên Shop"
                                    rules={[
                                          {
                                                required: true,
                                                message: "Vui lòng nhập tên shop!",
                                          },
                                    ]}
                              >
                                    <Input placeholder="Nhập tên shop" />
                              </Form.Item>

                              {/* Avatar */}
                              <Form.Item
                                    name="shopAvatar"
                                    label="Avatar Shop"
                                    valuePropName="fileList"
                                    getValueFromEvent={(e) =>
                                          Array.isArray(e) ? e : e?.fileList
                                    }
                              >
                                    <Upload
                                          listType="picture"
                                          maxCount={1}
                                          beforeUpload={() => false} // Tắt upload tự động
                                    >
                                          <Button icon={<UploadOutlined />}>
                                                Chọn ảnh
                                          </Button>
                                    </Upload>
                              </Form.Item>

                              {/* Địa chỉ Shop */}
                              <Form.Item
                                    name="city"
                                    label="Thành phố"
                                    rules={[
                                          {
                                                required: true,
                                                message: "Vui lòng chọn thành phố!",
                                          },
                                    ]}
                                    style={{ marginBottom: "8px" }}
                              >
                                    <Select placeholder="Chọn thành phố">
                                          <Select.Option value="hcm">
                                                Hồ Chí Minh
                                          </Select.Option>
                                          <Select.Option value="hn">
                                                Hà Nội
                                          </Select.Option>
                                          <Select.Option value="dn">
                                                Đà Nẵng
                                          </Select.Option>
                                    </Select>
                              </Form.Item>
                              <Form.Item
                                    name="district"
                                    label="Quận/Huyện"
                                    rules={[
                                          {
                                                required: true,
                                                message: "Vui lòng chọn quận/huyện!",
                                          },
                                    ]}
                                    style={{ marginBottom: "8px" }}
                              >
                                    <Select placeholder="Chọn quận/huyện">
                                          <Select.Option value="quan1">
                                                Quận 1
                                          </Select.Option>
                                          <Select.Option value="quan3">
                                                Quận 3
                                          </Select.Option>
                                          <Select.Option value="quan5">
                                                Quận 5
                                          </Select.Option>
                                    </Select>
                              </Form.Item>
                              <Form.Item
                                    name="ward"
                                    label="Phường/Xã"
                                    rules={[
                                          {
                                                required: true,
                                                message: "Vui lòng chọn phường/xã!",
                                          },
                                    ]}
                                    style={{ marginBottom: "8px" }}
                              >
                                    <Select placeholder="Chọn phường/xã">
                                          <Select.Option value="phuong1">
                                                Phường 1
                                          </Select.Option>
                                          <Select.Option value="phuong3">
                                                Phường 3
                                          </Select.Option>
                                          <Select.Option value="phuong5">
                                                Phường 5
                                          </Select.Option>
                                    </Select>
                              </Form.Item>
                              <Form.Item
                                    name="addressDetails"
                                    label="Địa chỉ chi tiết"
                                    rules={[
                                          {
                                                required: true,
                                                message: "Vui lòng nhập địa chỉ chi tiết!",
                                          },
                                    ]}
                              >
                                    <Input.TextArea
                                          rows={3}
                                          placeholder="Nhập địa chỉ chi tiết"
                                    />
                              </Form.Item>

                              {/* Mô tả Shop */}
                              <Form.Item
                                    name="shopDescription"
                                    label="Mô tả của Shop"
                                    rules={[
                                          {
                                                required: true,
                                                message: "Vui lòng nhập mô tả của shop!",
                                          },
                                    ]}
                              >
                                    <Input.TextArea
                                          rows={4}
                                          placeholder="Nhập mô tả của shop"
                                    />
                              </Form.Item>

                              {/* Nút lưu */}
                              <Form.Item>
                                    <Button
                                          type="primary"
                                          htmlType="submit"
                                          block
                                    >
                                          Cập nhật thông tin
                                    </Button>
                              </Form.Item>
                        </Form>
                  </Card>
            </div>
      );
};

export default ShopUpdate;
