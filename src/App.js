import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Calendar from './components/Calendar/Calendar';
import Details from './components/Details/Details';
import FetchData from './service/Fetchdata';
import './style.css';

// const app = React.createElement('div', {className: 'App'}, 'Hello');
class App extends React.Component {

  fetchData = new FetchData();
  state = {
    rocket: 'Falcon1',
    rocketFeatures: null, 
    rockets: [],
  };
  componentDidMount() {
    // this.fetchData.getCompany().then(data => console.log(data)) - check out they we take a data
    this.updateRocket();
  }

  updateRocket() {
    this.fetchData.getRocket
      .then (data => {
        this.setState ({rockets: data.map(item => item.name)})
        return data
      })
      .then(data => data.find(item => item.name === this.state.rocket))
      .then(rocketFeatures => {
        this.setState ({rocketFeatures});
      }); 
    }
  
  changeRocket = rocket => {
    this.setState({
      rocket
    }, this.updateRocket);
  }


  render (){
    return ( 
      <React.Fragment>
        <Header rockets={this.state.rockets} changeRocket = {this.changeRocket}/>
        <Main rocket={this.state.rocket}/>
        <Features/>
        <Footer/>
        <Calendar/>
        <Details/>
      </React.Fragment>
    );
  }
}

export default App;
