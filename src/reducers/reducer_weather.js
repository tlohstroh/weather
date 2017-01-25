import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action){
  // console.log("Action received", action);

  switch (action.type){
    case FETCH_WEATHER:
      // add on to NEW VERSION of existing state! (so no push!!)
      // return state.concat([ acion.payload.data]);
      // es6:
      return [action.payload.data, ...state]; // [city], [city], [city] NOT [city, [city, city]]
  }
  return state;
}
