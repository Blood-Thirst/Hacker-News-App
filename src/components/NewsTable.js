import React, { useState, useEffect } from "react";
import "./components.css";
import {
  Pagination,
  Table,
  TableBody,
  TableContainer,
  Typography,
  LinearProgress,
  Card,
  CardContent,
  Button,
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
  }, [search, category, time, searchByDate]);

  function handleSearch() {
    console.log("Category: " + category);
    console.log("search: " + search);
    console.log(news.length);
    var arr = news.filter((item) => {
      console.log(item.title);
      if (item.title != null) return item.title.toLocaleLowerCase();
      if (item.comment_text != null)
        return item.comment_text.toLocaleLowerCase();
      return false;
    });
    searchedNews = arr;
    console.log(searchedNews.length);
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
      <TableContainer style={{ backgroundColor: "#F4F5FF" }}>
        {loading ? (
          <LinearProgress style={{ backgroundColor: "gold" }} />
        ) : (
          <Table>
            <TableBody>
              {handleSearch().map((row) => {
                return (
                  <Card
                    style={{
                      marginTop: 8,
                      marginLeft: 10,
                      marginRight: 10,
                      marginBottom: 8,
                    }}
                    sx={{ width: "99%" }}
                  >
                    <CardContent style={{ paddingBottom: 5, paddingTop: 5 }}>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {row.comment_text != null ? row.comment_text : ""}
                      </Typography>
                      <Typography variant="h6" component="div">
                        {row.title != null ? row.title : ""}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {row.points} points | {row.author} |{" "}
                        {dateDiff(row.created_at.slice(0, 4))} years ago |{" "}
                        {row.num_comments} comments
                      </Typography>
                      {row.url ? (
                        <Button
                          size="small"
                          style={{
                            marginLeft: -4,
                            marginTop: -10,
                            color: "#FF742B",
                          }}
                          href={row.url}
                        >
                          <h5>Learn More</h5>
                        </Button>
                      ) : null}
                    </CardContent>
                  </Card>
                );
              })}
            </TableBody>
          </Table>
        )}
      </TableContainer>
      <Pagination
        style={{ padding: 10 }}
        count={parseInt((searchedNews.length + 9) / 10)}
        page={page}
        onChange={handlePaginationChange}
      />
    </div>
  );
};

export default NewsTable;
