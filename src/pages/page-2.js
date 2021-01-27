import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to {data.site.siteMetadata.title} </p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const query = graphql`
  query testQuery{
    site{
      siteMetadata{
        title
      }
    }
  }
`

export default SecondPage
