import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/**
 * Hero Illustration
 */
export const HeroIllustration = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1188) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />
}
