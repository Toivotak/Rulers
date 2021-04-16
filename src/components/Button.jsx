import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const Button = ({type, color, text, onClick}) => {

    return <button 
        type={type}
        onClick={onClick}
        style={{backgroundColor : color}} 
        className="btn"> 
            {text}
        </button>
}

Button.defaultProps = {
    type: "button",
    color: "#ff5b00",
    text: "Missing",
    onClick: () => (console.log("default onClick"))
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}
export default Button
