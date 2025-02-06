import React from "react";
import { DatePicker } from "antd";
import SparkChartCard from "../../components/seller/SparkChartCard";
import CollumnChart from "../../components/seller/CollumnChartCard";

const { RangePicker } = DatePicker;

function RevenueManagement() {
      const dateFormat = "YY/mm/dd";
      const sampleData1 = {
            id: "sparkline-example",
            series: [
                  {
                        name: "Tổng doanh thu",
                        data: [
                              10000, 30000, 50000, 400000, 60000, 80000, 100000,
                        ],
                  },
            ],
            labels: [
                  "22/01/2024",
                  "23/01/2024",
                  "24/01/2024",
                  "25/01/2024",
                  "26/01/2024",
                  "27/01/2024",
                  "28/01/2024",
            ],
            type: "line",
            height: 150,
            title: "43,500,000 đ",
            subtitle: "Doanh thu",
            tooltipFormat: "MMM",
      };
      const sampleData2 = {
            id: "sparkline-example",
            series: [
                  {
                        name: "Đơn thành công",
                        data: [1, 13, 15, 4, 6, 8, 10],
                  },
            ],
            labels: [
                  "22/01/2024",
                  "23/01/2024",
                  "24/01/2024",
                  "25/01/2024",
                  "26/01/2024",
                  "27/01/2024",
                  "28/01/2024",
            ],
            type: "line",
            height: 150,
            title: "120",
            subtitle: "Đơn thành công",
            tooltipFormat: "MMM",
      };
      const sampleData3 = {
            id: "sparkline-example",
            series: [
                  {
                        name: "Đơn thất bại",
                        data: [1, 3, 5, 4, 5],
                  },
            ],
            labels: [
                  "22/01/2024",
                  "23/01/2024",
                  "24/01/2024",
                  "25/01/2024",
                  "26/01/2024",
                  "27/01/2024",
                  "28/01/2024",
            ],
            type: "line",
            height: 150,
            title: "12",
            subtitle: "Đơn thất bại",
            tooltipFormat: "MMM",
      };
      const collumnData = {
            soldProductEachDay: [30, 50, 45, 60, 40, 55, 70],
            soldProductDate: [
                  "22/01/2024",
                  "23/01/2024",
                  "24/01/2024",
                  "25/01/2024",
                  "26/01/2024",
                  "27/01/2024",
                  "28/01/2024",
            ],
            soldProductDescription: [
                  "30 cái - Áo thun",
                  "50 cái - Quần jeans",
                  "45 cái - Váy",
                  "60 cái - Giày",
                  "40 cái - Mũ",
                  "55 cái - Túi xách",
                  "70 cái - Đồng hồ",
            ],
            title: "Tổng đơn",
            hoverTitle: "đơn",
            maxHeight: 100,
      };
      return (
            <>
                  <h1>Thống kê doanh thu</h1>
                  <RangePicker
                        size="middle"
                        format={dateFormat}
                        className="my-3 w-100"
                  />
                  <div className="row">
                        <SparkChartCard {...sampleData1} />
                        <SparkChartCard {...sampleData2} />
                        <SparkChartCard {...sampleData3} />
                  </div>
                  <div>
                        <CollumnChart {...collumnData} />
                  </div>
            </>
      );
}

export default RevenueManagement;
