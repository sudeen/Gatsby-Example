import React from "react"
import Header from "../Examples/Header"
import HeaderStatic from "../Examples/HeaderStatic"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const examples = ({ data }) => {
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <h1>Hello from examples page</h1>
      <Header />
      <HeaderStatic />
      <h5>Author: {author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          age
          name
        }
      }
    }
  }
`
export default examples
