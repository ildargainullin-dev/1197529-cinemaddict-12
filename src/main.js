import {createProfileTemplate} from "./view/profile.js";
import {createSiteNavigationTemplate} from "./view/site-navigation.js";
import {createFilmAreaTempate} from "./view/film-area.js";
import {createFilmCardTemplate} from "./view/film-card.js";
import {createShowMoreBtnTemplate} from "./view/show-more-btn.js";
import {createFilmCardDetailsTemplate} from "./view/film-card-details.js";
import {createFooterStatisticsTemplate} from "./view/footer-statistic.js";
import {generateFilm} from "./mock/film.js";
import {generateFilmsFilter} from "./mock/filters.js";

const FILM_COUNT = 20;
const FILM_COUNT_PER_STEP = 5;
const ESC_KEY_CODE = 27;

const films = new Array(FILM_COUNT).fill().map(generateFilm);
const filters = generateFilmsFilter(films);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderElement, createProfileTemplate(films.length), `beforeend`);
render(siteMainElement, createSiteNavigationTemplate(filters), `beforeend`);
render(siteMainElement, createFilmAreaTempate(), `beforeend`);

const filmListContainerElment = siteMainElement.querySelector(`.films-list__container`);


for (let i = 0; i < Math.min(films.length, FILM_COUNT_PER_STEP); i++) {
  render(filmListContainerElment, createFilmCardTemplate(films[i]), `beforeend`);
}
const filmListElement = siteMainElement.querySelector(`.films-list`);

if (films.length > FILM_COUNT_PER_STEP) {

  let renderedFilmCount = FILM_COUNT_PER_STEP;

  render(filmListElement, createShowMoreBtnTemplate(), `beforeend`);
  const showMoreButton = document.querySelector(`.films-list__show-more`);

  showMoreButton.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    films
      .slice(renderedFilmCount, renderedFilmCount + FILM_COUNT_PER_STEP)
      .forEach((film) => render(filmListContainerElment, createFilmCardTemplate(film), `beforeend`));

    renderedFilmCount += FILM_COUNT_PER_STEP;

    if (renderedFilmCount >= films.length) {
      showMoreButton.remove();
    }
  });
}

const siteFooterElement = document.querySelector(`.footer`);
const footerStatisticsElement = siteFooterElement.querySelector(`.footer__statistics`);
render(footerStatisticsElement, createFooterStatisticsTemplate(films.length), `beforeend`);

render(siteFooterElement, createFilmCardDetailsTemplate(films[0]), `afterend`);


const popup = document.querySelector(`.film-details`);
const popupCloseBtn = popup.querySelector(`.film-details__close-btn`);

popupCloseBtn.addEventListener(`click`, () => {
  popup.remove();
});
const escKeyDown = (evt) => {
  if (evt.keyCode === ESC_KEY_CODE) {
    popup.remove();
    window.removeEventListener(`keydown`, escKeyDown);
  }
};
window.addEventListener(`keydown`, escKeyDown);
