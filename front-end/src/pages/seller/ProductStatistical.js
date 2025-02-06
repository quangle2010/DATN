import React, { useState } from "react";
import { Checkbox, Typography, Row, Col, Table } from "antd";
import CollumnChart from "../../components/seller/CollumnChartCard";

const { Title } = Typography;

const ProductStatistical = () => {
      const [showChart, setShowChart] = useState(true);
      const [showTable, setShowTable] = useState(false);

      const sampleData = {
            soldProductEachDay: [30, 50, 45, 60, 40, 55, 70],
            productQuantity: [39, 98, 21, 33, 16, 28, 71],
            soldProductDate: [
                  "22/01/2024",
                  "23/01/2024",
                  "24/01/2024",
                  "25/01/2024",
                  "26/01/2024",
                  "27/01/2024",
                  "28/01/2024",
            ],
            soldProduct: [
                  "Áo thun",
                  "Quần jeans",
                  "Váy",
                  "Giày",
                  "Mũ",
                  "Túi xách",
                  "Đồng hồ",
            ],
      };
      const columns = [
            { title: "Ngày", dataIndex: "date", key: "date" },
            { title: "Sản phẩm", dataIndex: "product", key: "product" },
            {
                  title: "Số lượng bán",
                  dataIndex: "sold_quantity",
                  key: "sold_quantity",
            },
            {
                  title: "Số lượng còn lại",
                  dataIndex: "quantity",
                  key: "quantity",
            },
            { title: "Chi tiết", dataIndex: "description", key: "description" },
      ];
      const tableData = sampleData.soldProductDate.map((date, index) => ({
            key: index,
            date,
            quantity: sampleData.soldProductEachDay[index],
            sold_quantity: sampleData.soldProduct[index],
            product: sampleData.soldProduct[index],
      }));

      return (
            <>
                  <Title level={1}>Thống kê sản phẩm đã bán</Title>
                  <Row gutter={[16, 16]}>
                        <Col>
                              <Checkbox
                                    checked={showChart}
                                    onChange={(e) =>
                                          setShowChart(e.target.checked)
                                    }
                              >
                                    Hiển thị biểu đồ
                              </Checkbox>
                        </Col>
                        <Col>
                              <Checkbox
                                    checked={showTable}
                                    onChange={(e) =>
                                          setShowTable(e.target.checked)
                                    }
                              >
                                    Hiển thị bảng
                              </Checkbox>
                        </Col>
                  </Row>
                  {showChart && (
                        <>
                              <CollumnChart
                                    soldProductEachDay={
                                          sampleData.soldProductEachDay
                                    }
                                    soldProductDate={sampleData.soldProductDate}
                                    title={"Sản phẩm đã bán"}
                                    hoverTitle={"Sản phẩm"}
                              />
                              <CollumnChart
                                    soldProductEachDay={
                                          sampleData.soldProductEachDay
                                    }
                                    soldProductDate={sampleData.soldProduct}
                                    title={"Sản phẩm còn lại"}
                                    hoverTitle={"Sản phẩm"}
                              />
                        </>
                  )}
                  {showTable && (
                        <Table
                              style={{ marginTop: "20px" }}
                              columns={columns}
                              dataSource={tableData}
                              pagination={{ pageSize: 5 }}
                              bordered
                        />
                  )}
            </>
      );
};

export default ProductStatistical;
