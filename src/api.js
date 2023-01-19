export const News = (query, tags, time, searchByDate) => {
  const currentTime = new Date().getTime() / 1000;
  const difference_time = time == 0 ? 0 : currentTime - time;
  console.log(searchByDate);
  const sortingType = searchByDate ? "search_by_date" : "search";
  const url =
    "https://hn.algolia.com/api/v1/" +
    sortingType +
    "?query=" +
    query +
    "&tags=" +
    tags +
    "&numericFilters=created_at_i>" +
    difference_time;
  console.log(url);
  return url;
};
