import View from "./View.js";

class PreviewView extends View{
    _parentElement = '';

    _generateMarkup(){
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

export default new PreviewView();