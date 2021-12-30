import React from "react"

import * as styles from "./Footer.module.css"

function Footer() {
    
    const obscuredAddress = "" // Content removed for online publishing
    const addressStyle = {
        color: "whitesmoke",
        textDecoration: "none"
    }
    
    return <div className={styles.sectionDiv}>
    
        <h3>Contact</h3>
        <span className="replaceEmail">{obscuredAddress}</span>
        
    </div>
}

export default Footer