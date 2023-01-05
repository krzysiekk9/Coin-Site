import View from './View.js';
import previewView from './previewView.js';

class ListView extends View {
  _parentElement = document.querySelector('.coin-in-list');
  _errorMessage = 'Something went wrong... could not generate list. ';

  addHandlerRender(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const selectedCoin = e.target.closest('.preview-coin');

      if (!selectedCoin) return;

      const coinName = selectedCoin
        .querySelector('.preview-coin__name')
        .textContent.toLowerCase();

      handler(coinName);
    });
  }

  _generateMarkup() {
    return this._data
      .map((result) => previewView.render(result, false))
      .join('');
  }
}
export default new ListView();
