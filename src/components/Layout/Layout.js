import React from 'react';

import Aux from '../../hoc/Aux';
import Button from '../../UI/Buttons/Button/Button';
import './Layout.css';
import off from '../../UI/Buttons/ButtonImages/switch.png';
import back from '../../UI/Buttons/ButtonImages/back-arrow.png';

const layout = (props) => (
    <Aux>
        <div className="header">
            <Button btnType={"return"}
                    img={back}/>
            <h1>STATIONS</h1>
            <Button btnType={"off"}
                    img={off}/>
        </div>
        {props.children}
        <div className="footer">
        {
            props.nowPlaying.length > 0
                ? (
                    <Aux>
                        <b className={"nowPlaying"}>CURRENTLY PLAYING</b>
                        <h1 className={"stationName"}>{props.nowPlaying}</h1>
                    </Aux>
                )
                : null
        }
        </div>
    </Aux>
);

export default layout;