class SearchView {
  _parentElement = document.querySelector('.search');
  _errorMessage = 'Oops, could not find searched phrase';

  getQuery() {
    const query = this._parentElement.querySelector('.search__field').value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._parentElement.querySelector('.search__field').value = '';
  }

  addHandlerSearch(handler) {
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler(e);
    });
  }
}

export default new SearchView();
