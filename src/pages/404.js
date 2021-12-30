import * as React from "react"

import Wrapper from "../components/Wrapper"
import SEO from "../components/SEO"

const outsideStyle = {
    padding: "0",
    width: "100vw",
    height: "100vh",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
}

const innerStyle = {
    width: "600px",
    height: "400px",
    paddingTop: "150px",
    boxShadow: "2px 2px 6px 6px rgb(0, 0, 0, 0.1)",
    margin: "0 auto"
}

const NotFoundPage = () => (
    <Wrapper>
        <div className="secondColourBackground" style={outsideStyle}>
            <div className="firstColourBackground" style={innerStyle}>
                <SEO title="404: Not found" />
                <h1 className="firstColourText">404: Not Found</h1>
                <p className="firstColourText">You just hit a route that doesn&#39;t exist...</p>
            </div>
        </div>
        
    </Wrapper>
)

export default NotFoundPage
