import React from "react";
import { Card } from "antd";
import Chart from "react-apexcharts";

const CollumnChart = ({
      soldProductEachDay,
      soldProductDate,
      title,
      hoverTitle,
}) => {
      const options = {
            chart: { type: "bar", height: 350 },
            plotOptions: {
                  bar: {
                        borderRadius: 10,
                        dataLabels: { position: "top" },
                  },
            },
            dataLabels: {
                  enabled: true,
                  formatter: (val) => `${val} ${hoverTitle}`,
                  offsetY: -20,
                  style: { fontSize: "12px", colors: ["#304758"] },
            },
            xaxis: {
                  categories: soldProductDate,
                  labels: { style: { fontSize: "14px", fontWeight: "bold" } },
            },
            title: {
                  text: title,
                  floating: true,
                  offsetY: 10,
                  align: "center",
                  style: { color: "#444", fontSize: "16px" },
            },
      };

      const series = [{ name: title, data: soldProductEachDay }];

      return (
            <Card style={{ marginTop: "20px" }}>
                  <Chart
                        options={options}
                        series={series}
                        type="bar"
                        height={350}
                  />
            </Card>
      );
};

export default CollumnChart;
