import React from 'react';
import './Button.scss';

import propTypes from 'prop-types';






const Button = props => {
  return (
    <button 
    className={`btn ${props.className}`} 
    onClick={props.onClick ? () => props.onClick() : null}>
        {props.children}
    </button>
  )
}

 export const OutlineButton = props => {
    return(
        <Button  
        className={`btn-outline ${props.className}`} 
        onClick={props.onClick ? () => props.onClick() : null}>
            {props.children}
        </Button>
    )
}


Button. propTypes = {
    onClick: propTypes.func
}

export default Button