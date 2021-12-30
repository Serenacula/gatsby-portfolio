import React from "react"
import Wrapper from "../components/Wrapper"
import { graphql } from "gatsby"

import * as utilities from "../resources/scripts/utilities"

// import "./css/defaultLayout.css"
// import "./css/customLayout.css"
import * as styles from "./css/portfolio.module.css"

import NavigationBar from "../components/NavigationBar/NavigationBar"
import Project from "../components/Project/Project"
import SEO from "../components/SEO"

const menuItems = require("../resources/json/menuItems.json")
const combine = utilities.combineClasses


function Portfolio({data}) {
    
    const sortedProjects = data.allMarkdownRemark.nodes.sort(
        function(b,a) {
            // Currently showing newest first.
            return new Date(a.frontmatter.date) - new Date(b.frontmatter.date)
        }
    )
    
    function testNode(node) {
        
        // Testing that the date is in the correct format: YYYY-MM-DD
        if (!/\d{4}-\d{2}-\d{2}/.test(node.frontmatter.date)) {
            throw new Error("Invalid date format: " + node.frontmatter.date + " from the markdown file: " + node.frontmatter.title);
        }
        
        // Testing that the image requested ends in .svg
        // if (!/.svg$/.test(node.frontmatter.image)) {
        //     throw new Error("Invalid image in markdown file: " + node.frontmatter.title + ", the code currently only accepts .svg images for projects")
        // }
        // The other two queries are tested in the gatsby post.
        else {
            return true
        }
    }
    
    function projectLoop(nodes) {
        let result = []
        for (const node of nodes) {
            // Testing the data in the node, in case it is missing something or has an error
            if (testNode(node)) {
                result.push(<Project key={node.frontmatter.title} data={node} />)
            }
        }
        return result
    }

    return (
        <Wrapper>
            <SEO title="Portfolio" />
            <div className="firstColourBackground">
                <div className={combine("mainColumn", styles.firstSection)}>
                    <NavigationBar links={menuItems} />
                
                    <h1 className={combine("firstColourText", styles.firstSectionTitle)}>Portfolio</h1>
                    <h2 className={combine("firstColourText", styles.firstSectionSubtitle)}>This is a list of all the projects I've created</h2>
                </div>
                
            </div>
            
            <div className="firstColourBackground">
                <div className={combine("mainColumn", styles.secondSection)}>
                    {projectLoop(sortedProjects)}
                </div>
            </div>
            
        </Wrapper>
    )

}

export const result = graphql`
    query MyQuery {
        allMarkdownRemark(
        filter: {frontmatter: {type: {eq: "project"}, posted: {eq: true}}}
        ) {
            nodes {
                frontmatter {
                    title
                    date
                    image
                    type
                    posted
                    link
                    description
                }
                html
            }
        }
    }
`

export default Portfolio