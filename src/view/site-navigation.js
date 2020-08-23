const createFilterItemTemplate = (filter) => {
  const {
    title,
    count
  } = filter;
  const filterTitle = title[0].toUpperCase() + title.slice(1, title.length);
  return `<a href="#${title}" class="main-navigation__item">${filterTitle} <span class="main-navigation__item-count">${count}</span></a>`;
};

export const createSiteNavigationTemplate = (filterData) => {
  const filterItemsTemplate = filterData.map(createFilterItemTemplate).join(``);

  return (
    `<nav class="main-navigation">
  <div class="main-navigation__items">
  <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
  ${filterItemsTemplate}
  </div>
  <a href="#stats" class="main-navigation__additional">Stats</a>
  </nav>`
  );
};
