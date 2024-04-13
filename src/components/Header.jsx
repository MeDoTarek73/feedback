import React from 'react'
import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
    const styles = { backgroundColor: bgColor, color: textColor }
    return (
        <header style={styles}>
            <div className="container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}
Header.defaultProps = {
    text: "Feedback UI",
    bgColor: "black",
    textColor: "white"
}
Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}
export default Header