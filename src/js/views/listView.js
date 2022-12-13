import View from "./View.js";
import previewView from "./previewView.js"

class ListView extends View {
  _parentElement = document.querySelector(".coin-in-list");
  _errorMessage = "Something went wrong... could not generate list. ";

  _generateMarkup() {
    return this._data.map(result => 
      previewView.render(result,false)
      ).join('')
  }
}
export default new ListView();
