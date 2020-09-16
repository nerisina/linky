import React from "react";
import "./App.scss";
import ShortlyBuilder from "./components/ShortlyBuilder";

function App() {
  return (
    <div className="container">
      <header >
        <div className='logo'>Bely your URL</div>
        <div><a href="https://github.com" title="Github Code"><img src="https://img.icons8.com/fluent/48/000000/github.png" alt="Github Icon"/></a></div>
      </header>
      <ShortlyBuilder />
      <footer>
        Made with <span role='img' aria-label="heart">💚</span> by <a href='https://neriis.com' className='gold'>@nerisina</a>
      </footer>
    </div>
  );
}

export default App;
