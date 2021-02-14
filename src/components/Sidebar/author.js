import React from 'react'
import styled from "styled-components"
import { withPrefix, Link } from "gatsby"
import Img from "gatsby-image"

//Sidebar에서 사용자 정보 섹션을 감싸는 Wrapper
//bio-main w-75
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const StyledImg = styled(Img)`
  max-width: 100px;
  border-radius: 50%;
  box-shadow: 1px 1px 3px;
`
//mt-2
const StyledH3 = styled.h2`
  font-family: 'Raleway';
  font-size: 2vw;
`

//text-muted
const StyledSmall = styled.small`
  font-family: 'Raleway';
`

// Sidebar에 들어갈 정보(프로필 사진, 이름, 내 Summary)
const Author = ({ author, summary, profile }) => {
  return(
    <Wrapper>
      <Link to="/">
        <StyledImg fluid={profile.fluid} alt={author} />
      </Link>
      <StyledH3>{author}</StyledH3>
      <StyledSmall>{summary}</StyledSmall>
    </Wrapper>
  )
}

export default Author