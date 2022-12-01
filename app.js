import { Chart, registerables } from "./node_modules/chart.js/dist/chart.js";
Chart.register(...registerables);

const searchBtn = document.querySelector(".search-btn");
const coinList = document.querySelector(".coin-list");
const coinListTile = document.querySelector(".coin-in-list__title");
const coinListSymbol = document.querySelector(".coin-in-list__symbol");
const coinChart = document.getElementById("coin-chart").getContext("2d");
const coinMarketCap = document.querySelector(".coin-marketcap");
const coinVolume = document.querySelector(".coin-volume");
const coinImage = document.querySelector(".coin-image");
const coinName = document.querySelector(".coin-name");
const coinCurrentPrice = document.querySelector(".coin-current-price");
const coinDescription = document.querySelector(".coin-description");

const craateObject = function (data) {
  console.log(data);
};

searchBtn.addEventListener("click", function () {
  console.log("cos");
});

const search = async function () {
  try {
    const data = await fetch("https://api.coingecko.com/api/v3/ping").then(
      (response) => response.json()
    );
    craateObject(data);
  } catch (err) {
    console.log(err);
  }
};
// search();

const coinListMarkup = function (data) {
  console.log(data[1]);

  for (let i = 0; i < 10; i++) {
    const markup = `
     
      <li>
          <a class="preview-coin" href="#">
            <p class="preview-coin__title">${data[i].symbol.toUpperCase()}</p>
            <p class="preview-coin__name">${data[i].name}</p>
          </a>
      </li>
  `;
    coinList.insertAdjacentHTML("afterbegin", markup);
  }
};

const getCoinList = async function () {
  try {
    const data = await fetch(
      "https://api.coingecko.com/api/v3/coins/list"
    ).then((response) => response.json());
    coinListMarkup(data);
  } catch (err) {
    console.log(err);
  }
};

// getCoinList();

const generateChartMarkup = function (data) {
  const prices = data.prices;
  console.log(data.prices);

  const xValues = prices.map((cur) => cur.shift());
  const yValues = prices.flat();

  const datesArr = [];

  xValues.map((cur) => {
    const date = new Date(cur);
    cur = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} `;
    datesArr.push(cur);
  });

  let gradient = coinChart.createLinearGradient(0, 0, 0, 300);

  gradient.addColorStop(1, "rgba(173,232,244,0.2)");
  gradient.addColorStop(0.5, "rgba(144,224,239,0.7)");
  gradient.addColorStop(0, "rgba(72,202,228)");

  new Chart(coinChart, {
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
};

const getChartData = async function () {
  try {
    const data = await fetch(
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=max&interval=daily"
    ).then((response) => response.json());
    generateChartMarkup(data);
    // setMarketCap(data);
    // setVolume(data);
  } catch (err) {
    console.log(err);
  }
};

getChartData();

const setDescription = function (data) {
  coinDescription.insertAdjacentHTML("beforeend", data.description.en);
};

const setCurrentPrice = function (data) {
  coinCurrentPrice.textContent = ` $ ${data.market_data.current_price.usd.toLocaleString()}`;
};

const setMarketCap = function (data) {
  coinMarketCap.textContent = ` $ ${data.market_data.market_cap.usd.toLocaleString()}`;
};

const setVolume = function (data) {
  coinVolume.textContent = ` $ ${data.market_data.total_volume.usd.toLocaleString()}`;
};

const setImage = function (data) {
  coinImage.src = data.image.large;
};
const setCoinName = function (data) {
  coinName.textContent = data.name;
};
const getCoinDetails = async function () {
  try {
    const data = await fetch(
      "https://api.coingecko.com/api/v3/coins/1inch"
    ).then((response) => response.json());
    console.log(data);
    setImage(data);
    setCoinName(data);
    setCurrentPrice(data);
    setMarketCap(data);
    setVolume(data);
    setDescription(data);
  } catch (err) {
    console.log(err);
  }
};

getCoinDetails();
