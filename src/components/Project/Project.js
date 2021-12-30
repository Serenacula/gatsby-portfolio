import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import * as styles from "./Project.module.css"

import * as utilities from "../../resources/scripts/utilities"
import { GatsbyImage } from "gatsby-plugin-image"

const combine = utilities.combineClasses

// This component is used on the Portfolio page
//
// It displays a project, as part of a list of such projects

function Project(props) {
    
    const frontmatter = props.data.frontmatter
    // const content = props.data.html
    

    
    
    // console.log(frontmatter.link);
    // const link = frontmatter.link ? frontmatter.link : disableLink()
    
    // Checking if there is a link. If not, interactivity is disabled to avoid confusion.
    // let linkStatus = true
    // function disableLink() {
    //     linkStatus = false
    //     console.log("'" + frontmatter.title + "' has no link detected, disabling interaction.");
    //     return null
    // }
    
    
    // This query gets the paths of all the images, and also their relativePath so we can check the name
    const data = useStaticQuery(graphql`
		{
			allImageSharp {
				edges {
					node {
						resize {
							originalName
						}
						gatsbyImageData
					}
				}
			}
			allFile(filter: { extension: { eq: "svg" } }) {
				edges {
					node {
						relativePath
						publicURL
					}
				}
			}
		}
	`)
    
    // Link Validating
    
    let link = null
    let linkStatus = null
    if (frontmatter.link) {
        link = frontmatter.link
        linkStatus = true
    }
    else {
        link = null
        linkStatus = false
        console.log("'" + frontmatter.title + "' has no link detected, disabling interaction.")
        
    }
    
    
    // Image Sorting //
    
    let image = null
    
    // First, let's check if we actually have an image.
    if (frontmatter.image) {
        
        // Now get image extension
        let extension = frontmatter.image.split('.').pop();
        
        // If the image is an svg, then we just need the public address of it, since we don't need to do anything to it.
        if (extension === "svg") {
            
            const imageData = data.allFile.edges.find((item) => item.node.relativePath === frontmatter.image)
            
            if (imageData) {
                image = <img src={imageData.node.publicURL} className={styles.svgImage} alt="boo" />
            }
            else {
                // A placeholder div, if the image doesn't exist
                image = <div className={styles.image} />
                console.log("Cannot find image for: " + frontmatter.title);
            }
        }
        
        // if the image ISN'T an svg, then we want to use imageSharp, and GatsbyImage.
        else {
            
            const imageData = data.allImageSharp.edges.find((item) => item.node.resize.originalName === frontmatter.image)
            
            if (imageData) {
                image = <GatsbyImage className={styles.image} image={imageData.node.gatsbyImageData} imgStyle={{objectFit: "cover"}} alt="boo" />
            }
            else {
                image = <div className={styles.image} />
                console.log("Cannot find image for: " + frontmatter.title);
            }
        }
    }
    
    
    
    
    const bottomDivText = "Posted: "
    const date = new Date(frontmatter.date).toUTCString().replace(" 00:00:00 GMT", "")
    const dividerString = " | "
    
    return (
        // Main wrapper div
        <div className={styles.outerDiv}>
            {/* Top div */}
            <div className={styles.topDiv}>
                {/* Image */}
                <a href={link} className={styles.imageWrap}>
                    {image}
                </a>
                
                {/* Wrapper div for title and description */}
                <div className={styles.innerDiv}>
                    <a href={link} className={styles.titleWrap}>
                        <h3 className={combine(styles.title, linkStatus ? "linkColour" : "disabledLinkColour")}>
                            {frontmatter.title}
                            {linkStatus ? <span> »</span> : null}
                        </h3>
                    </a>
                    
                    <p className={styles.text}>{frontmatter.description}</p>
                </div>
            </div>
            {/* Bottom div */}
            <div className={styles.bottomDiv}>
                <p>
                    {bottomDivText}
                    {date}
                    {linkStatus ? dividerString : null}
                    <i>
                        {link}
                    </i>
                </p>
            </div>
        </div>
	)
}

export default Project