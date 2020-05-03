import React from 'react'
import { graphql } from 'gatsby'
import { Instagram } from 'react-feather'

import FullPageImage from '../components/FullPageImage'
import EmailOptinForm from '../components/EmailOptinForm'
import './ConstructionPage.css'

// Export Template for use in CMS preview
export const ConstructionPageTemplate = () => (
  <main className="Construction">
    
    <a href="https://www.instagram.com/dude1dk/" className='social-link'>
      <Instagram size={36} />
    </a>

    <section className="section">
      <div className="container">
        <FullPageImage />
        <EmailOptinForm />
      </div>
    </section>

  </main>
)

// Export Default Construction for front-end
const ConstructionPage = ({ data: { page } }) => (
  <ConstructionPageTemplate {...page} {...page.frontmatter} body={page.html} />
)

export default ConstructionPage

export const pageQuery = graphql`
  ## Query for ConstructionPage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query ConstructionPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
