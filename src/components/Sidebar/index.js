import React from 'react'
import styled from "styled-components"
import { useStaticQuery, graphql } from 'gatsby'

import Author from "./author"
import SocialLinks from "./SocialLinks"
import PageLinks from "./page-links"
//import PostCategories from "./categories"
import PostTags from "./tags"

const Wrapper = styled.div``

const Sidebar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          socials {
            name
            url
          }
          labels {
            tag
            tech
            name
            size
            color
          }
          menu {
            label
            path
          }
        }
      }
      allMarkdownRemark(
        limit: 20
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true }}}
      ){
        edges{
          node{
            frontmatter{
              tags
            }
          }
        }
      }
      file(name: { eq: "profile-pic" }, extension: { eq: "jpg" }){
        childImageSharp {
          fluid(maxWidth: 50){
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  let author_ = data.site.siteMetadata.author
  let socials_  = data.site.siteMetadata.socials
  let pages_ = data.site.siteMetadata.menu
  let labels_ = data.site.siteMetadata.labels
  let recent_posts_ = data.allMarkdownRemark.edges
  let profile_img_ = data.file.childImageSharp
  return(
    <Wrapper>
      <Author 
        author={author_.name} 
        summary={author_.summary} 
        profile={profile_img_}
      />
      <SocialLinks contacts={socials_} />
      <PageLinks pages={pages_} />
      <PostTags labels={labels_} posts={recent_posts_} />
    </Wrapper>
  )
}

export default Sidebar