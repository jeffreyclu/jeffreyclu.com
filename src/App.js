import React from 'react';
import { Github, Linkedin, Instagram } from '@icons-pack/react-simple-icons';

import logo from './logo.png';
import './App.css';

const projectsData = [
  {
    title: "Thememaker Chrome Extension",
    technologies: ["HTML", "CSS", "JavaScript", "Chrome Extension", "The Color API"],
    description: "A Chrome extension that lets users generate their own themes for any website, using the Color API. Color schemes are randomly generated, and can be persisted once applied. Users can also view up to 10 previously generated schemes in the same session.",
    demoLink: "https://chromewebstore.google.com/detail/hlgomofojbinomfoilafddhbdapciodl",
    sourceLink: "https://github.com/jeffreyclu/thememaker"
  },
  {
    title: "React Pinpoint",
    technologies: ["React", "Puppeteer", "Node js", "Docker", "Github Actions"],
    description: "An open-source utility library for measuring React component render times. Used in conjunction with Puppeteer js to test render times against a specified threshold. Also provides a CLI to generate Docker files for performance testing without influence from hardware limitations.",
    // demoLink: "https://reactpinpoint.com",
    sourceLink: "https://github.com/oslabs-beta/react-pinpoint",
  },
  {
    title: "Subway Time",
    technologies: ["HTML5", "CSS", "Express", "mta-gtfs"],
    description: "Frustrated by Google Map's inaccurate subway arrival and departure time reporting, I set out to create my own app to pull from the MTA's real-time data feeds. Users can search for and pull live data from any of the New York City's subway stations. The 'home' station is stored via the browser's local storage.",
    demoLink: "https://subway-time.adaptable.app/",
    sourceLink: "https://github.com/jeffreyclu/subway-time",
  },
  {
    title: "Periodic Table of Sports",
    technologies: ["React with Hooks", "CSS", "Google Docs API"],
    description: "For this project, I collaborated with the Sports team at Perkins Eastman who wanted to display sports in a 'periodic table'. After several rounds of ideation, we settled on an interactive UI that lets users sort the table by different categories and filter the cards by different metrics. The database is a Google Sheet, so the Sports team can adjust the data and see changes reflected in real time.",
    demoLink: "https://jeffreyclu.github.io/periodic-table-of-sports/",
    sourceLink: "https://github.com/jeffreyclu/periodic-table-of-sports",
  },
  {
    title: "Revit Journal Parser", 
    technologies: ["Python", "Revit API", "TKinter"],
    description: "A python based GUI application that parses Revit journal files and extracts useful information and statistics into a human readable format. Can be used to connect remotely to a user's computer (with admin permissions).",
    sourceLink: "https://github.com/jeffreyclu/revit-journal-parser"
  },
  {
    title: "My Celiac Adventure",
    technologies: ["HTML5", "CSS", "React"],
    description: "My loving wife Janet was diagnosed with Celiac's disease a couple years ago. Inspired by her invariably frustrating experiences trying to eat out at restaurants, I created this educational game to simulate how every meal decision for people with Celiac's is a potentially life-threatening situation.",
    demoLink: "https://jeffreyclu.github.io/my-celiac-adventure/",
    sourceLink: "https://github.com/jeffreyclu/my-celiac-adventure",
  },
]

const Project = ({ project }) => {
  const { title, description, demoLink, sourceLink } = project;
  const technologies = project.technologies.map((t, i) => <span className="Technology" key={`t${i}`}>{t}</span>)
  return (
    <div className="Project">
      <h3><a href={demoLink || sourceLink}>{title}</a></h3>
      <div className="Technologies">
        {technologies}
      </div>
      <div className="Description">
        {description}
      </div>
      <div className="ButtonSection">
        {demoLink && 
          <><a href={`${demoLink}`} target="_blank" rel="noopener noreferrer">
            <div className="DemoButton">
              View Demo
            </div>
          </a></>}
        {sourceLink && 
          <><a href={`${sourceLink}`} target="_blank" rel="noopener noreferrer">
            <div className="SourceButton">
              View Source
            </div>
          </a></>}
      </div>
    </div>
  )
}

const App = () => {
  const projects = projectsData.map((p, i) => <Project project={p} key={`${p.title}${i}`} />);
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
        <span className="MyTitle">EXPERIENCED FRONT-END DEVELOPER</span>
        <span className="AboutMe">I'm a former architect (buildings!) turned web developer based in NJ. I specialize in crafting delightful user experiences for the web.</span>
        <br />
        <span className="AboutMe">Currently building canvas tools for creatives @ <a className="Underline" href="https://www.mural.co" target="_blank" rel="noopener noreferrer">Mural</a>. Ex-<a className="Underline" href="https://www.handshake.com" target="_blank" rel="noopener noreferrer">Handshake</a>, <a className="Underline" href="https://marquee.gs.com/welcome/" target="_blank" rel="noopener noreferrer">Goldman Sachs.</a></span>
        <div className="Buttons">
          <div className="ButtonSection">
            <a href="#"><div className="ContactButton" onClick={() => window.Calendly && window.Calendly.initPopupWidget({url: 'https://calendly.com/jeffreyclu/15min'})}>Book a Time</div></a>
            <a href="mailto:hi@jeffreyclu.com"><div className="SourceButton">Drop a Line</div></a>
          </div>
          <div className="ButtonSection">
            <a href="https://github.com/jeffreyclu" target="_blank" rel="noopener noreferrer"><Github /></a>
            <a href="https://www.linkedin.com/in/jeffreyclu/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
            <a href="https://www.instagram.com/jeffreyclu/" target="_blank" rel="noopener noreferrer"><Instagram /></a>
          </div>
        </div>
      </div>
      <div className="Item ContentLeft">
      </div>
      <div className="Item ContentRight">
        <h2>PROJECTS</h2>
        {projects && projects}
      </div>
      <div className="Item FooterRight">Made with love in New Jersey. © Jeffrey C. Lu 2024</div>
    </div>
  );
}

export default App;
