import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Instagram } from 'react-feather'
import Helment from 'react-helmet';

// import FullPageImage from '../components/FullPageImage'
import svgLogo from '../../static/images/dudeidklogo.svg'
import EmailOptinForm from '../components/EmailOptinForm'
import './ConstructionPage.css'

// Export Template for use in CMS previews

export const ConstructionPageTemplate = () => (
  <Fragment>
    
    <Helment>
      <title>Dude Idk | Coming Soon</title>
      <link href="https://fonts.googleapis.com/css?family=Oswald:200,300,400,500,600,700|Raleway:100,300,400,500,600,700&display=swap" rel="stylesheet"></link>
    </Helment>
    
    <main className="Construction">

      <div className="gradient">
        <div className="inner-col">
          <img src={svgLogo} alt="Dude idk smiley face logo"/>
          <h1>Coming Soon</h1>
          <hr />
          <p>Creative Digital Marketing</p>
          <hr />
          <a href="https://www.instagram.com/dude1dk/" className='social-link'>
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
      }
    }
  }
`
