import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

const ApexChart = ({ array }) => {
  const [state, setState] = useState({
    series: array,

    options: {
      chart: {
        type: "donut",
        width: 50,
        height: 50,
      },
      plotOptions: {
        donut: {
          size: "150%",
          labels: {
            show: false,
            name: {
              show: true,
              fontSize: "22px",
              fontWeight: 600,
            },
            value: {
              show: false,
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: false,
            },
          },
        },
      ],
      legend: {
        position: "right",
        offsetY: 0,
        height: 0,
      },
      annotations: {
        position: "front",
        points: [
          {
            x: "50%",
            y: "50%",
            marker: {
              size: 0,
            },
            label: {
              text: "0",
              style: {
                fontSize: "24px",
                fontWeight: "bold",
                color: "#333",
                background: "transparent",
              },
            },
          },
        ],
      },
    },
  });

  const calculateTotal = () => {
    return state.series.reduce((acc, value) => acc + value, 0);
  };

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      options: {
        ...prevState.options,
        annotations: {
          ...prevState.options.annotations,
          points: [
            {
              ...prevState.options.annotations.points[0],
              label: {
                ...prevState.options.annotations.points[0].label,
                text: calculateTotal(),
              },
            },
          ],
        },
      },
    }));
  }, [state.series]);

  return (
    <div>
      <div className="chart-wrap">
        <div id="chart">
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="donut"
            width={280}
          />
        </div>
      </div>
    </div>
  );
};

export default ApexChart;
