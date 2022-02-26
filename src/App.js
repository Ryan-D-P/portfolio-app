import Navbar from "./Navbar";
import Home from "./Home";
import Resume from "./Resume";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ColorThemeSelect from "./ColorThemeSelect";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="header-content">
          <h1>Ryan-D-P</h1>
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
      </div>
    </BrowserRouter>
  );
}

export default App;
