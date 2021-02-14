import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'

const StyledImg = styled(Img)`
  margin: auto 0;
  width: 50px;
`

// Gatsby에서 Img쿼리 후 사용법 : https://www.gatsbyjs.com/docs/working-with-images/
const getAuthorImg = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "profile-pic" }, extension: { eq: "jpg" }){
        childImageSharp {
          fluid(maxWidth: 50){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <StyledImg fluid={data.file.childImageSharp.fluid} alt="author" />
  )
}

export default getAuthorImg