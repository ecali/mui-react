import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {Home} from "./pages/Home";
import {ThemeProvider} from "@mui/styles";
import {About} from "./pages/About";

function App() {
    const theme = {};
  return (
      <ThemeProvider theme={theme}>
          <Router >
              <Navbar />
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path={"/about"} element={<About />} />
              </Routes>
          </Router>
      </ThemeProvider>

  );
}

export default App;
