import View from './View.js';

class ListButtonView extends View {
  _parentElement = document.querySelector('.btn-list');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    // const numPages = Math.ceil(
    //   this._data.results.length / this._data.resultsPerPage
    // );
    const numPages = 1200;

    //page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
            <button data-goto="${curPage + 1}" class="btn--inline">
                <span>Page ${curPage + 1}</span>
                <img src="/src/img/right-arrow.svg" alt="arrowRight"/>
            </button> 
          `;
    }
    //last page
    if (curPage === numPages && numPages > 1) {
      return `
            <button data-goto="${curPage - 1}" class="btn--inline">
                <img src="/src/img/left-arrow.svg" alt="arrowLeft"/>
                <span>Page ${curPage - 1}</span>
            </button>
          `;
    }
    //other page
    if (curPage < numPages) {
      return `
            <button data-goto="${curPage - 1}" class="btn--inline">
                <img src="/src/img/left-arrow.svg" alt="arrowLeft"/>
                <span>Page ${curPage - 1}</span>
            </button>
            <button data-goto="${curPage + 1}" class="btn--inline">
                <span>Page ${curPage + 1}</span>
                <img src="/src/img/right-arrow.svg" alt="arrowRight"/>
            </button> 
          `;
    }
    //page 1, no other pages
    return '';
  }
}

export default new ListButtonView();
