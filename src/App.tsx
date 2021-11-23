import React from 'react';


//styles import global
import{GlobalStyle} from './GlobalStyle';

//components
import Header from './components/Header/header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

//Routing
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';

const App:React.FC =() =>  (
    <Router >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/:movieId" element={<Movie/>}/>
        <Route path="/*" element={<NotFound/>}/>
      </Routes>

      
      <GlobalStyle />
    </Router>
  );


export default App;
