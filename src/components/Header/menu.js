// Header 오른쪽에 들어갈 메뉴 목록 (줄어들면 Hamburger형태로 바뀜)

import React, {useState} from "react"
import styled from "styled-components"
import { Link } from "gatsby"

// 메뉴 하나하나를 나타내는 컴포넌트
const MenuLink = styled(Link)`
	text-decoration: none;
	color: #111;
	display: inline-block;
	white-space: nowrap;
	margin: 0 1vw;
	transition: all 200ms ease-in;
	position: relative;
	:after {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	width: 0%;
	content: ".";
	color: transparent;
	background: goldenrod;
	height: 1px;
	transition: all 0.4s ease-in;
	}
	:hover {
	color: goldenrod;
	::after {
			width: 100%;
	}
	}
	@media (max-width: 768px){
			padding: 20px 0;
			font-size: 1.5rem;
			z-index: 6;
	}
`

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;
  @media (max-width: 768px){
    display: flex;
  }
`

// Menu들을 담을 box
const MenuBox = styled.div`
	display: flex;
	height: 100%;
	justify-content: flex-end;
	align-items: center;
	@media (max-width: 768px) {
		flex-direction: column;
		position: fixed;
		width: 100%;
		justify-content: flex-start;
		padding-top: 10vh;
		background-color: #fff;
		transition: all 0.3s ease-in;
		top: 8vh;
		left: ${props => (props.open ? "-100%" : "0")};
	}
`

// 햄버거 모양의 컴포넌트
const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};
  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }
  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }
  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const MenuWrapper = styled.div`
`

const Menu = ({ menus }) => {
	const [menuOpen, setMenuOpen] = useState(false)
	const menus_ = menus
	const menuLinks = menus_.map(menu => {
		return( <MenuLink to={menu.path}> {menu.label} </MenuLink> )
	})
	return (
		<MenuWrapper>
			<Toggle
				open={menuOpen}
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<Hamburger open={menuOpen} />
			</Toggle>
			<MenuBox open={!menuOpen}>
				{menuLinks}
			</MenuBox>
		</MenuWrapper>
	)
}

export default Menu