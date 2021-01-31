import React from "react"
import styled from "styled-components"

import Title from "./title"
import DarkModeToggle from "./toggle"
import Logo from "./logo"
import Menu from "./menu"

// 전체 Header를 감싸는 Container
// vh(vertical height) & vw(vertical width)
//  CSS의 너비 값은 가장 가까운 부모 요소에 상대적인 영향을 받는 단점이 있음
//  vh, vw는 뷰포트의 너비값과 높이값에 따라 달라지는 값
//  vh는 뷰포트 높이값의 1/100 단위 (e.g. 900px일 때 1vh = 9px)
const HeaderWrapper = styled.nav`
  height: 10vh;
  display: flex;
  background-color: #fff;
  position: relative;
  justify-content: space-between;
  text-transform: uppercase;
  border-bottom: 2px solid #33333320;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;
  @media (max-width: 768px){
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`

// Header의 왼쪽편에 오는 요소들을 담을 container
//  flex-wrap : Items의 여러 줄 묶음(줄 바꿈)을 설정
//    nowrap : 모든 item들을 한 줄에 표시 (기본값)
//    wrap : item들을 여러 줄로 묶음
const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content : space-around;
`

const Header = () => {
  return(
    <HeaderWrapper>
      <HeaderLeft>
        <Logo/>
        <Title/>
        <DarkModeToggle/>
      </HeaderLeft>
      <Menu/>
    </HeaderWrapper>
  )
}

export default Header