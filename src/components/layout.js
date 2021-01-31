/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"
//import "./layout.css"

const LayoutWrapper = styled.div`
  background-color: var(--bg);
  color: var(--textNormal);
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--textTitle);
  }
  a {
    color: var(--textLink);
  }
  a:hover {
    color: var(--textLinkHover);
  }
  blockquote {
    color: var(--textNormal);
  }
  code,
  kbd,
  samp {
    color: var(--textCode);
  }
  transition: color 0.2s ease-out, background 0.2s ease-out
`

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Footer/>
      </div>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
