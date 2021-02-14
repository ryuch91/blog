//프로필 카드의 왼쪽에 나올 큰 사진

import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

// margin: (상하여백 = auto : 균등배분), (좌우여백 = 0)
// flex : (flex-grow), (flex-shrink), (flex-basis)
//  flex-basis : 항목의 크기 결정. 기본값은 auto (지정되어 있지않으면 내용물의 크기를 따름)
//  flex-grow : 양수인 경우 주축 방향으로 flex-basis값 이상으로 늘어날 수 있음 (각, flex box의 비율을 지정)
//  flex-shrink : flex-grow와 반대로 공간이 부족할 때의 분배 방법을 결정 (더 큰 값일수록 많이 줄어들음)
//  e.g. flex: 0 1 36px; 주축으로 남는 공간이 있어도 늘어나지 않음. 기본 크기는 36px 
// media query
//  media-type이 지정되어 있지 않으므로 all(screen, tv, print, ...)
//  (max-width: 768px) and (orientation: landscape) -> 화면크기가 768px 이하이고 가로화면일 때 적용
// width : 30px
//  LogoWrapper의 크기를 지정해주지 않으면, Logo 이미지가 나타나지 않는 문제가 있음..
const Wrapper = styled.div`
  margin: auto 0;
  width: 50px;
  flex: 0 1 50px;
  @media (max-width: 768px) and (orientation: landscape){
    flex: 0 1 36px;
  }
`

const StyledImg = styled(Img)`
`

// Gatsby에서 Img쿼리 후 사용법 : https://www.gatsbyjs.com/docs/working-with-images/
const ProfileImg = () => {
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
    <Wrapper>
      <StyledImg fluid={data.file.childImageSharp.fluid} alt="profile" />
    </Wrapper>
  )
}

export default ProfileImg