import React, { createContext, useState, useContext, useEffect } from "react";

const News = createContext();

const NewsContext = ({ children }) => {
  const [search, setSearch] = useState("");
  const [category,setCategory] = useState("");

  //   useEffect(() => {
  //     setSearch(search);
  //   }, [search]);

  return (
    <News.Provider value={{ searchResult:[search, setSearch],categoryResult:[category,setCategory] }}>{children}</News.Provider>
  );
};

export default NewsContext;

export const NewsState = () => {
  return useContext(News);

};
  

