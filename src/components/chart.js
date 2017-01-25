import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';
import _ from 'lodash';

function average(data) {
  return _.round(_.sum(data)/data.length);
  // you could do this with reduce too.. try that..
}

export default (props) => {
  return(
    <div>
      <Sparklines svgHeight={120} svgWidth={250} data={props.data}>
        <SparklinesLine color= {props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}
