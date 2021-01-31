import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
  margin-top: 2rem
`

const Footer = () => {
  return(
    <FooterWrapper>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </FooterWrapper>
  )
}

export default Footer