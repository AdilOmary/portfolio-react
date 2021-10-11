import React from 'react';
import './about.css';
import SocialContact from '../../common/socials-contact/social-contact';

function About() {
  return (<div className='about'>
    <div className='about-top'>

      <div className='about-info'>
        Hello There, I am <span className='info-name'> Adil Omary </span>
        <br /> Full-stack web developer equipped with business experience. I want to improve my skills and for that, I'm actively looking for the next challenge to tackle.
      </div>

      <div className='about-photo'>
        <img
          src={require('./coding.png').default}
          className='profile-picture' alt=''
         />
      </div>
    </div>
    <SocialContact />
  </div>
  );
}

export default About
