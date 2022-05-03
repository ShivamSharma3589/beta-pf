import React from 'react'

export default function Home() {
  return (
    <section className="home-section">
      <div className='home-image-section'>
        <img src={require('../../assets/images/profile.jpg')} alt="profile" className='myImage' />
      </div>
      <div className='home-intro-section'>
        <div>Hello, I'm</div>
        <div className='home-my-name'>Shivam Sharma,</div>
        <div>I'm a Front-end Developer</div>
      </div>
    </section>
  )
}
