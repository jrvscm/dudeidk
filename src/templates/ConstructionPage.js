import React from 'react'
import { graphql } from 'gatsby'
import { Instagram } from 'react-feather'

// import FullPageImage from '../components/FullPageImage'
import svgLogo from '../../static/images/dudeidklogo.svg'
import EmailOptinForm from '../components/EmailOptinForm'
import './ConstructionPage.css'

// Export Template for use in CMS previews

export const ConstructionPageTemplate = () => (
  <main className="Construction">
    
    <a href="https://www.instagram.com/dude1dk/" className='social-link'>
      <Instagram size={36} />
    </a>

    <div className="gradient">
      <div className="inner-col">
        <img src={svgLogo} />
      </div>
      <div className="inner-col">
        <h1>Coming Soon</h1>
        <hr />
        <p>Creative Digital Marketing</p>
        <hr />
        <h2>Get notified when we go live</h2>
        <EmailOptinForm />
      </div>
    </div>

    <video 
      id="video"
      src="https://ucarecdn.com/89220c18-2635-4c99-b487-2c836a14edc0/video.mp4" 
      className="video-background" 
      no-controls="true"
      autoPlay
      muted
      loop
      type="video/mp4">
    </video>

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
