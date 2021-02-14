import React from "react"
import styled from "styled-components"

import ProfileImg from "./image"
import LinkSet from "./linkset"

// 전체 Profile Card를 감싸는 Container
// vh(vertical height) & vw(vertical width)
//  CSS의 너비 값은 가장 가까운 부모 요소에 상대적인 영향을 받는 단점이 있음
//  vh, vw는 뷰포트의 너비값과 높이값에 따라 달라지는 값
//  vh는 뷰포트 높이값의 1/100 단위 (e.g. 900px일 때 1vh = 9px)
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px auto;
  padding: 0 5vw;
  align-self: center;
  @media (max-width: 768px){
  }
`
// 카드의 오른편에 오는 요소들을 담을 container
//  flex-wrap : Items의 여러 줄 묶음(줄 바꿈)을 설정
//    nowrap : 모든 item들을 한 줄에 표시 (기본값)
//    wrap : item들을 여러 줄로 묶음
const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
`

const Title = styled.h3``
const Paragraph = styled.p``

const ProfileCard = () => {
  return(
    <Wrapper>
      <ProfileImg/>
      <RightWrapper>
        <Title>My name</Title>
        <Paragraph>description</Paragraph>
        <LinkSet />
      </RightWrapper>
    </Wrapper>
  )
}

export default ProfileCard