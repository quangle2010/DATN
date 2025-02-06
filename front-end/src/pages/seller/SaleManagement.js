import React, { useState } from "react";
import {
      Col,
      Row,
      Modal,
      Form,
      Input,
      InputNumber,
      DatePicker,
      Switch,
} from "antd";

import SellerPromotionToolBar from "../../components/seller/SellerPromotionToolBar";
import { CONTENT_DATA } from "../../assets/data/LayoutConfigData";
import VoucherCard from "../../components/seller/VoucherCard";

const onSearch = (value, _e, info) => console.log(info?.source, value);
const handleChange = (value) => {
      console.log(value);
};
function SaleManagement() {
      const [isModalOpen, setIsModalOpen] = useState(false);

      const [form] = Form.useForm();

      const handleOk = () => {
            form.validateFields()
                  .then((values) => {
                        console.log("Form values:", values);
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
            <div>
                  <h1>Quản lý khuyến mãi</h1>
                  <SellerPromotionToolBar
                        typeSearch={CONTENT_DATA.voucherManage.typeSearch}
                        onSearch={onSearch}
                        handleChange={handleChange}
                        handleButton={() => setIsModalOpen(true)}
                  />
                  <Row>
                        <Col span={8}>
                              <VoucherCard span={8} />
                        </Col>
                        <Col span={8}>
                              <VoucherCard span={8} />
                        </Col>
                        <Col span={8}>
                              <VoucherCard span={8} />
                        </Col>
                  </Row>
                  <Modal
                        title="Thêm Voucher Mới"
                        open={isModalOpen}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        okText="Lưu"
                        cancelText="Hủy"
                  >
                        <Form
                              form={form}
                              layout="vertical"
                              name="voucher_form"
                              initialValues={{
                                    status: true, // Trạng thái mặc định là hoạt động
                              }}
                        >
                              <Form.Item
                                    label="Mã Voucher"
                                    name="voucherCode"
                                    rules={[
                                          {
                                                required: true,
                                                message: "Vui lòng nhập mã voucher!",
                                          },
                                    ]}
                              >
                                    <Input placeholder="Nhập mã voucher" />
                              </Form.Item>

                              <Form.Item
                                    label="Giá trị tối thiểu"
                                    name="minValue"
                                    rules={[
                                          {
                                                required: true,
                                                message: "Vui lòng nhập giá trị tối thiểu!",
                                          },
                                    ]}
                              >
                                    <InputNumber
                                          placeholder="Nhập giá trị tối thiểu"
                                          style={{ width: "100%" }}
                                          min={0}
                                    />
                              </Form.Item>

                              <Form.Item
                                    label="Giảm giá tối đa"
                                    name="maxDiscount"
                                    rules={[
                                          {
                                                required: true,
                                                message: "Vui lòng nhập giảm giá tối đa!",
                                          },
                                    ]}
                              >
                                    <InputNumber
                                          placeholder="Nhập giảm giá tối đa"
                                          style={{ width: "100%" }}
                                          min={0}
                                    />
                              </Form.Item>

                              <Form.Item
                                    label="Số lượng"
                                    name="quantity"
                                    rules={[
                                          {
                                                required: true,
                                                message: "Vui lòng nhập số lượng!",
                                          },
                                    ]}
                              >
                                    <InputNumber
                                          placeholder="Nhập số lượng"
                                          style={{ width: "100%" }}
                                          min={1}
                                    />
                              </Form.Item>

                              <Form.Item
                                    label="Mô tả"
                                    name="description"
                                    rules={[
                                          {
                                                required: true,
                                                message: "Vui lòng nhập mô tả!",
                                          },
                                    ]}
                              >
                                    <Input.TextArea
                                          rows={3}
                                          placeholder="Nhập mô tả voucher"
                                    />
                              </Form.Item>

                              <Form.Item
                                    label="Ngày hết hạn"
                                    name="expiryDate"
                                    rules={[
                                          {
                                                required: true,
                                                message: "Vui lòng chọn ngày hết hạn!",
                                          },
                                    ]}
                              >
                                    <DatePicker style={{ width: "100%" }} />
                              </Form.Item>

                              <Form.Item
                                    label="Trạng thái hoạt động"
                                    name="status"
                                    valuePropName="checked"
                              >
                                    <Switch
                                          checkedChildren="Hoạt động"
                                          unCheckedChildren="Ngừng hoạt động"
                                    />
                              </Form.Item>
                        </Form>
                  </Modal>
            </div>
      );
}

export default SaleManagement;
