import React from "react";
import { Table } from "antd";

const ProductTable = ({ data }) => {
  const columns = [
    { title: "Ngày", dataIndex: "date", key: "date" },
    { title: "Sản phẩm", dataIndex: "quantity", key: "quantity" },
    { title: "Số lư", dataIndex: "description", key: "description" },
    { title: "Chi tiết", dataIndex: "description", key: "description" },
    { title: "Chi tiết", dataIndex: "description", key: "description" },


  ];

  return (
    <Table
      style={{ marginTop: "20px" }}
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 5 }}
      bordered
    />
  );
};

export default ProductTable;
