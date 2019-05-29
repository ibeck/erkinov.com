import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>This is my personnal website</p>

    <Link to="/page-2/">Watch Video on  page 2</Link>
  </Layout>
)

export default IndexPage
