import React from 'react'
import SkillBar from '../../components/skills/SkillBar'

export default function Skills() {
  return (
    <section className="skills-section">
      <div className="heading-container">
        <div className="heading">Skills</div>
        <div className="sub-heading">__What i know__</div>
      </div>

      <div>
        <SkillBar
          name="HTML5"
          img={require("../../assets/images/html.jpg")}
          per="75%"
        />
        <SkillBar
          name="CSS3"
          img={require("../../assets/images/css.jpg")}
          per="70%"
        />
        <SkillBar
          name="JavaScript"
          img={require("../../assets/images/js.webp")}
          per="70%"
        />
        <SkillBar
          name="React JS"
          img={require("../../assets/images/react.jpg")}
          per="45%"
        />
      </div>
    </section>
  );
}
