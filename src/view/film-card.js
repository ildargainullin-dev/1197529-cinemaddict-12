import {createElement} from "../utils.js";

const MAX_DESCRIPTION_LENGTH = 140;

const createFilmCardTemplate = (film) => {
  const {
    title,
    poster,
    description,
    rating,
    year,
    genres,
    comments,
    duration
  } = film;


  const createShortDescription = (desc) => {
    if (desc.length >= MAX_DESCRIPTION_LENGTH) {
      const shortDesc = desc.slice(0, MAX_DESCRIPTION_LENGTH) + `...`;
      return shortDesc;
    }
    return desc;
  };
  return (
    `<article class="film-card">
<h3 class="film-card__title">${title}</h3>
<p class="film-card__rating">${rating}</p>
<p class="film-card__info">
<span class="film-card__year">${year}</span>
<span class="film-card__duration">${duration}</span>
<span class="film-card__genre">${genres[0]}</span>
</p>
<img src=${poster} alt="" class="film-card__poster">
<p class="film-card__description">${createShortDescription(description)}</p>
<a class="film-card__comments">${comments.length} comments</a>
<form class="film-card__controls">
<button class="film-card__controls-item button film-card__controls-item--add-to-watchlist">Add to watchlist</button>
<button class="film-card__controls-item button film-card__controls-item--mark-as-watched">Mark as watched</button>
<button class="film-card__controls-item button film-card__controls-item--favorite">Mark as favorite</button>
</form>
</article>`
  );
};

export default class FilmCard {
  constructor(film) {
    this._film = film;
    this._element = null;
  }

  getTemplate() {
    return createFilmCardTemplate(this._film);
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
