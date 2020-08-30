import ProfileView from "./view/profile.js";
import SiteMenuView from "./view/site-navigation.js";
import FilmAreaView from "./view/film-area.js";
import SortView from "./view/sort.js";
import FilmListView from "./view/film-list.js";
import FilmContainerView from "./view/film-container.js";
import FilmCardView from "./view/film-card.js";
import ShowMoreButtonView from "./view/show-more-btn.js";
import FilmCardDetailsView from "./view/film-card-details.js";
import PopupCommentView from "./view/comment.js";
import FooterStatisticView from "./view/footer-statistic.js";
import {generateFilm} from "./mock/film.js";
import {generateFilmsFilter} from "./mock/filters.js";
import {render, RenderPosition} from "./utils.js";

const FILM_COUNT = 20;
const FILM_COUNT_PER_STEP = 5;
const ESC_KEY_CODE = 27;

const films = new Array(FILM_COUNT).fill().map(generateFilm);
const filters = generateFilmsFilter(films);

const siteHeaderElement = document.querySelector(`.header`);
const siteMainElement = document.querySelector(`.main`);

render(siteHeaderElement, new SiteMenuView(filters).getElement(), RenderPosition.BEFOREEND);
render(siteHeaderElement, new ProfileView(films.length).getElement(), RenderPosition.BEFOREEND);

const filmAreaComponent = new FilmAreaView();
render(siteMainElement, filmAreaComponent.getElement(), RenderPosition.BEFOREEND);
render(filmAreaComponent.getElement(), new SortView().getElement(), RenderPosition.AFTERBEGIN);

const filmListComponent = new FilmListView();
render(filmAreaComponent.getElement(), filmListComponent.getElement(), RenderPosition.BEFOREEND);

const filmContainerComponent = new FilmContainerView();
render(filmListComponent.getElement(), filmContainerComponent.getElement(), RenderPosition.BEFOREEND);

const renderFilm = (filmListElement, film) => {
  const filmComponent = new FilmCardView(film);
  const filmPopupComponent = new FilmCardDetailsView(film);

  const renderFilmCardDetails = () => {
    render(siteFooterElement, filmPopupComponent.getElement(), RenderPosition.BEFOREEND);
    const popupContainer = document.querySelector(`.film-details__inner`);

    render(popupContainer, new PopupCommentView(film.comments).getElement(), RenderPosition.BEFOREEND);
  };

  filmComponent.getElement().querySelector(`.film-card__title`).addEventListener(`click`, () => {
    renderFilmCardDetails();
    window.addEventListener(`keydown`, escKeyDown);
  });

  filmComponent.getElement().querySelector(`.film-card__poster`).addEventListener(`click`, () => {
    renderFilmCardDetails();
    window.addEventListener(`keydown`, escKeyDown);
  });

  filmComponent.getElement().querySelector(`.film-card__comments`).addEventListener(`click`, () => {
    renderFilmCardDetails();
    window.addEventListener(`keydown`, escKeyDown);
  });

  filmPopupComponent.getElement().querySelector(`.film-details__close-btn`).addEventListener(`click`, () => {
    filmPopupComponent.getElement().remove();

  });

  const escKeyDown = (evt) => {
    if (evt.keyCode === ESC_KEY_CODE) {
      filmPopupComponent.getElement().remove();
      window.removeEventListener(`keydown`, escKeyDown);
    }
  };

  render(filmListElement, filmComponent.getElement(), RenderPosition.BEFOREEND);
};

for (let i = 0; i < Math.min(films.length, FILM_COUNT_PER_STEP); i++) {
  renderFilm(filmContainerComponent.getElement(), films[i]);
}

if (films.length > FILM_COUNT_PER_STEP) {

  let renderedFilmCount = FILM_COUNT_PER_STEP;
  const showMoreButtonComponent = new ShowMoreButtonView();
  render(filmAreaComponent.getElement(), showMoreButtonComponent.getElement(), RenderPosition.BEFOREEND);

  const showMoreButton = document.querySelector(`.films-list__show-more`);

  const onBtnClick = (evt) => {
    evt.preventDefault();
    films
      .slice(renderedFilmCount, renderedFilmCount + FILM_COUNT_PER_STEP)
      .forEach((film) => renderFilm(filmContainerComponent.getElement(), film));

    renderedFilmCount += FILM_COUNT_PER_STEP;

    if (renderedFilmCount >= films.length) {
      showMoreButton.remove();
      onBtnClick.remove();
    }
  };

  showMoreButtonComponent.getElement().addEventListener(`click`, onBtnClick);
}

const siteFooterElement = document.querySelector(`.footer`);
const footerStatisticsElement = siteFooterElement.querySelector(`.footer__statistics`);
render(footerStatisticsElement, new FooterStatisticView(films.length).getElement(), RenderPosition.BEFOREEND);
