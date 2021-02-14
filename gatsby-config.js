'use strict'

const siteConfig = require("./config")

module.exports = {
  //////////////////////////////////////////
  //      Site Configurations
  //////////////////////////////////////////
  pathPrefix: "/blog",
  siteMetadata: {
    url: siteConfig.url,
    title: siteConfig.title,
    keywords: siteConfig.keywords,
    description: siteConfig.description,
    author: {
      name: siteConfig.author.name,
      summary: siteConfig.author.summary,
    },
    socials: [
      { name: `github`, url: siteConfig.socials.github },
      { name: `youtube`, url: siteConfig.socials.youtube },
      { name: `twitter`, url: siteConfig.socials.twitter },
      { name: `linkedin`, url: siteConfig.socials.linkedin },
      { name: `telegram`, url: siteConfig.socials.telegram },
      { name: `instagram`, url: siteConfig.socials.instagram },
      { name: `facebook`, url: siteConfig.socials.facebook },
      { name: `stackoverflow`, url: siteConfig.socials.stackoverflow },
      { name: `freecodecamp`, url: siteConfig.socials.freecodecamp },
    ],
    disqusShortname: siteConfig.disqusShortname,
    postsPerPage: siteConfig.postsPerPage,
    googleAnalyticsId: siteConfig.googleAnalyticsId,
    siteMenus: siteConfig.siteMenus,
    techLabels: siteConfig.techLabels,
  },
  ///////////////////////////////////////////
  //      Site Plugins
  ///////////////////////////////////////////
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      //Image 처리를 위해 필요 (GraphQL을 통해 Img파일을 쿼리해올 수 있음)
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/contents/images`,
      },
    },
    `gatsby-transformer-sharp`, // 알맞은 크기와 해상도로 이미지를 생성해주는 라이브러리
    `gatsby-plugin-sharp`,  // Gatsby Plugin과 Sharp 라이브러리를 연결
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents/posts`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        flags: {
          THE_FLAG: false
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `contents/assets/blog-icon.png`, // site의 root에 relative하게 설정 (사이트의 icon 설정)
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    //`gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`, // Top Navigation Bar를 위해 포함
    `gatsby-plugin-dark-mode`, // Top Navigation Bar의 Darkmode toggle을 위해 포함
    `gatsby-plugin-react-svg`, // SVG를 react component로 사용하기 위해서
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Raleway`,
          `source sans pro\:300,400,400i,700` // font weight이나 style 추가 가능
        ]
      }
    },
  ],
}