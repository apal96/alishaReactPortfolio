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

    },
    {
      title:"Password Generator",
      description:"Random Password Generator",
      link:"https://apal96.github.io/password-generator/",
      image:"https://github.com/apal96/alishaPortfolio/blob/main/images/password.png?raw=true",

    },
    {
      title:"Weather App",
      description:"Lookup local weather an forecast for the next 5 days",
      link:"https://apal96.github.io/weather-dashboard/",
      image:"https://raw.githubusercontent.com/apal96/weather-dashboard/main/Screen%20Shot%202021-07-06%20at%2010.57.03%20PM.png",

    },

  ];

  return (
    <div>
      <p>Take a look at my projects</p>

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
