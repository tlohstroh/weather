import axios from 'axios';
import * as config from '../../config'

// import API_KEY from '../../config'
const API_KEY = config.API_KEY;

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  // axios.get() returns a promise
  const request = axios.get(url);
  console.log(url)
  console.log('Request',request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
