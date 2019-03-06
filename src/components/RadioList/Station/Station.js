import React from 'react';

import RowExpansion from './RowExpansion/RowExpansion';
import "./Station.css";
import Wrap from "../../../hoc/Wrap";

const station = (props) => (
    <Wrap>
        <RowExpansion expanded={props.expanded}/>
        <div onClick={props.changeStation.bind(this, props.name)}
             className={"station"}>
            <h1 className={"name"}>{props.name}</h1>
            <h1 className={"frequency"}>{props.frequency}</h1>
        </div>
    </Wrap>
);

export default station;