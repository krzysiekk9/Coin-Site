import View from "./View.js";

class CoinView extends View {
  _parentElement = document.querySelector(".coin-details");
  _errorMessage = "Something went wrong... could not load chart data. ";

  _generateMarkup() {
    return `
    <div class="coin-header">
          <div class="coin-header__left">
            <div class="upper-row">
              <img src="${this._data.coinImage}" alt="coin-image" class="coin-image" />
              <h1 class="coin-name">${this._data.coinName}</h1>
            </div>
            <div class="bottom-row">
              <h1 class="coin-current-price--title">Current price:</h1>
              <h2 class="coin-current-price">$ ${this._data.currentPrice}</h2>
            </div>
          </div>
          <div class="coin-header__right">
            <div class="upper-row">
              <h1 class="coin-header__right--title">Market Cap:</h1>
              <h2 class="coin-marketcap">$ ${this._data.marketCap}</h2>
            </div>
            <div class="bottom-row">
              <h1 class="coin-header__right--title">Volume:</h1>
              <h2 class="coin-volume">$ ${this._data.totalVolume}</h2>
            </div>
          </div>
        </div>
        <div class="coin-chart-wrapper">
        <canvas id="coin-chart"></canvas>
        <div class="coin-chart-btn">
          <button class="btn-chart 1h">1H</button>
          <button class="btn-chart 4h">4H</button>
          <button class="btn-chart 1D">1D</button>
          </div>

          <div class="coin-description">
            <h1 class="description-title">Description</h1>
            <p class="description-text">${this._data.coinDescription}</p>
          </div>
        </div>`;
  }
}

export default new CoinView();
//<canvas id="coin-chart"></canvas>
/* <div class="coin-chart-btn">
<button class="btn-chart 1h">1h</button>
<button class="btn-chart 4h">4h</button>
<button class="btn-chart 1D">1D</button> */
