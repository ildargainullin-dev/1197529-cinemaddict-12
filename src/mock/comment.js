import {
  getRandomInteger,
  changeDateFormat,
  getRandomElement
} from "../utils.js";

const texts = [`Interesting setting and a good cast`, `Booooooooooring`, `Very very old. Meh`, `Almost two hours? Seriously?`, `A quietly large achievement.`, `A tenderly intimate, affecting documentary portrait ...`, `For Ahkeem is an essential insight into marginalized America.`, `A film of rare power and unique forcefulness.`];
const authors = [`Tim Macoveev`, `John Doe`, `Ivan Kozlov`, `Ammy Lee`, `Natali Portman`];

const generateEmotion = () => {
  const emotions = [`smile`, `sleeping`, `puke`, `angry`];
  return `./images/emoji/${emotions[getRandomInteger(0, emotions.length - 1)]}.png`;
};

const generateDate = () => {
  const start = new Date(2000, 1, 1);
  const end = new Date();
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  return changeDateFormat(randomDate);
};

export const generateComment = () => {
  return {
    text: getRandomElement(texts),
    emotion: generateEmotion(),
    author: getRandomElement(authors),
    date: generateDate(),
  };
};
