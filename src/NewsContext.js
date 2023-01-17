import React, { createContext, useState, useContext, useEffect } from "react";

const News = createContext();

const NewsContext = ({ children }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("(story,comment)");
  const [time, setTime] = useState(0);
  const [searchByDate, setSearchByDate] = useState(false);

  //   useEffect(() => {
  //     setSearch(search);
  //   }, [search]);

  return (
    <News.Provider
      value={{
        searchResult: [search, setSearch],
        categoryResult: [category, setCategory],
        timeResult: [time, setTime],
        searchByDateResult:[searchByDate,setSearchByDate]
      }}
    >
      {children}
    </News.Provider>
  );
};

export default NewsContext;

export const NewsState = () => {
  return useContext(News);
};
