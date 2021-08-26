import React from "react";
export default function Projects() {
  const projects = [
    {
      title: "Reciplease",
      description: "A place for users to share and view recipes.",
      link: "https://pacific-caverns-03345.herokuapp.com/",
      image:
        "https://github.com/apal96/alishaPortfolio/blob/main/images/reciplease.png?raw=true",
    },
    {
      title:"Magnificent Music Search",
      description:"Expand your music!",
      link:"https://apal96.github.io/magnificent-music-search",
      image:"https://raw.githubusercontent.com/apal96/alishaPortfolio/main/images/musicsearch.png",

    }
  ];

  return (
    <div>
      <h1>Projects Page</h1>

      {projects.map((project) => (
        <a href={project.link} target="_blank" rel="noreferrer" key={project.image} className="image"  >
          <div>
            <img
              alt=" Homepage"
              src={project.image}
              width="400px"
              height="300px"
            />
            <div>{project.title}</div>
            {project.description}
          </div>
        </a>
      ))}
    </div>
  );
}
