import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

const Button = ({type, text, onClick}) => {

    return <button 
        type={type}
        onClick={onClick} 
        className="button"> 
            {text}
        </button>
}

Button.defaultProps = {
    type: "button",
    text: "Missing",
    onClick: () => (console.log("default onClick"))
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string,
    onClick: PropTypes.func.isRequired,
}

export default Button
