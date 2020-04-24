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
       
      </header>
      <NewsSearchContainer />
      <NewsResultsContainer />
      <PageListContainer />
    </div>
  );
}

export default App;
