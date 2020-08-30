import {createElement} from "../utils.js";

const createFilmCardDetailsTemplate = (film) => {
  const {
    title,
    poster,
    description,
    rating,
    genres,
    duration,
    originalTitle,
    releaseDate,
    isWatched,
    isFavorite,
    isWatchList,
    country,
    director,
    writers,
    actor,
    age,
  } = film;


  const createGenres = (genresArray) => {
    let renderedGenre = ``;
    for (let genre of genresArray) {
      renderedGenre += `<span class="film-details__genre">${genre}</span>`;
    }
    return renderedGenre;
  };

  const changeCount = (genresArray) => genresArray.length > 1 ? `s` : ``;

  const isWatchedAtribute = isWatched ? `checked` : ``;
  const isFavoriteAtribute = isFavorite ? `checked` : ``;
  const isWatchListAtribute = isWatchList ? `checked` : ``;

  return (
    `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
  <div class="form-details__top-container">
  <div class="film-details__close">
  <button class="film-details__close-btn" type="button">close</button>
  </div>
  <div class="film-details__info-wrap">
  <div class="film-details__poster">
  <img class="film-details__poster-img" src=${poster} alt="">

  <p class="film-details__age">${age}</p>
  </div>

  <div class="film-details__info">
  <div class="film-details__info-head">
  <div class="film-details__title-wrap">
  <h3 class="film-details__title">${title}</h3>
  <p class="film-details__title-original">Original: ${originalTitle}</p>
  </div>

  <div class="film-details__rating">
  <p class="film-details__total-rating">${rating}</p>
  </div>
  </div>

  <table class="film-details__table">
  <tr class="film-details__row">
  <td class="film-details__term">Director</td>
  <td class="film-details__cell">${director}</td>
  </tr>
  <tr class="film-details__row">
  <td class="film-details__term">Writers</td>
  <td class="film-details__cell">${writers}</td>
  </tr>
  <tr class="film-details__row">
  <td class="film-details__term">Actors</td>
  <td class="film-details__cell">${actor}</td>
  </tr>
  <tr class="film-details__row">
  <td class="film-details__term">Release Date</td>
  <td class="film-details__cell">${releaseDate}</td>
  </tr>
  <tr class="film-details__row">
  <td class="film-details__term">Runtime</td>
  <td class="film-details__cell">${duration}</td>
  </tr>
  <tr class="film-details__row">
  <td class="film-details__term">Country</td>
  <td class="film-details__cell">${country}</td>
  </tr>
  <tr class="film-details__row">
  <td class="film-details__term">Genre${changeCount(genres)}</td>
  <td class="film-details__cell">
  ${createGenres(genres)}</td>
  </tr>
  </table>

  <p class="film-details__film-description">
  ${description}
  </p>
  </div>
  </div>

  <section class="film-details__controls">
  <input type="checkbox" class="film-details__control-input visually-hidden" id="watchlist" name="watchlist" ${isWatchListAtribute}>
  <label for="watchlist" class="film-details__control-label film-details__control-label--watchlist">Add to watchlist</label>

  <input type="checkbox" class="film-details__control-input visually-hidden" id="watched" name="watched" ${isWatchedAtribute}>
  <label for="watched" class="film-details__control-label film-details__control-label--watched">Already Аwatched</label>

  <input type="checkbox" class="film-details__control-input visually-hidden" id="favorite" name="favorite" ${isFavoriteAtribute}>
  <label for="favorite" class="film-details__control-label film-details__control-label--favorite">Add to favorites</label>
  </section>
  </div>

  </form>
  </section>`
  );
};

export default class FilmCardDetails {
  constructor(film) {
    this._film = film;
    this._element = null;
  }

  getTemplate() {
    return createFilmCardDetailsTemplate(this._film);
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
