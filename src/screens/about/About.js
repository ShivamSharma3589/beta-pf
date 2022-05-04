import React from 'react'

export default function About() {
  return (
    <div className='about-section'>
      <div className="heading-container">
        <div className="heading">About</div>
        <div className="sub-heading">__Who i am__</div>
      </div>

      <div className="about-img-container">
        <img className='about-img' src={require('../../assets/images/profile.jpg')} alt="about section dp" />
      </div>

      <div className="about-me">
        <div className='about-me-sub-heading'>I'm shivam sharma,<br /> I'm a front-end developer</div>
        <div className="para">I am pursuing BCA from CCS University, Meerut. while    pursuing BCA. I found my interest in Web Development.
                    So, I started to learn HTML, CSS &amp; JavaScript.  <br />
                    I am a fresher in this world of web-development. As I also have made many web-pages while learning web-development which was very helpful for polishing my skills. <br />
                    Perhaps you would like to see my work in project section. Though, Most of my websites are responsive to both mobile &amp; computer view. </div>                
      </div>
    </div>
  )
}
