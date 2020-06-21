import React from 'react'
import { Instagram, Twitter, Linkedin, Facebook } from 'react-feather'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      
      <div className="row">
      
        <div className="col-xs col-md-4">
          <div className="box">
            <h6 className="title">CONTACT US</h6>
            <a href="mailto:info@dude-idk.com">info@dude-idk.com</a>  
          </div>
        </div>
        
        <div className="col-xs col-md-4">
          <div className="box">
            <h6 className="title">FOLLOW US</h6>
            <div class="row">
              <ul className="social">
                <li>
                  <a>
                    <Twitter/>
                  </a>
                </li>
                <li>
                  <a>
                    <Facebook />
                  </a>
                </li>
                <li>
                  <a>
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a>
                    <Instagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="col-xs col-md-4">
          <div className="box">
            <h6 className="title">LOCATION</h6>
            <a href="https://goo.gl/maps/6AzZAPgAbokPksVr9">1601 W Evans Ave,<br/> Denver, CO 80223</a>
          </div>
        </div>

        <div className="col-xs col-md-4">
          <div className="box">
            <h6 className="title">OFFICE</h6>
            <p>+1 222 321-4321</p>
          </div>
        </div>

      </div>

      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://squarestate.media">Square State Media</a>.
        </span>
      </div>

    </footer>
  </div>
)
