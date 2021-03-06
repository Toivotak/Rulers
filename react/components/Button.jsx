import React from 'react'
import PropTypes from 'prop-types'

const Button = ({type, text, onClick}) => {

    return <button 
        style={{cursor:'pointer'}}
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
