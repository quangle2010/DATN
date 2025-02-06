import React from "react";
import { Space, Select, Button, Tag, Card, Input } from "antd";
import { TbFilterOff } from "react-icons/tb";
const { Search } = Input;
function SellerPromotionToolBar({
      typeSearch,
      categorySearch,
      handleButton,
      onSearch,
      handleChange,
}) {
      return (
            <>
                  <Card className="seller-toolbar">
                        <Space
                              className="d-flex justify-content-between"
                              direction="horizontal"
                              size={20}
                              wrap="true"
                        >
                              <Select
                                    className="seller-select"
                                    size="middle"
                                    labelInValue
                                    defaultValue={typeSearch[0]}
                                    onChange={handleChange}
                                    options={typeSearch}
                              />
                              <Button color="primary" variant="solid" onClick={handleButton}>
                                    Thêm khuyến mãi
                              </Button>
                              <Search
                                    className="seller-search"
                                    placeholder="Tìm kiếm"
                                    allowClear
                                    onSearch={onSearch}
                                    enterButton
                                    size="middle"
                              />
                        </Space>
                        <Space className="mt-4">
                              <Tag color="green">1/1/2025 - 2/1/2025</Tag>
                              <Tag color="orange">Kinh dị</Tag>
                              <Button color="danger" variant="text">
                                    <TbFilterOff />
                              </Button>
                        </Space>
                  </Card>
            </>
      );
}

export default SellerPromotionToolBar;
