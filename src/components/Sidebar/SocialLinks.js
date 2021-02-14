import React from 'react'
import { 
  FaLinkedin, 
  FaGithubSquare,
  FaStackOverflow,
  FaFreeCodeCamp,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaTelegram,
  FaInstagramSquare,
  FaFacebookSquare,
} from "react-icons/fa"
import styled from 'styled-components'

// 주어진 이름에 따라 맞는 로고를 반환
const getIcon = ({ name }) => {
  let icon
  switch (name) {
    case 'telegram' :
      icon = <FaTelegram size={26} style={{ color: "secondary" }}/>
      break
    case 'github' :
      icon = <FaGithubSquare size={26} style={{ color: "secondary" }}/>
      break
    case 'stackoverflow' :
      icon = <FaStackOverflow size={26} style={{ color: "secondary" }}/>
      break
    case 'freecodecamp' :
      icon = <FaFreeCodeCamp size={26} style={{ color: "secondary" }}/>
      break
    case 'twitter' :
      icon = <FaTwitterSquare size={26} style={{ color: "secondary" }}/>
      break
    case 'youtube' :
      icon = <FaYoutubeSquare size={26} style={{ color: "secondary" }}/>
      break
    case 'linkedin' :
      icon = <FaLinkedin size={26} style={{ color: "secondary" }}/>
      break
    case 'instagram' :
      icon = <FaInstagramSquare size={26} style={{ color: "secondary" }}/>
      break
    case 'facebook' :
      icon = <FaFacebookSquare size={26} style={{ color: "secondary" }}/>
      break
    case 'stackoverflow' :
      icon = <FaStackOverflow size={26} style={{ color: "secondary" }}/>
      break
    default:
      icon = ''
      break
  }
  return(icon)
}

//side-social-links float-left mt-3 mb-3
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`
//text-secondary p-2
const StyledA = styled.a`
`

const StyledSpan = styled.span`
`

const SocialLinks = ({ contacts }) => {
  const socialLinks = contacts.map(contact => {
    const { name, url } = contact
    const icon = getIcon({name})
    return(  
      <StyledA href={url}>
        <StyledSpan title={name}>
          {icon}
        </StyledSpan>
      </StyledA>
    )  
  })

  return (
    <Wrapper>
      {socialLinks}
    </Wrapper>
  )
}

export default SocialLinks