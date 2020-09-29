import React from 'react';
import logo from './logo.png';
import './App.css';

const data = [
  {
    title: "Project 1",
    technologies: ["HTML5", "CSS", "Javascript"],
    description: "blahblahblah blahblahblah blahblahblah blahblahblah blahblahblahblahblahblah  blahblahblah blahblahblah blahblahblah blahblahblah blahblahblah blahblahblahblahblahblah  blahblahblahblahblahblah blahblahblah blahblahblah blahblahblah blahblahblahblahblahblah  blahblahblahblahblahblah blahblahblah blahblahblah blahblahblah blahblahblahblahblahblah  blahblahblahblahblahblah blahblahblah blahblahblah blahblahblah blahblahblahblahblahblah  blahblahblahblahblahblah blahblahblah blahblahblah blahblahblah blahblahblahblahblahblah  blahblahblahblahblahblah blahblahblah blahblahblah blahblahblah blahblahblahblahblahblah  blahblahblahblahblahblah blahblahblah blahblahblah blahblahblah blahblahblahblahblahblah  blahblahblahblahblahblah blahblahblah blahblahblah blahblahblah blahblahblahblahblahblah  blahblahblah",
  },
  {
    title: "Project 1",
    technologies: ["HTML5", "CSS", "Javascript"],
    description: "blahblahblah",
  },
  {
    title: "Project 1",
    technologies: ["HTML5", "CSS", "Javascript"],
    description: "blahblahblah",
  },
  {
    title: "Project 1",
    technologies: ["HTML5", "CSS", "Javascript"],
    description: "blahblahblah",
  }
]

const Project = ({ project }) => {
  const technologies = project.technologies.map((t, i) => <span className="Technology" key={`t${i}`}>{t}</span>)
  return (
    <div className="Project">
      <h3>{project.title}</h3>
      <div className="Technologies">
        {technologies}
      </div>
      <div className="Description">
        {project.description}
      </div>
      <div className="Buttons">
        <div className="DemoButton">
          View Demo
        </div>
        <div className="SourceButton">
          View Source
        </div>
      </div>
    </div>
  )
}

const App = () => {
  const projects = data.map((p, i) => <Project project={p} key={`${p.title}${i}`} />);
  return (
    <div className="App">
      <div className="Item HeaderLeft"><img src={logo} className="Logo" alt="logo" /></div>
      <div className="Item HeaderRight">
        <span className="Item EnglishName">JEFFREY C. LU</span>
        <span className="Item ChineseName">卢承端</span>
      </div>
      <div className="Item AboutMeLeft">
      </div>
      <div className="Item AboutMeRight">
        <span className="MyTitle">FULL-STACK DEVELOPER</span>
        <span className="AboutMe">I am a web developer specializing in modern JavaScript. I enjoy learning new things and love being in the business of solving problems.</span>
      </div>
      <div className="Item ContentLeft">
      </div>
      <div className="Item ContentRight">
        <h2>PROJECTS</h2>
       {projects}
      </div>
      <div className="Item FooterRight">Made with love in Brooklyn. © Jeffrey C. Lu 2020</div>
    </div>
  );
}

export default App;
