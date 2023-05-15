

import { Box, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SwitchTheme from "./components/SwitchTheme";
import { FavListContextProvider } from "./contexts/FavListContext";
import { SearchContextProvider } from "./contexts/SearchContext";
import SearchBar from "./pages/home/components/SearchBar";
import HomePage from "./pages/home/HomePage";
import { darkTheme, lightTheme } from "./theme/theme";

function App() {
  //write code here
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Box bgcolor="background.body" minHeight="100vh">
        <Header />
        <Container>
          <SwitchTheme value={isDarkMode} setValue={setIsDarkMode} />
          {/* <SearchContextProvider>
            <FavListContextProvider>
              <Outlet />
            </FavListContextProvider>
          </SearchContextProvider> */}
          <HomePage/>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
