import React from 'react'
import './about.css'

function About() {
  return <div className='about'>
    <div className='about-top'>

      <div className='about-info'>
        Hello There, I am
        <br /><span className='info-name'> Adil Omary </span>
        <br /> I love experimenting with the web
      </div>

      <div className='about-photo'>
        <img
          src={require('./coding.png').default}
          className='profile-picture' alt=''
         />
      </div>

    </div>
    <div className='about-bottom'>This is contact</div>
  </div>
}

export default About
