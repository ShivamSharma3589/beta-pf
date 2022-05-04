import React from 'react'

export default function SkillBar(props) {
  return (
    <div className="skill-bar-container">
      <div>
        <img className="skill-img" src={props.img} alt="" />
      </div>
      <div className='skill-content'>
        <div className='skill-sub-content'>
          <div className="skill-name">{props.name}</div>
          <div className="percentage">{props.per}</div>
        </div>
        <div className="scale">
          <div className='fill' style={{left: props.per}}></div>
        </div>
      </div>
    </div>
  );
}
