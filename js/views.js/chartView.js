class ChartView extends View {
  _parentElement = document.getElementById("coin-chart");
  _errorMessage = "Something went wrong... could not generate chart. ";

  generateMarkup(datesArr, yValues) {
    let gradient = this._parentElement.createLinearGradient(0, 0, 0, 300);

    gradient.addColorStop(1, "rgba(173,232,244,0.2)");
    gradient.addColorStop(0.5, "rgba(144,224,239,0.7)");
    gradient.addColorStop(0, "rgba(72,202,228)");

    return new Chart(this._parentElement, {
      type: "line",
      data: {
        labels: datesArr,
        datasets: [
          {
            data: yValues,
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
  }
}

export default new ChartView();
