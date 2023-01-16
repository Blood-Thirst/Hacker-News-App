import {
  AppBar,
  StyledEngineProvider,
  Container,
  Toolbar,
  Typography,
  Select,
  Navigate,
  TextField,
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
  const {searchResult,categoryResult} = NewsState();
  const [search, setSearch ] = searchResult;
  return (
    <div backgroundcolor="red">
      <StyledEngineProvider injectFirst>
        <AppBar
          color="transparent"
          position="static"
          sx={{ bgcolor: "#FF742B" }}
        >
          <Container>
            <Toolbar>
              <Typography variant="h6" className="title">
                Hacker News
              </Typography>
              <TextField
                label="Search For News"
                variant="outlined"
                style={{
                  // marginBottom: 20,
                  width: "100%",
                  backgroundColor: "white",
                }}
                onChange={(e) => {
                  setSearch(e.target.value.toLocaleLowerCase());
                }}
              />
            </Toolbar>
          </Container>
        </AppBar>
      </StyledEngineProvider>
    </div>
  );
};

export default Header;
