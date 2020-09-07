import React from 'react'
import { graphql } from 'gatsby'

import Content from '../components/Content'
import Layout from '../components/Layout'
import Mountains from '../components/Mountains'
import Gallery from '../components/Gallery'
import '../components/HomePage.css'

// Export Template for use in CMS preview
export const WorkPageTemplate = ({
  smallTitle,
  bigTitle,
  homeParagraphOne,
  homeParagraphTwo,
  homeQuote,
  bornOn,
  body
}) => (
  <main className="Home">
    <Mountains />

    <section className="section">
      <div className="container">
        {/* <h3>{smallTitle}</h3>
        <h2>{bigTitle}</h2>
        <div className="signature">
          <hr />
          <p>{bornOn}</p>
          <hr />
        </div>
        <div className="about-one">
          <p>{homeParagraphOne}</p>
        </div>
        <div className="about-two">
          <p>{homeParagraphTwo}</p>
        </div>
        <div className="quote">
          <p>{homeQuote}</p>
        </div> */}
      </div>
    </section>

    <Mountains />
  </main>
)

// Export Default HomePage for front-end
const WorkPage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <WorkPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default WorkPage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query WorkPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
        smallTitle
        bigTitle
        homeParagraphOne
        homeParagraphTwo
        homeQuote
        bornOn
      }
    }
  }
`
