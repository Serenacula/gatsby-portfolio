import { Link } from "gatsby"
import React, { useEffect, useState, useRef } from "react"
import PropTypes from "prop-types"
import { gsap } from "gsap"
import { useIsMount } from "../UseIsMount"

import * as styles from "./NavigationBar.module.css"

/* 
 *  Okay, the things left to do are:
 *      1. Make the buttons look nice, including changing colour on hover, and indicating the current page
 *      2. Adding an expanded menu bar for desktop
 *      3. Add cool animations!
 *      4. Fix tabbing accessibility (it currently doesn't work properly)
 */

function NavigationBar(props) {
    
    const links = props.links
    const suppressLogo = props.suppressLogo
    const suppressFirstRender = props.suppressFirstRender
    
    // Used to manage the opening and animation of the navbar menu
    const [ clicked, setClicked ] = useState(false)
    const navObject = useRef(null)
    const isMount = useIsMount()
    
    const buttonEasing = "circ.out"
    const buttonDuration = 0.4
    const menuHeight = 120

    

    
    function menuClickHandler() {
        setClicked(!clicked)
    }
    
    function animateOpen(menuList, topSpan, middleSpan, bottomSpan) {
        
        gsap.to(menuList, {height: menuHeight, duration: 0.4})
        
        gsap.to(topSpan,    {rotate: "45deg",  y: "0",  duration: buttonDuration, ease: buttonEasing})
        gsap.to(middleSpan, {opacity: 0,       x: "16", duration: buttonDuration, ease: buttonEasing})
        gsap.to(bottomSpan, {rotate: "-45deg", y: "0",  duration: buttonDuration, ease: buttonEasing})
    }
    
    function animateClose(menuList, topSpan, middleSpan, bottomSpan) {
        
        
        gsap.to(menuList, {height: 0, duration: 0.4})
    
        gsap.to(topSpan, {rotate: "0deg", y: "-8", duration: buttonDuration, ease: buttonEasing})
        gsap.to(middleSpan, {opacity: 1, x: "0", duration: buttonDuration, ease: buttonEasing})
        gsap.to(bottomSpan, {rotate: "0deg", y: "8", duration: buttonDuration, ease: buttonEasing})
        
    }
    
    function animateFirstRender(menuList, topSpan, middleSpan, bottomSpan) {
        gsap.to(menuList, {height: 0, duration: 0})
    
        gsap.to(topSpan, {rotate: "0deg", y: "-8", duration: 0})
        gsap.to(middleSpan, {opacity: 1, x: "0", duration: 0})
        gsap.to(bottomSpan, {rotate: "0deg", y: "8", duration: 0})
    }
    
    useEffect(() => {
        // These are in here to ensure the navbar actually exists when we try to call it
        const menuList = navObject.current.querySelector(".navbarMenuList")
        const topSpan = navObject.current.querySelector(".menuButtonTopSpan")
        const middleSpan = navObject.current.querySelector(".menuButtonMiddleSpan")
        const bottomSpan = navObject.current.querySelector(".menuButtonBottomSpan")
        gsap.set([topSpan, middleSpan, bottomSpan], {transformOrigin: "50% 50%"})
        
        // This prevents it from running when the page first loads.
        if (isMount && suppressFirstRender) {
            animateFirstRender(menuList, topSpan, middleSpan, bottomSpan)
        } else {
            clicked ? animateOpen(menuList, topSpan, middleSpan, bottomSpan) : animateClose(menuList, topSpan, middleSpan, bottomSpan)
        }
    })
    
    
    
    // This function is the loops to create the links. It is called in the return elements
    
    function makeLinks(list, styles) {
        let result = list.map((item, index) => {
            return <li key={item.name + index} className={styles.listItem}>
                <Link className={styles.textStyle + " " + styles.link} to={item.url}>{item.name}</Link>
            </li>
        })
        
        return result
    }
    
    return (
        
        <nav ref={navObject} className={styles.navBar}>
            {/* The Logo Button */}
            {!suppressLogo ? 
                <Link className={styles.textStyle + " " + styles.home} to="/">Faylee</Link> 
                : 
                <div className={styles.hiddenLogo} /> 
            }
             
            
            {/* This div is the menu button */}
            <button 
            className={styles.menuButton} 
            onClick={menuClickHandler}
            >
                <span className="menuButtonTopSpan" />
                <span className="menuButtonMiddleSpan" />
                <span className="menuButtonBottomSpan" />
            </button>
            {/* This is a loop that makes the classes */}
            <ul className={styles.navbarMenuList + " navbarMenuList"}>
                {makeLinks(links.menuItems, styles)}
            </ul>
        </nav>
    )

}

NavigationBar.propTypes = {
    links: PropTypes.object.isRequired,
    suppressLogo: PropTypes.bool,
    suppressFirstRender: PropTypes.bool
    
}

NavigationBar.defaultProps = {
    suppressLogo: false,
    suppressFirstRender: false,
}

export default NavigationBar