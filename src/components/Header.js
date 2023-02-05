import {
  AppBar,
  StyledEngineProvider,
  Toolbar,
  Typography,
  TextField,
  Stack,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { NewsState } from "../NewsContext";
import "./components.css";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const { searchResult, categoryResult, timeResult, searchByDateResult } =
    NewsState();
  const [search, setSearch] = searchResult;
  return (
    <div>
      <StyledEngineProvider injectFirst>
        <AppBar
          color="transparent"
          position="static"
          sx={{ bgcolor: "#FF742B" }}
        >
          <Toolbar>
            <Grid style={{ padding: 10 }} container spacing={4}>
              <Grid item>
                <img src="https://hn.algolia.com/packs/media/images/logo-hn-search-a822432b.png" />
              </Grid>
              <Grid item marginTop={0.5}>
                <Stack spacing={-1}>
                  <Typography
                    variant="h6"
                    display="inline"
                    className="whitefont"
                  >
                    Search
                  </Typography>
                  <Typography
                    variant="h6"
                    display="inline"
                    className="whitefont"
                  >
                    Hacker News
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  className="bold-placeholder"
                  variant="outlined"
                  placeholder="Search stories by title, url or author"
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    marginTop: 3,
                    borderRadius: 5,
                  }}
                  InputProps={{
                    startAdornment: (
                      <SearchIcon style={{ color: "#FF742B" }}></SearchIcon>
                    ),
                  }}
                  onChange={(e) => {
                    setSearch(e.target.value.toLocaleLowerCase());
                  }}
                />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </StyledEngineProvider>
    </div>
  );
};

export default Header;
