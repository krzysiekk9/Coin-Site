import {
  Chart,
  registerables,
} from "../../../node_modules/chart.js/dist/chart.js";
Chart.register(...registerables);

export const generateChart = function (data) {
  const coinChart = document.getElementById("coin-chart").getContext("2d");
  let gradient = coinChart.createLinearGradient(0, 0, 0, 300);

  gradient.addColorStop(1, "rgba(173,232,244,0.2)");
  gradient.addColorStop(0.5, "rgba(144,224,239,0.7)");
  gradient.addColorStop(0, "rgba(72,202,228)");

  new Chart(coinChart, {
    type: "line",
    data: {
      labels: data.datesValues,
      datasets: [
        {
          data: data.pricesValues,
          pointRadius: 0,
          borderColor: "#00b4d8",
          borderWidth: 1,
          backgroundColor: gradient,
          fill: true,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
};
