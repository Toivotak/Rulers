import React from 'react';
import PropTypes from 'prop-types'

const Header = ({ title, link, className, hType, hSize}) => {
    if(hSize === "h2"){
        return (
            <h2 className={className}>{title}</h2>
        )
    }
    return (
        <header className={hType}>
            <a href={link}
            className="hiddenLink"><h1 className={className}>{title}</h1></a>
        </header>
    )
}

Header.defaultProps = {
    title: "Rulers of the 19th century",
    link: "https://en.wikipedia.org/wiki/19th_century",
    className: "title",
    hType: "header"
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string
}

export default Header