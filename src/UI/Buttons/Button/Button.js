import React from 'react';

import './Button.css';

const button = (props) => (
    <button className={"button"}><img className={props.btnType} src={props.img}/></button>
);

export default button;