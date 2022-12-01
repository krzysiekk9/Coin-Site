import { API_URL_CHART } from "./config";
import { AJAX } from "./helpers";

export const state = {
  chart: {
    xValues: [],
    yValues: [],
  },
  coinName: "",
  currentPrice: 0,
  marketCap: 0,
  totalVolume: 0,
  coinImage: "",
};

const createChartData = function (data) {
  state.chart.xValues = data.prices.map((cur) => cur.shift());
  state.chart.yValues = data.prices.flat();
};

const loadChartData = async function () {
  try {
    const data = await AJAX(API_URL_CHART);

    const xValues = data.prices.map((cur) => cur.shift());
    const datesArr = data.prices.flat();

    const yValues = [];

    xValues.map((cur) => {
      const date = new Date(cur);
      cur = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()} `;
      datesArr.push(cur);
    });
  } catch (err) {
    throw err;
  }
};
