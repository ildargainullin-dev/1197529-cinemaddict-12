import {generateComment} from "./comment.js";
import {
  getRandomInteger,
  humanizeTaskDueDate,
  getRandomElement
} from "../utils.js";

const MAX_TENS_COUNT = 5;
const MAX_RATING = 10;
const FIRST_FILM_YEAR = 1895;
const MAX_FILM_DURATION = 240;
const MAX_COMMENT_COUNT = 4;

const titles = [`The Great Flamarion`, `The Man With The Golden Arm`, `Made For Each Other`, `Popeye Meets Sinbad`, `Sagebrush Trail`, `Santa Claus Conquers The Martians`, `The Dance Of Life`];
const posters = [`./images/posters/made-for-each-other.png`, `./images/posters/popeye-meets-sinbad.png`, `./images/posters/sagebrush-trail.jpg`, `./images/posters/santa-claus-conquers-the-martians.jpg`, `./images/posters/the-dance-of-life.jpg`, `./images/posters/the-great-flamarion.jpg`, `./images/posters/the-man-with-the-golden-arm.jpg`];
const countries = [`Canada`, `USA`, `Russia`, `France`, `Germany`];
const directors = [`Ivan Pterov`, `Anna Smolevich`, `Dart Veider`, `Karl 4`, `Miloš Zeman`];
const writers = [`Petr Polák`, `Honza Mašek`, `Karolina Jelínková`, `Daniel Lev`, `Adam Jeník`];
const actors = [`Will Smith`, `Brad Pit`, `Nastya Ivleeva`, `Natalie Portman`, `Johny Depp`];
const ages = [`0+`, `4+`, `6+`, `12+`, `16+`, `18+`];

const generateDescription = () => {
  const descriptions = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, `Cras aliquet varius magna, non porta ligula feugiat eget.`, `Fusce tristique felis at fermentum pharetra.`, `Aliquam id orci ut lectus varius viverra.`, `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`, `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`, `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`, `Sed sed nisi sed augue convallis suscipit in sed felis.`, `Aliquam erat volutpat.`, `Nunc fermentum tortor ac porta dapibus.`, `In rutrum ac purus sit amet tempus.`];
  const tensCount = getRandomInteger(1, MAX_TENS_COUNT);
  let randomDescription = ``;
  for (let i = 0; i < tensCount; i++) {
    randomDescription += descriptions[getRandomInteger(0, descriptions.length - 1)];
  }
  return randomDescription;
};

const generateRating = () => {
  return Math.abs(getRandomInteger(0, MAX_RATING) - Math.random().toFixed([1]));
};

const generateYear = () => {
  const now = new Date();
  now.setHours(23, 59, 59, 999);
  const thisYear = now.getFullYear();
  return getRandomInteger(FIRST_FILM_YEAR, thisYear);
};

const generateGenres = () => {
  const genres = [`anime`, `biographical`, `thriller`, `Western film`, `military`, `detective`, `child`, `documentary`, `drama`, `historical`, `kinomix`, `comedy`, `concert`, `short`, `crime`, `melodrama`, `cartoon`, `musical`, `scientific`, `Adventures`, `reality show`, `family`, `sport`, `talk show`, `thriller`, `horrors`, `fantastic`, `film noir`, `fantasy`, `erotica`, `mystic`];
  const genresCount = getRandomInteger(1, 3);
  const randomGenres = [];
  for (let i = 0; i <= genresCount - 1; i++) {
    randomGenres.push(genres[getRandomInteger(0, genres.length - 1)]);
  }
  return randomGenres;
};

const generateDuration = () => {
  const duration = getRandomInteger(1, MAX_FILM_DURATION);
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  return hours + `h ` + minutes + `m`;
};

const generateCommentsArray = () => {
  const commentsCount = getRandomInteger(0, MAX_COMMENT_COUNT);
  const randomCommentsArray = [];
  for (let i = 0; i <= commentsCount; i++) {
    randomCommentsArray.push(generateComment());
  }
  return randomCommentsArray;
};
const generateReleaseDate = () => {
  const currentDate = new Date();
  const thisYear = currentDate.getFullYear();
  currentDate.setHours(23, 59, 59, 999);
  const yearGap = getRandomInteger(FIRST_FILM_YEAR, thisYear);
  currentDate.setDate(currentDate.getDate() - yearGap);
  currentDate.setFullYear(yearGap);
  return new Date(currentDate);
};

export const generateFilm = () => {
  return {
    title: getRandomElement(titles),
    poster: getRandomElement(posters),
    description: generateDescription(),
    rating: generateRating(),
    year: generateYear(),
    genres: generateGenres(),
    comments: generateCommentsArray(),
    duration: generateDuration(),
    originalTitle: getRandomElement(titles),
    releaseDate: humanizeTaskDueDate(generateReleaseDate()),
    isWatched: Boolean(getRandomInteger(0, 1)),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    isWatchList: Boolean(getRandomInteger(0, 1)),
    country: getRandomElement(countries),
    director: getRandomElement(directors),
    writers: getRandomElement(writers),
    actor: getRandomElement(actors),
    age: getRandomElement(ages),
  };
};
