import {
  AppBar,
  StyledEngineProvider,
  Container,
  Toolbar,
  Typography,
  Select,
  Navigate,
  TextField,
  Stack,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import { NewsState } from "../NewsContext";
import "./components.css";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& .MuiFilledInput-root": {
//       background: "rgb(232, 241, 250)"
//     }
//   }
// }));

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
            <Grid container spacing={4}>
              <Grid item>
                <Stack>
                  <Typography variant="h6" display="inline" className="title">
                    Search
                  </Typography>
                  <Typography variant="h6" display="inline" className="title-1">
                    Hacker News
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={10}>
                <TextField
                  className="text"
                  variant="outlined"
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    marginTop: 3,
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
