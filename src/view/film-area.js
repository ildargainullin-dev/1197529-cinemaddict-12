import {createElement} from "../utils.js";

const createFilmAreaTempate = () => {
  return (
    `<section class="films"></section>`
  );
};

export default class FilmArea {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createFilmAreaTempate();
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
