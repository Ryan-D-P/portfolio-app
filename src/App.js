import Navbar from "./Navbar";
import ColorThemeSelect from "./ColorThemeSelect";
import Home from "./Home";
import Resume from "./Resume";
import "./ColorThemes.css";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const UserContext = createContext(null);

function App() {
  // State to manage the page colour theme, brightness mode, and theme selector position
  const [theme, setTheme] = useState(`orange`);
  const [selectorPosition, setSelectorPosition] = useState(`left`);
  const [mode, setMode] = useState(`light`);

  // State to manage the current page (highlight current page in the Navbar)
  const [page, setPage] = useState(`home`);

  return (
    <BrowserRouter>
      <div className="App">
        <UserContext.Provider value={ {theme, setTheme, mode, setMode, selectorPosition, setSelectorPosition, page, setPage} }>
          <header className="header-content">
            <h1 className={ `${theme}-theme-color` }>Ryan-D-P</h1>
            <a href="http://github.com/Ryan-D-P" target="_blank" rel="noopener noreferrer">
              <img src="" alt="GH-icon" />
            </a>
            <Navbar />
          </header>
          <main className="main-content">
            <ColorThemeSelect />
            <Routes>
              <Route path="/" element={ <Home /> } />
              <Route path="/resume" element={ <Resume /> } />
            </Routes>
          </main>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
