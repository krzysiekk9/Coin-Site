import {
  API_URL_CHART,
  API_URL_DATA,
  API_URL_LIST,
  RES_PER_PAGE,
} from "./config.js";
import { AJAX } from "./helpers.js";
import {
  Chart,
  registerables,
} from "../../../node_modules/chart.js/dist/chart.js";
Chart.register(...registerables);

export const state = {
  chart: {
    datesValues: [],
    pricesValues: [],
  },
  coinDetails: {
    coinName: "",
    currentPrice: 0,
    marketCap: 0,
    totalVolume: 0,
    coinImage: "",
    coinDescription: "",
  },
  coinList: {
    page: 1,
    resultsPerPage: RES_PER_PAGE,
    results: [],
  },
};

const createChartData = function (data) {
  const datesValues = data.prices.map((cur) => cur.shift());
  const pricesValues = data.prices.flat();

  const datesArr = [];

  datesValues.map((cur) => {
    const date = new Date(cur);
    cur = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} `;
    datesArr.push(cur);
  });

  state.chart.datesValues = datesArr;
  state.chart.pricesValues = pricesValues;
};

export const loadChartData = async function () {
  try {
    const data = await AJAX(API_URL_CHART);
    createChartData(data);
  } catch (err) {
    throw err;
  }
};

const createCoinData = function (data) {
  return {
    coinName: data.name,
    currentPrice: data.market_data.current_price.usd.toLocaleString(),
    marketCap: data.market_data.market_cap.usd.toLocaleString(),
    totalVolume: data.market_data.total_volume.usd.toLocaleString(),
    coinImage: data.image.large,
    coinDescription: data.description.en,
  };
};

export const loadCoinData = async function () {
  try {
    const data = await AJAX(API_URL_DATA);
    // console.log(data);
    state.coinDetails = createCoinData(data);
  } catch (err) {
    console.log(err);
  }
};

export const createCoinList = function (page = state.coinList.page) {
  state.coinList.page = page;

  const start = (page - 1) * state.coinList.resultsPerPage; //0;
  const end = page * state.coinList.resultsPerPage; //9

  // console.log(state.coinList.results.slice(start, end));
  return state.coinList.results.slice(start,end)
};

export const loadCoinList = async function () {
  try {
    state.coinList.results = await AJAX(API_URL_LIST);
  } catch (err) {
    console.log(err);
  }
};

// loadCoinList();
