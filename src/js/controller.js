import * as model from "./model.js";
import chartView from "./views/chartView.js";
import coinView from "./views/coinView.js";
import { generateChart } from "./views/generateChart.js";
import listView from "./views/listView.js";

const controlChartView = async function () {
  try {
    // chartView.renderSpinner();
    //getting chart data from API
    await model.loadChartData();

    //rendering chart
    // chartView._generateMarkup(model.state.chart);
    generateChart(model.state.chart);

    // model.createChart(model.state.chart);
    // generateChart(model.state.chart);
  } catch (err) {
    console.log(err);
  }
};

const controlCoinView = async function () {
  try {
    coinView.renderSpinner();
    //getting chart data from API
    await model.loadCoinData();

    //rendering chart
    coinView.render(model.state.coinDetails);
    // console.log(model.state);
  } catch (err) {
    console.log(err);
  }
};

const controlCoinList = async function () {
  try {
    await model.loadCoinList();
    listView.render(model.createCoinList());
  } catch (err) {
    console.log(err);
  }
};

const init = function () {
  controlCoinView();
  controlChartView();
  controlCoinList();
};

init();
