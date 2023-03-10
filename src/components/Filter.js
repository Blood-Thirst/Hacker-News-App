import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { NewsState } from "../NewsContext";
import "../components/components.css";

const Filter = () => {
  const { searchResult, categoryResult, timeResult, searchByDateResult } =
    NewsState();
  const [category, setCategory] = categoryResult;
  const [time, setTime] = timeResult;
  const [searchByDate, setSearchByDate] = searchByDateResult;

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleSortChange = (event) => {
    setSearchByDate(event.target.value);
  };

  return (
    <div className="filter">
      <h4>Search</h4>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small"></InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={category}
          onChange={handleCategoryChange}
        >
          <MenuItem value={"(story,comment)"}>All</MenuItem>
          <MenuItem value={"story"}>Stories</MenuItem>
          <MenuItem value={"comment"}>Comments</MenuItem>
        </Select>
      </FormControl>
      <h4>by</h4>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small"></InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={searchByDate}
          onChange={handleSortChange}
        >
          <MenuItem value={false}>Popularity</MenuItem>
          <MenuItem value={true}>Date</MenuItem>
        </Select>
      </FormControl>
      <h4>for</h4>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small"></InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={time}
          onChange={handleTimeChange}
        >
          <MenuItem value={0}>All Time</MenuItem>
          <MenuItem value={86400}>Past 24h</MenuItem>
          <MenuItem value={604800}>Past Week</MenuItem>
          <MenuItem value={2628000}>Past Month</MenuItem>
          <MenuItem value={31540000}>Past Year</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
