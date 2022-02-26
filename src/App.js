import Navbar from "./Navbar";
import ColorThemeSelect from "./ColorThemeSelect";
import Home from "./Home";
import Resume from "./Resume";
import "./ColorThemes.css";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const UserContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(`orange`);
  const [mode, setMode] = useState(`light`);

  return (
    <BrowserRouter>
      <div className="App">
        <UserContext.Provider value={ {theme, mode} }>
          <header className="header-content">
            <h1 className={ `${`${theme}-theme-color`}` }>Ryan-D-P</h1>
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
