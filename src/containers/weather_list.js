import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeathterList extends Component {
  renderWeather(cityData){
    const name = cityData.city.name;

    return(
      <tr key={name}>
        <td>{name}</td>
      </tr>
    )
  }


  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
