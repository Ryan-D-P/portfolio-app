import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className=".header-content">
          <h1>Ryan-D-P</h1>
          <a href="http://github.com/Ryan-D-P" target="_blank" rel="noopener noreferrer">
            <img src="" alt="GitHub icon" />
          </a>
          <Navbar />
        </header>
        <main className="main-content">
            <Routes>
              <Route path="/" element={ <p>HOME</p> } />
              <Route path="/resume" element={ <p>RESUME</p> } />
            </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
