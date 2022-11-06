import React from "react";

function ProjectItem({props}) {

  // console.log(props)

  const {name, about, technologies} = props

  console.log(technologies)

  const techArray = technologies.map((eachTech) => {
    // console.log(eachTech)
    return (
      <span key={eachTech}>{eachTech}</span>
    )
  })

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techArray}
        {/* render a <span> for each technology in the technologies array */}
      </div>
    </div>
  );
}

export default ProjectItem;
