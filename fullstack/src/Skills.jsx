import React from 'react'

const Skills = ({skills}) => {
  return (
    <div>
      <h1>Skills</h1>
      <ul>
        {skills.map((s,index)=>(
            <li key={index}>{s}</li>
        ))}
      </ul>
    </div>
  )
}

export default Skills
