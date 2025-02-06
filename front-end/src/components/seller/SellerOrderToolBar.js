import React from "react";
import { Space, DatePicker, Select, Input, Button, Tag, Card } from "antd";
import { TbFilterOff } from "react-icons/tb";

const { Search } = Input;
const { RangePicker } = DatePicker;

const SellerOrderToolBar = ({ typeSearch, onSearch, handleChange, dateFormat }) => {
      return (
            <Card className="seller-toolbar">
                  <Space direction="horizontal" size={20} wrap="true">
                        <RangePicker size="middle" format={dateFormat} />
                        <Select
                              className="seller-select"
                              size="middle"
                              labelInValue
                              defaultValue={typeSearch[0]}
                              onChange={handleChange}
                              options={typeSearch}
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
      );
};

export default SellerOrderToolBar;
