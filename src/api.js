export const News = (query,tags) => {

  const url ="http://hn.algolia.com/api/v1/search?query="+query +"&tags=" +tags;
  console.log(url);
  return url;
;
};
