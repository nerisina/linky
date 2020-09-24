import React from "react";
import "./App.scss";
import ShortlyBuilder from "./components/ShortlyBuilder";
import from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <header >
        <div className='logo'>Bely your URL</div>
        <nav>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">List of URLs</a></li>
          </ul>
        </nav>
        <div className='github'><a href="https://github.com/nerisina/linky" title="Github Code"><img src="https://img.icons8.com/fluent/48/000000/github.png" alt="Github Icon"/></a></div>
        
      </header>
      <ShortlyBuilder />
      <footer>
        Made with <span role='img' aria-label="heart">💚</span> by <a href='https://neriis.com'>@nerisina</a>
      </footer>
    </div>
  );
}

export default App;
