export const API_URL_CHART = function (serchedCoin, interval = 'daily') {
  return `https://api.coingecko.com/api/v3/coins/${serchedCoin}/market_chart?vs_currency=usd&days=max&interval=${interval}`;
};

export const API_URL_DATA = function (searchedCoin) {
  return `https://api.coingecko.com/api/v3/coins/${searchedCoin}`;
};
export const API_URL_LIST = 'https://api.coingecko.com/api/v3/coins/list';
export const TIMEOUT_SEC = 10;
export const RES_PER_PAGE = 10;
