import React from 'react'

export default function Home() {
  return (
    <section className="home-section">
      <div className="home-logo">Portfolio.</div>
      <div className="home-image-section">
        <div>
          <img
            src={require("../../assets/images/profile.jpg")}
            alt="profile"
            className="myImage"
          />
        </div>
        <div className="home-my-name">Shivam Sharma</div>
      </div>
      <div className="home-intro-section">
        <div>
          Hello, I'm a <span class="wave">👋</span>
        </div>
        <div className="home-skill-name">
          Front<span className="vertical-text">END</span>
          <br /> Developer
        </div>
      </div>
    </section>
  );
}
