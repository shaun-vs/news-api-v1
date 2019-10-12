import React from 'react';
import logo from './logo.svg';
import './App.css';
import NewsSearchContainer from './containers/NewsSearchContainer';
import NewsResultsContainer from './containers/NewsResultsContainer';
import PageListContainer from './containers/PageListContainer';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <NewsSearchContainer />
      <NewsResultsContainer />
      <PageListContainer />
    </div>
  );
}

export default App;
