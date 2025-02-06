import React from "react";
import Chart from "react-apexcharts";

const SparkChartCard = ({
      id,
      series,
      labels,
      type,
      height,
      title,
      subtitle,
      tooltipFormat,
}) => {
      const chartOptions = {
            chart: {
                  id,
                  type: "area",
                  height,
                  sparkline: { enabled: true },
            },
            stroke: {
                  curve: "straight", // Đổi từ "straight" sang "smooth" để làm nét cong mượt hơn
                  width: 2, // Tăng độ dày nét vẽ
                  colors: ["#00A3E0"], // Màu sắc nổi bật cho nét vẽ
            },
            xaxis: {
                  categories: labels,
                  crosshairs: { width: 1 },
                  labels: {
                        show: false, // Ẩn nhãn trục x để giữ đồ thị gọn gàng
                  },
            },
            yaxis: {
                  min: 0,
                  labels: {
                        show: false, // Ẩn nhãn trục y
                  },
            },
            title: {
                  text: title,
                  offsetX: 0,
                  style: { fontSize: "24px", color: "#333" },
            },
            subtitle: {
                  text: subtitle,
                  offsetX: 0,
                  style: { fontSize: "14px", color: "#666" },
            },
            tooltip: {
                  x: { format: tooltipFormat },
            },
      };

      return (
            <div className="col-lg-4 mb-4">
                  <div className="card">
                        <div className="card-body">
                              <Chart
                                    options={chartOptions}
                                    series={series}
                                    type={type}
                                    height={height}
                              />
                        </div>
                  </div>
            </div>
      );
};

export default SparkChartCard;
