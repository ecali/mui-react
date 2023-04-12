import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home";
import {makeStyles, ThemeProvider} from "@mui/styles";
import {About} from "./pages/About";
import {createTheme, CssBaseline, useMediaQuery, useTheme} from "@mui/material";
import {FAQComponent} from "./pages/FAQComponent";

const darkTheme = createTheme({
    palette: {
        mode: 'dark'
    },
});

const useStyles = makeStyles(() => ({
    container: {
        margin: '1rem auto',
        display: "flex",
        width: '80%',
    },
    containerMobile: {
        margin: '1rem auto',
        display: "flex",
        width: '98%',
    }
}));

function App() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
      <ThemeProvider theme={darkTheme}>
          <CssBaseline enableColorScheme>
          <Router >
              <Navbar />
              <div className={ isMobile ? classes.containerMobile : classes.container}>
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path={"/about"} element={<About />} />
                      <Route path={'/faq'} element={<FAQComponent />} />
                  </Routes>
              </div>
          </Router>
              </ CssBaseline>
      </ThemeProvider>

  );
}

export default App;
