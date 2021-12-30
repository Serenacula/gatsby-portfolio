import * as React from "react"
import PropTypes from "prop-types"

/* 
    This component provides any scripts or styling we want to apply to the entire page.
*/

const Wrapper = ({ children }) => {


    // Setting up any email replacements
    const documentObject = React.useRef(null)

    React.useEffect(() => {
        // Contents were removed
    }, [])

    

    return (
        <main
        ref={documentObject}
        >
            {children}
        </main>
    )
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Wrapper
