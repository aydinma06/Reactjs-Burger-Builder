import React from 'react';

import './Button.css'

const button = (props) => {
    const buttonType = props.btnType === 'Danger' ? 'Danger' : 'Success';
    console.log(buttonType);
    return (
        <button 
            className={['Button', buttonType].join(' ')}
            onClick={props.clicked}>{props.children}</button>
    );
};

export default button;