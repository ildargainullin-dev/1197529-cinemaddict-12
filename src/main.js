import {createProfileTemplate} from "./view/profile.js";
import {createSiteNavigationTemplate} from "./view/site-navigation.js";
import {createFilmAreaTemplate} from "./view/film-area.js";
import {createFilmCardTemplate} from "./view/film-card.js";
import {createShowMoreBtnTemplate} from "./view/show-more-btn.js";
import {createFilmCardDetailsTemplate} from "./view/film-card-details.js";
import {createFooterStatisticsTemplate} from "./view/footer-statistic.js";

const FILM_COUNT = 5;
const FILM_EXTRA_COUNT = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeaderElement = document.querySelector(`.header`);
render(siteHeaderElement, createProfileTemplate(), `beforeend`);

const siteMainElement = document.querySelector(`.main`);
render(siteMainElement, createSiteNavigationTemplate(), `beforeend`);
render(siteMainElement, createFilmAreaTemplate(), `beforeend`);

const filmListContainerElement = siteMainElement.querySelector(`.films-list__container`);

for (let i = 0; i < FILM_COUNT; i++) {
  render(filmListContainerElement, createFilmCardTemplate(), `beforeend`);
}
const filmListElement = siteMainElement.querySelector(`.films-list`);
render(filmListElement, createShowMoreBtnTemplate(), `beforeend`);

const siteFooterElement = document.querySelector(`.footer`);
render(siteFooterElement, createFilmCardDetailsTemplate(), `afterend`);

const filmListExtraElements = siteMainElement.querySelectorAll(`.films-list--extra`);
filmListExtraElements.forEach((filmListExtraElement) => {
  const extraElementContainer = filmListExtraElement.querySelector(`.films-list__container`);

  for (let i = 0; i < FILM_EXTRA_COUNT; i++) {
    render(extraElementContainer, createFilmCardTemplate(), `beforeend`);
  }
});

const footerStatisticsElement = siteFooterElement.querySelector(`.footer__statistics`);
render(footerStatisticsElement, createFooterStatisticsTemplate(), `beforeend`);
