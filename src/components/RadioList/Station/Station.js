import React from 'react';

import RowExpansion from './RowExpansion/RowExpansion';
import "./Station.css";
import Aux from "../../../hoc/Aux";

const station = (props) => (
    <Aux>
        <RowExpansion expanded={props.expanded}/>
        <div onClick={props.changeStation.bind(this, props.name)}
             className={"station"}>
            <h1 className={"name"}>{props.name}</h1>
            <h1 className={"frequency"}>{props.frequency}</h1>
        </div>
    </Aux>
);

export default station;