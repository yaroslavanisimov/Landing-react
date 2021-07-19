import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Calendar from './components/Calendar/Calendar';
import Details from './components/Details/Details';

import './style.css';

// const app = React.createElement('div', {className: 'App'}, 'Hello');

function App() {
  return ( 
    <React.Fragment>
      <Header/>
      <Main/>
      <Features/>
      <Footer/>
      <Calendar/>
    </React.Fragment>
  );
}

export default App;
