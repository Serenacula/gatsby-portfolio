(self.webpackChunkfaylees_portfolio=self.webpackChunkfaylees_portfolio||[]).push([[25],{9789:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return E}});var a=r(7294),n=r(4216),o=r(1208);var l=r(221),i=r(5444);const c="Project-module--image--2KApF";var m=r(2347),s=o.G;var u=function(e){var t=e.data.frontmatter,r=(0,i.useStaticQuery)("1406485810"),n=null,o=null;t.link?(n=t.link,o=!0):(n=null,o=!1,console.log("'"+t.title+"' has no link detected, disabling interaction."));var l=null;if(t.image)if("svg"===t.image.split(".").pop()){var u=r.allFile.edges.find((function(e){return e.node.relativePath===t.image}));u?l=a.createElement("img",{src:u.node.publicURL,className:"Project-module--svgImage--3SFQX",alt:"boo"}):(l=a.createElement("div",{className:c}),console.log("Cannot find image for: "+t.title))}else{var d=r.allImageSharp.edges.find((function(e){return e.node.resize.originalName===t.image}));d?l=a.createElement(m.G,{className:c,image:d.node.gatsbyImageData,imgStyle:{objectFit:"cover"},alt:"boo"}):(l=a.createElement("div",{className:c}),console.log("Cannot find image for: "+t.title))}var f=new Date(t.date).toUTCString().replace(" 00:00:00 GMT","");return a.createElement("div",{className:"Project-module--outerDiv--3fhWF"},a.createElement("div",{className:"Project-module--topDiv--3jB5-"},a.createElement("a",{href:n,className:"Project-module--imageWrap--3Ohp_"},l),a.createElement("div",{className:"Project-module--innerDiv--3fs-d"},a.createElement("a",{href:n,className:"Project-module--titleWrap--3fDQk"},a.createElement("h3",{className:s("Project-module--title--2_aoz",o?"linkColour":"disabledLinkColour")},t.title,o?a.createElement("span",null," »"):null)),a.createElement("p",{className:"Project-module--text--6UzJV"},t.description))),a.createElement("div",{className:"Project-module--bottomDiv--1-dHP"},a.createElement("p",null,"Posted: ",f,o?" | ":null,a.createElement("i",null,n))))},d=r(2335);function f(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var p=r(7303),g=o.G;var E=function(e){var t=e.data.allMarkdownRemark.nodes.sort((function(e,t){return new Date(t.frontmatter.date)-new Date(e.frontmatter.date)}));function r(e){if(/\d{4}-\d{2}-\d{2}/.test(e.frontmatter.date))return!0;throw new Error("Invalid date format: "+e.frontmatter.date+" from the markdown file: "+e.frontmatter.title)}return a.createElement(n.Z,null,a.createElement(d.Z,{title:"Portfolio"}),a.createElement("div",{className:"firstColourBackground"},a.createElement("div",{className:g("mainColumn","portfolio-module--firstSection--343W-")},a.createElement(l.Z,{links:p}),a.createElement("h1",{className:g("firstColourText","portfolio-module--firstSectionTitle--2MmK7")},"Portfolio"),a.createElement("h2",{className:g("firstColourText","portfolio-module--firstSectionSubtitle--1LZND")},"This is a list of all the projects I've created"))),a.createElement("div",{className:"firstColourBackground"},a.createElement("div",{className:g("mainColumn","portfolio-module--secondSection--2ZC45")},function(e){for(var t,n=[],o=f(e);!(t=o()).done;){var l=t.value;r(l)&&n.push(a.createElement(u,{key:l.frontmatter.title,data:l}))}return n}(t))))}}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-fb9ec5962f75c635031a.js.map