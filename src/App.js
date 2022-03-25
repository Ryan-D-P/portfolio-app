import Navbar from "./Navbar";
import ColorThemeSelect from "./ColorThemeSelect";
import Home from "./Home";
import Resume from "./Resume";
import "./css/ColorThemes.css";
import themeLight from "./images/icons/theme-light.svg";
import themeDark from "./images/icons/theme-dark.svg";
import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const UserContext = createContext(null);

function App() {
  // State to manage the page colour theme, brightness mode
  const [theme, setTheme] = useState(`orange`);
  const [mode, setMode] = useState(`light`);

  // Change the lighting mode of the page
  const changeMode = () => setMode(mode === `light` ? `dark` : `light`);

  // Define the current brightness styles
  const brightnessStyle = {
    backgroundColor: `var(--${mode})`,
  };

  return (
    <BrowserRouter basename={ `/portfolio-app` }>
      <div className={ `App` } style={ brightnessStyle }>
        <UserContext.Provider value={ {theme, setTheme, mode} }>
          <header className={ `header-content` }>
            <h1 style={ {color: `var(--${theme}-theme-color)`} }>Ryan-D-P</h1>
            <Navbar />
          </header>
          <main className={ `main-content` } style={ brightnessStyle }>
            <div className="selectors-wrapper">
              <ColorThemeSelect />
              <div className="mode-selector-wrapper" onClick={ changeMode }>
                <img src={ mode === `light` ? themeLight : themeDark } alt={ `theme-light` } />
              </div>
            </div>
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
