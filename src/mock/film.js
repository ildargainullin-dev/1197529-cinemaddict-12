import {
  generateComment
} from "./comment.js";
import {
  getRandomInteger
} from "../utils.js";

const MAX_TENS_COUNT = 5;
const MAX_RATING = 10;
const FIRST_FILM_YEAR = 1895;
const MAX_FILM_DURATION = 240;
const MAX_COMMENT_COUNT = 4;

const generateTitle = () => {
  const titles = [`The Great Flamarion`, `The Man With The Golden Arm`, `Made For Each Other`, `Popeye Meets Sinbad`, `Sagebrush Trail`, `Santa Claus Conquers The Martians`, `The Dance Of Life`];

  const randomTitle = titles[getRandomInteger(0, titles.length - 1)];

  return randomTitle;
};

const generatePoster = () => {
  const posters = [`made-for-each-other.png`, `popeye-meets-sinbad.png`, `sagebrush-trail.jpg`, `santa-claus-conquers-the-martians.jpg`, `the-dance-of-life.jpg`, `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`];

  const randomPoster = `./images/posters/` + posters[getRandomInteger(0, posters.length - 1)];
  return randomPoster;
};

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
  const randomRating = Math.abs(getRandomInteger(0, MAX_RATING) - Math.random().toFixed([1]));
  return randomRating;
};

const generateYear = () => {
  const now = new Date();
  now.setHours(23, 59, 59, 999);
  const thisYear = now.getFullYear();
  const randomYear = getRandomInteger(FIRST_FILM_YEAR, thisYear);
  return randomYear;
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
  const randomDuration = hours + `h ` + minutes + `m`;
  return randomDuration;
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
const humanizeTaskDueDate = (dueDate) => {
  return dueDate.toLocaleString(`en-GB`, {
    day: `numeric`,
    month: `long`,
    year: `numeric`
  });
};

const generateCountry = () => {
  const countries = [`Canada`, `USA`, `Russia`, `France`, `Germany`];
  const randomCountry =

    countries[getRandomInteger(countries.length - 1)];
  return randomCountry;
};
const generateDirector = () => {
  const directors = [`Ivan Pterov`, `Anna Smolevich`, `Dart Veider`, `Karl 4`, `Miloš Zeman`];
  const randomDirector = directors[getRandomInteger(directors.length - 1)];
  return randomDirector;
};
const generateWriter = () => {
  const writers = [`Petr Polák`, `Honza Mašek`, `Karolina Jelínková`, `Daniel Lev`, `Adam Jeník`];
  const randomWriter = writers[getRandomInteger(writers.length - 1)];
  return randomWriter;
};
const generateActor = () => {
  const actors = [`Will Smith`, `Brad Pit`, `Nastya Ivleeva`, `Natalie Portman`, `Johny Depp`];
  const randomActor = actors[getRandomInteger(actors.length - 1)];
  return randomActor;
};
const generateAge = () => {
  const ages = [`0+`, `4+`, `6+`, `12+`, `16+`, `18+`];
  const randomAge = ages[getRandomInteger(ages.length - 1)];
  return randomAge;
};


export const generateFilm = () => {
  return {
    title: generateTitle(),
    poster: generatePoster(),
    description: generateDescription(),
    rating: generateRating(),
    year: generateYear(),
    genres: generateGenres(),
    comments: generateCommentsArray(),
    duration: generateDuration(),
    originalTitle: generateTitle(),
    releaseDate: humanizeTaskDueDate(generateReleaseDate()),
    isWatched: Boolean(getRandomInteger(0, 1)),
    isFavorite: Boolean(getRandomInteger(0, 1)),
    isWatchList: Boolean(getRandomInteger(0, 1)),
    country: generateCountry(),
    director: generateDirector(),
    writers: generateWriter(),
    actor: generateActor(),
    age: generateAge(),
  };
};
