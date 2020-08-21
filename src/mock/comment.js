import {
  getRandomInteger
} from "../utils.js";

const generateText = () => {
  const texts = [`Interesting setting and a good cast`, `Booooooooooring`, `Very very old. Meh`, `Almost two hours? Seriously?`, `A quietly large achievement.`, `A tenderly intimate, affecting documentary portrait ...`, `For Ahkeem is an essential insight into marginalized America.`, `A film of rare power and unique forcefulness.`];
  const randomText = texts[getRandomInteger(0, texts.length - 1)];
  return randomText;
};

const generateEmotion = () => {
  const emotions = [`smile`, `sleeping`, `puke`, `angry`];
  const randomEmotion = `./images/emoji/${emotions[getRandomInteger(0, emotions.length - 1)]}.png`;
  return randomEmotion;
};

const generateAuthor = () => {
  const authors = [`Tim Macoveev`, `John Doe`, `Ivan Kozlov`, `Ammy Lee`, `Natali Portman`];
  const randomAuthor = authors[getRandomInteger(0, authors.length - 1)];
  return randomAuthor;
};

const generateDate = () => {
  const start = new Date(2000, 1, 1);
  const end = new Date();
  const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

  return `${randomDate.getFullYear()}/${randomDate.getMonth()}/${randomDate.getDate()} ${randomDate.getHours()}:${randomDate.getMinutes()}`;
};

export const generateComment = () => {
  return {
    text: generateText(),
    emotion: generateEmotion(),
    author: generateAuthor(),
    date: generateDate(),
  };
};
