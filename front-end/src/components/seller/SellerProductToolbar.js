import React from "react";
import { Space, Select, Button, Tag, Card, Input } from "antd";
import { TbFilterOff } from "react-icons/tb";
const { Search } = Input;
function SellerProductToolbar({
      typeSearch,
      categorySearch,
      publisher,
      onSearch,
      handleChange,
      dateFormat,
}) {
      return (
            <>
                  <Card className="seller-toolbar">
                        <Space direction="horizontal" size={20} wrap="true">
                              <Select
                                    className="seller-select"
                                    size="middle"
                                    labelInValue
                                    defaultValue={typeSearch[0]}
                                    onChange={handleChange}
                                    options={typeSearch}
                              />
                              <Select
                                    className="seller-select"
                                    size="middle"
                                    labelInValue
                                    defaultValue={"Chọn thể loại"}
                                    onChange={handleChange}
                                    options={categorySearch}
                              />
                              <Select
                                    className="seller-select"
                                    size="middle"
                                    labelInValue
                                    defaultValue={"Chọn nhà xuất bản"}
                                    onChange={handleChange}
                                    options={publisher}
                              />
                              <Search
                                    className="seller-search"
                                    placeholder="input search text"
                                    allowClear
                                    onSearch={onSearch}
                                    enterButton
                                    size="middle"
                              />
                        </Space>
                        <Space className="mt-4">
                              <Tag color="green">1/1/2025 - 2/1/2025</Tag>
                              <Tag color="cyan">Mã đơn hàng</Tag>
                              <Tag color="blue">Input Search</Tag>
                              <Button color="danger" variant="text">
                                    <TbFilterOff />
                              </Button>
                        </Space>
                  </Card>
            </>
      );
}

export default SellerProductToolbar;
