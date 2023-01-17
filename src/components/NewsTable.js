import React, { useState, useEffect } from "react";
import "./components.css";
import {
  Container,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
  LinearProgress,
} from "@mui/material";
import axios from "axios";
import { News } from "../api";
import { NewsState } from "../NewsContext";
var searchedNews = [];
const NewsTable = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { searchResult, categoryResult, timeResult, searchByDateResult } =
    NewsState();
  const [search, setSearch] = searchResult;
  const [category, setCategory] = categoryResult;
  const [time, setTime] = timeResult;
  const [searchByDate, setSearchByDate] = searchByDateResult;
  const [count, setCount] = useState(0);
  //const [searchedNews, setSearchedNews] = useState([]);

  const fetchNews = async () => {
    setLoading(true);
    const { data } = await axios.get(
      News(search, category, time, searchByDate)
    );
    setNews(data.hits);
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search, category, time, searchByDate]);

  function handleSearch() {
    console.log("Category: " + category);
    console.log("search: " + search);
    console.log(news.length);
    var arr = news.filter((item) => {
      console.log(item.comment_text);
      if (item.title != null)
        return item.title.toLocaleLowerCase().includes(search);
      if (item.comment_text != null)
        return item.comment_text.toLocaleLowerCase().includes(search);
      // if (item.title)
      // return item.title.toLocaleLowerCase().includes(search);
      // if (item.title)
      // return item.title.toLocaleLowerCase().includes(search);
      return false;
    });
    searchedNews = arr;
    console.log(searchedNews.length);
    //setSearchedNews(arr);
    return arr.length <= 10 ? arr : arr.slice(count * 10, (count + 1) * 10);
  }
  var currentTime = new Date();
  var year = currentTime.getFullYear();

  function dateDiff(y) {
    return year - y;
  }

  const handlePaginationChange = (event, value) => {
    console.log(value);
    setCount(value - 1);
    setPage(value);
  };

  return (
    <div>
      <TableContainer style={{ backgroundColor: "#F6F6EF" }}>
        {loading ? (
          <LinearProgress style={{ backgroundColor: "gold" }} />
        ) : (
          <Table>
            <TableBody>
              {handleSearch().map((row) => {
                return (
                  <TableRow>
                    <TableCell>
                      <div>
                        <span style={{ fontSize: 14, fontWeight: "bold" }}>
                          {" "}
                          {row.comment_text != null
                            ? row.comment_text
                            : row.title}{" "}
                        </span>
                        <span
                          style={{
                            fontSize: 13,
                            color: "#828282",
                            textDecoration: "none",
                          }}
                        >
                          {" "}
                          {row.url ? (
                            <a href="/" style={{ color: "" }}>
                              {"(" + row.url + ")"}
                            </a>
                          ) : null}{" "}
                        </span>
                      </div>
                      <div style={{ color: "#696969", fontSize: 10.66 }}>
                        {row.points} points | {row.author} |{" "}
                        {dateDiff(row.created_at.slice(0, 4))} years ago |{" "}
                        {row.num_comments} comments
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      <Pagination
        count={parseInt((searchedNews.length + 9) / 10)}
        page={page}
        onChange={handlePaginationChange}
      />
    </div>
  );
};

export default NewsTable;
