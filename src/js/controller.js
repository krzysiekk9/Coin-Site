import * as model from './model.js';
import coinView from './views/coinView.js';
import searchView from './views/searchView.js';
import listButtonView from './views/listButtonView.js';
import listView from './views/listView.js';

const controlChartView = async function () {
  try {
    coinView.renderSpinner();
    //getting chart data from API
    model.getAndDrawChart();
  } catch (err) {
    throw err;
  }
};

const controlCoinView = async function () {
  try {
    coinView.renderSpinner();
    //getting chart data from API
    await model.loadCoinData();

    //rendering chart
    coinView.render(model.state.coinDetails);
  } catch (err) {
    coinView.renderError();
  }
};

const controlCoinList = async function () {
  try {
    listView.renderSpinner();
    await model.loadCoinList();
    listView.render(model.createCoinList());
  } catch (err) {
    listView.renderError();
  }
};

const controlSelectedFromList = function (selectedCoin) {
  model.state.coinDetails.coinName = selectedCoin;
  controlCoinView();
  controlChartView();
};

const controlListBtn = function (goToPage) {
  listView.render(model.createCoinList(goToPage));
  listButtonView.render(model.state.coinList);
};

const controlSearchResults = async function () {
  try {
    coinView.renderSpinner();
    const query = searchView.getQuery().toLowerCase();

    if (!query) return;

    model.state.coinDetails.coinName = query;

    controlCoinView();
    controlChartView();
  } catch (err) {
    searchView.renderError(err.message);
  }
};

const init = function () {
  controlCoinView();
  controlChartView();
  controlCoinList();
  listView.addHandlerRender(controlSelectedFromList);
  listButtonView.render(model.state.coinList);
  listButtonView.addHandlerClick(controlListBtn);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
