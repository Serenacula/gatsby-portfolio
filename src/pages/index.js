import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

// Utility Scripts
import * as utilities from "../resources/scripts/utilities"

// Fonts
import "@fontsource/great-vibes/400.css"
import "@fontsource/merriweather/400.css"
import "@fontsource/montserrat/400.css"

// CSS
import "./css/defaultLayout.css"
import "./css/customLayout.css"
import * as styles from "./css/index.module.css"

// Components
import Wrapper from "../components/Wrapper"
import SEO from "../components/SEO"
import NavigationBar from "../components/NavigationBar/NavigationBar"
// import Footer from "../components/Footer/Footer"

// This brings in the menuItems json, for our navbar
const menuItems = require("../resources/json/menuItems.json")

const combine = utilities.combineClasses

/*
 *	Okay so, my CSS in this project is gonna be arranged like this:
 *		1. Defaults will be in defaultLayout
 * 		2. Any CSS that is project-specific but relevant to multiple pages will go into customLayout
 * 		3. Each page will also have a separate stylesheet module, which will be relevant only to that page
 * 		4. Inline styling will be avoided, in favour of the modular stylesheet.
 */

function IndexPage() {
    return (
        <Wrapper>
            <SEO title="Faylee Murray Browne" noTemplate={true} />
            <div className="firstColourBackground">
                <div className="mainColumn">
                    <NavigationBar
                        links={menuItems}
                        suppressFirstRender={true}
                        suppressLogo={true}
                    />

                    <h1 className={styles.mainTitle}>
                        <span style={{ display: "inline-block" }}>Faylee</span>{" "}
                        <span style={{ display: "inline-block" }}>
                            Murray Browne
                        </span>
                    </h1>

                    <h3 className={styles.mainSubtitle}>
                        I am a <span style={{ color: "#a134ff" }}>queer</span>,
                        self-taught junior web developer
                    </h3>

                    <StaticImage
                        className={styles.headerImage}
                        src="../resources/images/amsterdam.png"
                        alt="Cartoon Houses"
                        width={550}
                        placeholder="blurred"
                    />
                </div>
            </div>

            <div className="secondColourBackground">
                <div className={combine("mainColumn", styles.secondSection)}>
                    <h2
                        className={combine(
                            styles.sectionTitle,
                            "secondColourText"
                        )}
                    >
                        About Me
                    </h2>

                    <p>
                        {"Heya..! I'm a newbie web dev, living in Leeds, UK."}
                    </p>

                    <p>
                        Last summer I decided to learn how to make websites in
                        my spare time. This is the result!
                    </p>
                </div>
            </div>

            <div className="thirdColourBackground">
                <div className="mainColumn">
                    <h2
                        className={combine(
                            styles.sectionTitle,
                            styles.skillsTitle,
                            "thirdColourText"
                        )}
                    >
                        Skills
                    </h2>
                </div>

                {/* This bit will probably get abstracted into a different component, but I wanna build it first */}
                <div className={combine("mainColumn", styles.thirdSection)}>
                    <h2
                        className={combine(
                            styles.sectionTitle,
                            "thirdColourText"
                        )}
                    >
                        Starting with the fundamentals
                    </h2>

                    <div
                        className={combine(
                            "firstColourBackground",
                            styles.innerDiv
                        )}
                    >
                        <h3>HTML</h3>
                        <p>
                            As the basis of everything, I've made sure I have a
                            solid understanding of HTML.
                        </p>

                        <h3>CSS</h3>
                        <p>
                            CSS is what makes websites beautiful, so it has been
                            essential to learn. I've worked with both plain CSS,
                            as well as the Bootstrap framework.
                        </p>

                        <h3>Javascript</h3>
                        <p>
                            I have dedicated time to make sure I know vanilla
                            javascript reasonably well, before moving to modern
                            frameworks. I've also spent some time with jQuery,
                            though I no longer use it.
                        </p>
                    </div>
                </div>
            </div>

            <div className="fourthColourBackground">
                {/* This bit will probably get abstracted into a different component, but I wanna build it first */}
                <div className={combine("mainColumn", styles.fourthSection)}>
                    <h2
                        className={combine(
                            styles.sectionTitle,
                            "fourthColourText"
                        )}
                    >
                        Learning the backend
                    </h2>

                    <div
                        className={combine(
                            "firstColourBackground",
                            styles.innerDiv
                        )}
                    >
                        <h3>Express</h3>
                        <p>
                            I can build a basic backend using express on the
                            Node.js platform.
                        </p>

                        <h3>Git</h3>
                        <p>
                            I use Git for my source-control. It is also
                            essential for deploying to platforms like Heroku.
                        </p>

                        <h3>MongoDB</h3>
                        <p>
                            Though not my biggest strength, learning a database
                            system is an important skill, and one I have spent
                            time on. It is an area I wish to expand on as I
                            grow.
                        </p>
                    </div>
                </div>
            </div>

            <div className="fifthColourBackground">
                {/* This bit will probably get abstracted into a different component at some point, but I wanna build it first */}
                <div className={combine("mainColumn", styles.fifthSection)}>
                    <h2
                        className={combine(
                            styles.sectionTitle,
                            "fifthColourText"
                        )}
                    >
                        Building with modern frameworks
                    </h2>

                    <div
                        className={combine(
                            "firstColourBackground",
                            styles.innerDiv
                        )}
                    >
                        <h3>React</h3>
                        <p>
                            My framework of choice, as well as an industry
                            standard, I have spent the last two months getting
                            comfortable with React. I find it both intuitive and
                            well thought-out, and it is a skillset I wish to
                            truly master.
                        </p>

                        <h3>Gatsby</h3>
                        <p>
                            The framework that made this site! Gatsby builds on
                            top of React to create static sites, allowing for a
                            fast and reactive frontend. It is an excellent
                            modern framework that competes with Next.js.{" "}
                        </p>

                        <h3>GSAP</h3>
                        <p>
                            A modern animation framework that works well with
                            React, GSAP is my current choice for making
                            beautiful and easy animations.
                        </p>
                    </div>
                </div>
            </div>

            {/* <Footer /> */}
        </Wrapper>
    )
}

export default IndexPage
