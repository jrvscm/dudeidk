import React, { Component } from 'react'
import layerOne from '../../static/images/city-layer-1.svg'
import layerTwo from '../../static/images/city-layer-2.svg'
import layerThree from '../../static/images/city-layer-3.svg'
import layerFour from '../../static/images/city-layer-4.svg'
import './Mountains.css'

export default class Mountains extends Component { 
  componentDidMount() {
    if(window.innerWidth > 600) {
      const container = document.querySelector('.Mountains-Container');
      container.addEventListener("mousemove", (e) => {
        document.querySelector('.City-Layer-1 img').style.setProperty('--x', -e.offsetX * .05 + "px");
        document.querySelector('.City-Layer-1 img').style.setProperty('--y', -e.offsetY * .05 + "px");
        document.querySelector('.City-Layer-2 img').style.setProperty('--x', -e.offsetX * .04 + "px");
        document.querySelector('.City-Layer-2 img').style.setProperty('--y', -e.offsetY * .04 + "px");
        document.querySelector('.City-Layer-3 img').style.setProperty('--x', -e.offsetX * .03 + "px");
        document.querySelector('.City-Layer-3 img').style.setProperty('--y', -e.offsetY * .03 + "px");
        document.querySelector('.City-Layer-4 img').style.setProperty('--x', -e.offsetX * .0 + "px");
        document.querySelector('.City-Layer-4 img').style.setProperty('--y', -e.offsetY * .0 + "px");
      });
    }
  }

  render() {
    
    const { className } = this.props;

    return (
      <div className={`Mountains-Container ${className || ''}`}>
        <div className="City-Layer-1">
          <img src={layerFour} />
        </div>
        <div className="City-Layer-2">
          <img src={layerThree} />
        </div>
        <div className="City-Layer-3">
          <img src={layerTwo} />
        </div>
        <div className="City-Layer-4">
          <img src={layerOne} />
        </div>
      </div>
    )
  }
}
