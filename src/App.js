import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

import './style.css';

// const app = React.createElement('div', {className: 'App'}, 'Hello');

function App() {
  return ( 
    <React.Fragment>
    <Header/>
    <Main/>
    </React.Fragment>
  );
}

export default App;
