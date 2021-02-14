/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import Footer from "./Footer"
import Sidebar from "./Sidebar"
//import "./layout.css"

const LayoutWrapper = styled.div`
`

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

//블로그의 모든 페이지의 틀이 되는 컴포넌트
const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author {
            name
          }
          socials {
            name
            url
          }
          menu {
            label
            path
          }
        }
      }
    }
  `)
  return (
    <LayoutWrapper>
      <Header menus={data.site.siteMetadata.menu}/>
      <MainWrapper>
        <Sidebar />
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
      </MainWrapper>
    </LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
