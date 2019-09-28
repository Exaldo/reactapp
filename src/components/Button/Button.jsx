import React from 'react'
import './Button.css'
import propTypes from 'prop-types'
const Button =(props)=>{
    const {
        className,
        onClick,
        text,
        type
    } = props;//Orden alfabetico por Good Practices
    return (
     <button className={className} type={type} onClick={onClick}>{text}</button>
    )
}
Button.defaultProps={
    type:'button',
    className:'btn'
}
Button.propTypes={
    onClick: propTypes.func.isRequired,
    className: propTypes.string,
    text: propTypes.string.isRequired
}
export default Button;