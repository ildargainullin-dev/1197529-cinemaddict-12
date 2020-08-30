import {createElement} from "../utils.js";

const createFooterStatisticsTemplate = (filmCount) => {
  return (
    `<p>${filmCount} movies inside</p>`
  );
};

export default class FooterStatistic {
  constructor(filmsLength) {
    this._filmsLength = filmsLength;
    this._element = null;
  }

  getTemplate() {
    return createFooterStatisticsTemplate(this._filmsLength);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
