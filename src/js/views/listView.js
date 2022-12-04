import View from "./View.js";

class ListView extends View {
  _parentElement = document.querySelector(".coin-list");
  _errorMessage = "Something went wrong... could not generate list. ";

  _generateMarkup() {
    return `
    <li>
        <a class="preview-coin" href="#">
            <p class="preview-coin__title">${this._data.symbol}</p>
            <p class="preview-coin__name">${this._data.name}</p>
        </a>
    </li>
    `;
  }
}
export default new ListView();
