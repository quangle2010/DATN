import React from "react";
import { Form, Input, Select, Button, Upload, Row, Col, Switch } from "antd";
import { ArrowLeftOutlined, UploadOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const AddProductPage = () => {
      const navigate = useNavigate();

      const handleFinish = (values) => {
            console.log("Submitted values:", values);
            // Xử lý logic lưu sản phẩm ở đây
      };

      return (
            <div style={{ padding: 24 }}>
                  <div
                        style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: 24,
                        }}
                  >
                        <h1>Thêm sản phẩm</h1>
                        <Button
                              icon={<ArrowLeftOutlined />}
                              onClick={() => navigate(-1)}
                        >
                              Quay lại
                        </Button>
                  </div>

                  <Form
                        layout="vertical"
                        onFinish={handleFinish}
                        initialValues={{ status: "active" }}
                  >
                        <Form.Item
                              label="Tên sản phẩm"
                              name="productName"
                              rules={[
                                    {
                                          required: true,
                                          message: "Vui lòng nhập tên sản phẩm",
                                    },
                              ]}
                        >
                              <Input placeholder="Nhập tên sản phẩm" />
                        </Form.Item>

                        <Form.Item
                              label="Hình ảnh"
                              name="image"
                              valuePropName="fileList"
                              getValueFromEvent={(e) =>
                                    Array.isArray(e) ? e : e?.fileList
                              }
                              rules={[
                                    {
                                          required: true,
                                          message: "Vui lòng tải lên hình ảnh",
                                    },
                              ]}
                        >
                              <Upload
                                    beforeUpload={() => false}
                                    listType="picture"
                              >
                                    <Button icon={<UploadOutlined />}>
                                          Tải lên
                                    </Button>
                              </Upload>
                        </Form.Item>

                        <Form.Item
                              label="Giá"
                              name="price"
                              rules={[
                                    {
                                          required: true,
                                          message: "Vui lòng nhập giá",
                                    },
                              ]}
                        >
                              <Input
                                    type="number"
                                    placeholder="Nhập giá sản phẩm"
                              />
                        </Form.Item>

                        <Form.Item
                              label="Thể loại"
                              name="category"
                              rules={[
                                    {
                                          required: true,
                                          message: "Vui lòng chọn thể loại",
                                    },
                              ]}
                        >
                              <Select placeholder="Chọn thể loại">
                                    <Option value="electronics">Điện tử</Option>
                                    <Option value="fashion">Thời trang</Option>
                                    <Option value="books">Sách</Option>
                              </Select>
                        </Form.Item>

                        <Form.Item
                              label="Nhà xuất bản"
                              name="publisher"
                              rules={[
                                    {
                                          required: true,
                                          message: "Vui lòng chọn nhà xuất bản",
                                    },
                              ]}
                        >
                              <Select placeholder="Chọn nhà xuất bản">
                                    <Option value="publisher1">
                                          Nhà xuất bản 1
                                    </Option>
                                    <Option value="publisher2">
                                          Nhà xuất bản 2
                                    </Option>
                              </Select>
                        </Form.Item>

                        <Form.Item
                              label="Số lượng"
                              name="quantity"
                              rules={[
                                    {
                                          required: true,
                                          message: "Vui lòng nhập số lượng",
                                    },
                              ]}
                        >
                              <Input
                                    type="number"
                                    placeholder="Nhập số lượng"
                              />
                        </Form.Item>

                        <Form.Item label="Kích thước">
                              <Row gutter={16}>
                                    <Col span={8}>
                                          <Form.Item name="sizeX" noStyle>
                                                <Input
                                                      placeholder="X"
                                                      type="number"
                                                />
                                          </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                          <Form.Item name="sizeY" noStyle>
                                                <Input
                                                      placeholder="Y"
                                                      type="number"
                                                />
                                          </Form.Item>
                                    </Col>
                                    <Col span={8}>
                                          <Form.Item name="sizeZ" noStyle>
                                                <Input
                                                      placeholder="Z"
                                                      type="number"
                                                />
                                          </Form.Item>
                                    </Col>
                              </Row>
                        </Form.Item>

                        <Form.Item
                              label="Trạng thái hoạt động"
                              name="status"
                              rules={[
                                    {
                                          required: true,
                                          message: "Vui lòng chọn trạng thái",
                                    },
                              ]}
                        >
                              <Switch
                                    checkedChildren="Hoạt động"
                                    unCheckedChildren="Ngừng hoạt động"
                              />
                        </Form.Item>

                        <Form.Item>
                              <Button type="primary" htmlType="submit">
                                    Thêm sản phẩm
                              </Button>
                        </Form.Item>
                  </Form>
            </div>
      );
};

export default AddProductPage;
