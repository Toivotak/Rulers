import React from 'react';
import PropTypes from 'prop-types'

const Search = ({ placeholder }) => {
    return (
        <div>
            <input type="text" placeholder={placeholder} />
        </div>
    )
}

Search.defaultProps = {
    text: ""
}

Search.propTypes = {
    text: PropTypes.string
}

export default Search
