import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Instagram } from 'react-feather'

import svgLogo from '../../static/images/dudeidklogo.svg'
import EmailOptinForm from '../components/EmailOptinForm'
import Meta from '../components/Meta.js'
import './ConstructionPage.css'

// Export Template for use in CMS previews
export const ConstructionPageTemplate = ({ title, subtitle, description }) => (
  <Fragment>
    <Meta
      title={title + ' | ' + subtitle}
      siteTitle={title}
      description={description}
      googleTrackingId={
        process.env.NODE_ENV != 'production'
          ? 'UA-165952031-2'
          : 'UA-165952031-1'
      }
    />

    <main className="Construction">
      <div className="gradient">
        <div className="inner-col">
          <img src={svgLogo} alt="Dude idk smiley face logo" />
          <h1>Coming Soon</h1>
          <hr />
          <p>Creative Digital Marketing</p>
          <hr />
          <a href="https://www.instagram.com/dude1dk/" className="social-link">
            <Instagram size={36} />
          </a>
          <h2>Interested? Get Notified!</h2>
          <EmailOptinForm />
        </div>
      </div>
    </main>
  </Fragment>
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
        description
      }
    }
  }
`
