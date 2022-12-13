
export default class View {
  _data;
  //   _errorMessage = "Oops, something went wrong!";

  render(data, render = true) {
    if (!data || (Array.isArray(data) && data.length === 0)) return this.renderError();

    this._data = data;

    const markup = this._generateMarkup();

    if (!render) return markup;
    
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  _clear() {
    this._parentElement.innerHTML = "";
  }

  renderError(message = this._errorMessage) {
    const markup = `
        <div class="error">
            <div>
                <img src="./src/img/error.png" alt="errorIcon" />
                <p>${message}</p>
            </div>
            <button class="close-error"></button>
        </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }

  renderSpinner() {
    const markup = `
        <div class="spinner">
          <svg>
            <use href="./src/img/spinner.svg"></use>
          </svg>
        </div>
    `;
    this._clear();
    this._parentElement.insertAdjacentHTML("afterbegin", markup);
  }
}
