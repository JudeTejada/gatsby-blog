import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const BlogLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const BlogTitle = styled.h3`
  margin-bottom: 0.5em;
  font-size: 22px;
  color: #121212;

  &:hover {
    color: #444;
  }
`

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h1>Jude Writings</h1>
        <h4> total blogposts: {data.allMarkdownRemark.totalCount}</h4>
      </div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <BlogLink to={node.fields.slug}>
            <BlogTitle> {node.frontmatter.title}</BlogTitle>
          </BlogLink>
          <span>{node.frontmatter.date}</span>
          <p>{node.excerpt}</p>
        </div>
      ))}
      <SEO title="Home" />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
            description
            title
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
