import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { NewsState } from "../NewsContext";

const Filter = () => {
  const { searchResult, categoryResult } = NewsState();
  const [category, setCategory] = categoryResult;

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div>
      Search
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small"></InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={category}
          label="Filter by"
          onChange={handleChange}
        >
          <MenuItem value={""}>All</MenuItem>
          <MenuItem value={"story"}>Stories</MenuItem>
          <MenuItem value={"comment"}>Comments</MenuItem>
        </Select>
      </FormControl>
      by
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small"></InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={category}
          label="Filter by"
          onChange={handleChange}
        >
          <MenuItem value={""}>Popularity</MenuItem>
          <MenuItem value={"search_by_date"}>Date</MenuItem>
        </Select>
      </FormControl>
      for
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small"></InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={category}
          label="Filter by"
          onChange={handleChange}
        >
          <MenuItem value={"story"}>All Time</MenuItem>
          <MenuItem value={"comment"}>Past 24h</MenuItem>
          <MenuItem value={"story"}>Past Week</MenuItem>
          <MenuItem value={"comment"}>Past Month</MenuItem>
          <MenuItem value={"story"}>Past Year</MenuItem>
          <MenuItem value={"comment"}>Custom range</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Filter;
