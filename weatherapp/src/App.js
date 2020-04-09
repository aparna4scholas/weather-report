import React from 'react';
import './App.css';
import axios from 'axios';
import Weather from './components/Weather';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Monday from './components/Monday';
import Tuesday from './components/Tuesday';
import Wednesday from './components/Wednesday';
import Thursday from './components/Thursday';
import Friday from './components/Friday';
import Saturday from './components/Saturday';
import Sunday from './components/Sunday';

const apikey = process.env.REACT_APP_API_KEY;
console.log(apikey);
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: null,
    }
  }

  componentDidMount() {
    // this.getWeatherData();
  }

  // async getWeatherData() {
  //   try {
  //     const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast?q=london&appid=e4447104f032368a2a14af1ccf6fd22e&units=imperial');
      
  //     this.setState({ weather: response.data });
  //   } catch(error) {
  //     console.error(error);
  //   }
  // }

  getWeatherData() {
    axios.get('https://api.openweathermap.org/data/2.5/forecast?q=london&appid=' + apikey + '&units=imperial')
    .then(response => {
      // console.log(response.data);
      this.setState({ weather: response.data });
    }).catch(error => console.error(error));
  }

  nullcheck() {
    if(this.state.weather === null) {
      return <h2>no information</h2>
    } else {
      this.state.weather.list.map(listItem => <Weather dt={listItem.weather} />);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            this.nullcheck()
          }
        </header>
      </div>
    );
  }
}

export default App;