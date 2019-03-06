import React from 'react';

import plus from '../../../../UI/Buttons/ButtonImages/plus.png';
import minus from '../../../../UI/Buttons/ButtonImages/minus.png';
import defaultImg from '../../../../UI/StationsLogos/default.png';
import Button from '../../../../UI/Buttons/Button/Button';
import './RowExpansion.css';

const rowExpansion = (props) => (
    props.expanded
        ? (
            <div className={"expandedRow"}>
                <Button btnType={"volume"}
                        img={minus}/>
                <img src={defaultImg}
                     className={"stationImg"}
                     alt={defaultImg}/>
                <Button btnType={"volume"}
                        img={plus}/>
            </div>
        ) : null
);

export default rowExpansion;
