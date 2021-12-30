import React from "react"
import PropTypes from "prop-types"

function StyleContent({children}) {

    /* 
        This controls the styling of the main column.
    */

    const mainStyle = {
        textAlign: "center",
        color: "black",
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0 1.0875rem 1.45rem`,
    }

    return <div style={mainStyle}>
        {children}
    </div>
}

StyleContent.propTypes = {
    children: PropTypes.node.isRequired,
}

export default StyleContent