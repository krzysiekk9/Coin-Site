import errorPNG from '../../img/error.png';
import spinnerPNG from '../../img/spinner.svg';

export default class View {
  _data;
  //   _errorMessage = "Oops, something went wrong!";

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0))
      return this.renderError();

    this._data = data;

    const markup = this._generateMarkup();

    if (!render) return markup;

    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  _closeError() {
    setTimeout(() => {
      const el = document.querySelector('.error');
      el.classList.add('hidden');
    }, 3000);
  }

  renderError(message = this._errorMessage) {
    const markup = `
        <div class="error">
            <div>
                <img src="${errorPNG}" alt="errorIcon" />
                <p>${message}</p>
            </div>
        </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
    this._closeError();
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
          <img src="${spinnerPNG}" alt="spinner" class="spinner">
        </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
