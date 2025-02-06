import React, { useState } from "react";
import { Modal, Form, Input, Steps, Button, Select } from "antd";

const { Step } = Steps;

const OrderDetailsModal = ({ visible, onCancel, orderDetails }) => {
      const [currentStep, setCurrentStep] = useState(0);
      const [form] = Form.useForm();

      const handleNext = () => {
            setCurrentStep((prev) => prev + 1);
      };

      const handlePrev = () => {
            setCurrentStep((prev) => prev - 1);
      };

      const handleFinish = (values) => {
            console.log("Updated Address:", values.address);
            onCancel();
      };

      return (
            <Modal
                  title="Chi tiết đơn hàng"
                  visible={visible}
                  onCancel={onCancel}
                  footer={null}
                  width={600}
            >
                  {/* Steps */}
                  <Steps current={currentStep} style={{ marginBottom: "24px" }}>
                        <Step title="Thông tin đơn hàng" />
                        <Step title="Xác nhận địa chỉ" />
                  </Steps>

                  {/* Form */}
                  <Form
                        form={form}
                        layout="vertical"
                        initialValues={orderDetails}
                        onFinish={handleFinish}
                  >
                        {currentStep === 0 && (
                              <>
                                    <Form.Item
                                          label="ID Đơn hàng"
                                          name="orderId"
                                    >
                                          <Input disabled />
                                    </Form.Item>
                                    <Form.Item label="Sản phẩm" name="product">
                                          <Input disabled />
                                    </Form.Item>
                                    <Form.Item label="Giá tiền" name="price">
                                          <Input disabled />
                                    </Form.Item>
                                    <Form.Item
                                          label="Ngày đặt hàng"
                                          name="orderDate"
                                    >
                                          <Input disabled />
                                    </Form.Item>
                              </>
                        )}

                        {currentStep === 1 && (
                              <Form.Item label="Địa chỉ">
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
                              </Form.Item>
                        )}

                        {/* Navigation Buttons */}
                        <div
                              style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginTop: "24px",
                              }}
                        >
                              {currentStep > 0 && (
                                    <Button onClick={handlePrev}>
                                          Quay lại
                                    </Button>
                              )}
                              {currentStep < 1 && (
                                    <Button type="primary" onClick={handleNext}>
                                          Tiếp tục
                                    </Button>
                              )}
                              {currentStep === 1 && (
                                    <Button type="primary" htmlType="submit">
                                          Lưu
                                    </Button>
                              )}
                        </div>
                  </Form>
            </Modal>
      );
};

export default OrderDetailsModal;
