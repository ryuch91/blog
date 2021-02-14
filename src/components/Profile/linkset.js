// 프로필 카드 오른쪽 부분 하단에 들어갈 관련 링크들의 아이콘 모음

import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Wrapper = styled.div`
  margin: auto 0;
  flex: 0 1 36px;
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) and (orientation: landscape){
    flex: 0 1 25px;
  }
`

const StyledImg = styled(Img)`
`

// Gatsby에서 Img쿼리 후 사용법 : https://www.gatsbyjs.com/docs/working-with-images/
const LinkSet = () => {
  const linkImages = useStaticQuery(graphql`
    query {
      source: allFile(filter: { relativeDirectory: { eq: "link" } }){
        edges {
          node {
            id
            childImageSharp {
              fluid(maxWidth: 50){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      {linkImages.source.edges.map(({node}) => (
          <StyledImg fluid={node.childImageSharp.fluid} alt="social-link" />
      ))}
    </Wrapper>
  )
}

export default LinkSet