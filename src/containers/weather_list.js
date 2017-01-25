import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeathterList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp - 273.15)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    console.log(temps);
    return(
      <tr key={name}>
        <td>{name}</td>
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
