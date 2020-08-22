const LEVEL_1_LIMIT = 1;
const LEVEL_2_LIMIT = 10;
const LEVEL_3_LIMIT = 20;

const ranks = [`Novice`, `Fan`, `Movie Buff`];
const generateRank = (filmsCount) => {
  if (filmsCount >= LEVEL_1_LIMIT && filmsCount <= LEVEL_2_LIMIT) {
    return ranks[0];
  } else if (filmsCount > LEVEL_2_LIMIT && filmsCount <= LEVEL_3_LIMIT) {
    return ranks[1];
  } else if (filmsCount > LEVEL_3_LIMIT) {
    return ranks[2];
  }
  return ``;
};

export const createProfileTemplate = (filmsCount) => {
  return (
    `<section class="header__profile profile">
<p class="profile__rating">${generateRank(filmsCount)}</p>
<img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35">
</section>`
  );
};
