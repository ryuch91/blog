/**
* Header의 로고 옆에 들어갈 사이트 제목
*/
import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// display
//  inline
//    앞뒤로 줄바꿈없이 한 줄에 다른 엘리먼트들과 나란히 배치됨
//    width, height 속성을 줘도, 내용물만큼만 크기를 차지함
//    margin, padding은 상하는 무시되고, 좌우에만 적용됨
//    대표적으로 <span>, <em>, <a> 태그가 있음
//  block
//    전후 줄바꿈이 들어가서 다른 엘리먼트들을 밀어내고 한 줄을 차지함
//    대표적으로 <div>, <p>, <h1> 태그가 있음
//    width, height, margin, padding 속성이 모두 적용됨
//  inline-block
//    기본적으로 inline처럼 전후 줄바꿈없이 다른 엘리먼트들과 나란히 배치됨
//    하지만, inline에서 불가능한 width, height, margin, padding 속성 사용 가능
// css position
//  static
//    모든 태그들의 기본 상태. 차례대로 위->아래, 왼쪽->오른쪽으로 쌓임
//  relative
//    top, bottom, left, right을 통해 각 방향에서 안쪽으로 주어진 픽셀만틈 이동
//    보통 같은 position이면 나중에 나온 태그가 위쪽으로 오지만, z-index로 조절 가능
//  absolute
//    position: static을 가지지 않은(relative, absolute, fixed) 가장 가까운 부모를 기준으로 움직임
//    없으면 가장 위의 태그(body)가 기준이 됨
//    div라도 더이상 width가 100%가 아니게 됨
//  fixed
const TitleLink = styled(Link)`
  flex: 0 1 80px;
  text-decoration: none;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: bold;
  color: #111;
  white-space: nowrap;
  margin: auto 1vw;
`

const Title = ({ title }) => {
  return(
    <TitleLink to="/">
      {title}
    </TitleLink>
  )
}

export default Title