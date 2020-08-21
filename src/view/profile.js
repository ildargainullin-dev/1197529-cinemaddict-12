const ranks = [`Novice`, `Fan`, `Movie Buff`];
const generateRank = (filmsCount) => {
  if (filmsCount >= 1 && filmsCount <= 10) {
    return ranks[0];
  } else if (filmsCount >= 11 && filmsCount <= 20) {
    return ranks[1];
  } else if (filmsCount > 20) {
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
