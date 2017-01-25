import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeathterList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp - 273.15)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    // const lon = cityData.city.coord.lon;
    // const lat = cityData.city.coord.lat;
    // es6: find the coord element and grab the lon and lat propperties of of it.
    // and assign them to two new variables called lon and lat.
    const { lon, lat } = cityData.city.coord
    // console.log(temps);
    return(
      <tr key={name}>
        {/* <td>{name}</td> */}
        <td><GoogleMap lon={lon} lat={lat} st/></td>
        <td><Chart data={temps} color="orange" units="°C"/></td>
        <td><Chart data={pressures} color="green" units="hPa"/></td>
        <td><Chart data={humidities} color="grey" units="%"/></td>
      </tr>
    )
  }


  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (°C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// function mapStateToProps(state){
//   // we're using the state of weater here because we assigned our weather reducer
//   // to the weather key in combine reducers
//   return {weather: state.weather};
// }

function mapStateToProps({ weather }){
  // we're using the state of weater here because we assigned our weather reducer
  // to the weather key in combine reducers
  return { weather }; //{ weather } === { weather: weather }
}


export default connect(mapStateToProps)(WeathterList);
