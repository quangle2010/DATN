import React from "react";
import { Table, Popconfirm, Tag, Space, Button, Tabs } from "antd";
import { CONTENT_DATA } from "../../assets/data/LayoutConfigData";
import { useNavigate } from "react-router-dom";
import SellerProductToolbar from "../../components/seller/SellerProductToolbar";

const onSearch = (value, _e, info) => console.log(info?.source, value);
const handleChange = (value) => {
      console.log(value);
};

const columns = [
      {
            key: "id",
            title: "Mã sản phẩm",
            dataIndex: "key",
            render: (text) => <span>{text}</span>,
      },
      {
            key: "img",
            title: "Hình ảnh",
            dataIndex: "img",
            render: (_, { img }) => (
                  <>
                        {img.map((i) => {
                              console.log(i);
                              return (
                                    <>
                                          <img
                                                alt="ảnh sản phẩm"
                                                src={i}
                                                className="img-item"
                                          ></img>
                                    </>
                              );
                        })}
                  </>
            ),
      },
      {
            key: "name",
            title: "Tên sản phẩm",
            dataIndex: "name",
      },
      {
            key: "category",
            title: "Thể loại",
            dataIndex: "category",
            render: (_, { tags }) => (
                  <>
                        {tags.map((tag) => {
                              console.log(tag);

                              return (
                                    <Tag color={tag.color} key={tag.title}>
                                          {tag.title}
                                    </Tag>
                              );
                        })}
                  </>
            ),
      },
      {
            key: "publisher",
            title: "Nhà xuất bản",
            dataIndex: "publisher",
      },
      {
            key: "action",
            title: "Action",
            render: (_, record) => (
                  <Space size="middle">
                        <Button
                              className="bg-warning"
                              variant="solid"
                              color="primary"
                        >
                              Sửa
                        </Button>
                        <Popconfirm
                              title="Xóa sản phẩm"
                              description="Bạn có chắc chắn muốn xóa?"
                              okText="Yes"
                              cancelText="No"
                        >
                              <Button variant="solid" color="danger">
                                    Xóa
                              </Button>
                        </Popconfirm>
                  </Space>
            ),
      },
];
const data = [
      {
            key: "1",
            name: "Hai số phận",
            img: [
                  "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
            ],
            tags: [
                  { title: "Kinh dị", color: "red" },
                  { title: "Hài", color: "orange" },
            ],
            publisher: "Nhà sách Kim Đồng",
      },
      {
            key: "2",
            name: "Cậu bé chăn cừu",
            img: [
                  "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
            ],
            tags: [
                  { title: "Kinh dị", color: "red" },
                  { title: "Hài", color: "orange" },
            ],
            publisher: "Nhà sách Phương Nam",
      },
      {
            key: "3",
            name: "Nhà giả kim",
            img: [
                  "https://www.copahost.com/blog/wp-content/uploads/2019/07/imgsize2.png",
            ],
            tags: [
                  { title: "Cổ tích", color: "cyan" },
                  { title: "Truyền thuyết", color: "lime" },
            ],
            publisher: "Nhà sách Fahasa",
      },
];
const handleTabClick = (key) => {
      console.log("Tab đã chọn: " + key);
};
function ProductManagement() {
      const navigate = useNavigate();
      const addProduct = () => {
            navigate("/seller/danh-sach-san-pham/add-product");
      };
      const operations = (
            <Button color="primary" variant="solid" onClick={addProduct}>
                  Thêm sản phẩm
            </Button>
      );

      return (
            <>
                  <h1>Danh sách sản phẩm</h1>
                  <Tabs
                        tabBarExtraContent={operations}
                        items={CONTENT_DATA.productManage.tabArray}
                        size={"large"}
                        onTabClick={handleTabClick}
                  />
                  <SellerProductToolbar
                        typeSearch={CONTENT_DATA.productManage.typeSearch}
                        categorySearch={
                              CONTENT_DATA.productManage.categorySearch
                        }
                        publisher={CONTENT_DATA.productManage.publisherSearch}
                        onSearch={onSearch}
                        handleChange={handleChange}
                        dateFormat={CONTENT_DATA.productManage.dateFormat}
                  />
                  <Table className="my-3" columns={columns} dataSource={data} />
                  ;
            </>
      );
}

export default ProductManagement;
