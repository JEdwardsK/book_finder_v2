import React from 'react'
import AirScooterSVG from './AirScooterSVG'

const aangColourScheme = {
  primary: "#d4721d",
  secondary: 'black',
  skin: '#fddbb9',
  boots: "#8e715e",
  tattoos: "#90c2e1",
  neckShadow: "#bba085",
  collarShadow: "#f0b90a"
}

const aangSize = 400


const HomePage = () => {
  return (
    <div className="homepage_container">
      <AirScooterSVG 
        colourScheme = {aangColourScheme}
        size= {aangSize}
      />
      <h2>
        This site is currently under construction...
      </h2>
      
    </div>
  )
}

export default HomePage
