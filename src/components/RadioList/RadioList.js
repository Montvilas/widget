import React from 'react';

import './RadioList.css';
import Station from './Station/Station';

const radioList = (props) => (
    <div className="radioList">
        {props.stations.map( station => (
            <Station key={station.name}
                     name={station.name}
                     frequency={station.frequency}
                     expanded={station.name === props.nowPlaying}
                     changeStation={props.changeStation}/>
        ))}
    </div>
);

export default radioList;