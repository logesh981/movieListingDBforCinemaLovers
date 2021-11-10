import React from 'react';


//styles import global
import{GlobalStyle} from './GlobalStyle';

//components
import Header from './components/Header/header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <GlobalStyle />
    </div>
  );
}

export default App;
