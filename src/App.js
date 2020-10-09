import React from 'react';
import ReactPlayer from 'react-player/lazy';
import { Github, Linkedin } from '@icons-pack/react-simple-icons';

import logo from './logo.png';
import './App.css';

const data = [
  {
    title: "React Pinpoint",
    technologies: ["React", "Puppeteer", "Node js", "Docker", "Github Actions"],
    description: "An open-source utility library for measuring React component render times. Used in conjunction with Puppeteer js to test render times against a specified threshold. Also provides a CLI to generate Docker files for performance testing without influence from hardware limitations.",
    demoLink: "https://reactpinpoint.com",
    sourceLink: "https://github.com/oslabs-beta/react-pinpoint",
    // videoLink: "https://www.youtube.com/watch?v=P4oyNOSxGBY&t=0s",
  },
  {
    title: "Periodic Table of Sports",
    technologies: ["React with Hooks", "CSS", "Google Docs API"],
    description: "For this project, I collaborated with the Sports team at Perkins Eastman who wanted to display sports in a 'periodic table'. After several rounds of ideation, we settled on an interactive UI that lets users sort the table by different categories and filter the cards by different metrics. The database is a Google Sheet, so the Sports team can adjust the data and see changes reflected in real time.",
    demoLink: "https://jstable.herokuapp.com",
    sourceLink: "https://github.com/jeffreyclu/periodic-table-of-sports",
    // videoLink: "https://vimeo.com/448412893",
  },
  {
    title: "friend.ly",
    technologies: ["React", "SCSS", "Express", "MongoDB", "Mongoose", "bcrypt js"],
    description: "Like many other introverts, I suffer from social anxiety and often find it hard to make new friends. I often want to do things alone, but I also often want to share the experience of watching an epic movie or seeing an insane live performance with someone. This concept app aims to help you make new friends, by matching you with other users in your location who share your interests.",
    demoLink: "https://thefriendlyapp.herokuapp.com",
    sourceLink: "https://github.com/jeffreyclu/friend.ly",
  },
  {
    title: "Subway Time",
    technologies: ["HTML5", "CSS", "Express", "mta-gtfs"],
    description: "Frustrated by Google Map's inaccurate subway arrival and departure time reporting, I set out to create my own app to pull from the MTA's real-time data feeds. Users can search for and pull live data from any of the New York City's subway stations. The 'home' station is stored via the browser's local storage.",
    // demoLink: "https://subway-time.herokuapp.com",
    sourceLink: "https://github.com/jeffreyclu/subway-time",
    videoLink: "https://vimeo.com/425263915",
  },
  {
    title: "My Celiac Adventure",
    technologies: ["HTML5", "CSS", "React"],
    description: "My loving wife Janet was diagnosed with Celiac's disease a couple years ago. Inspired by her invariably frustrating experiences trying to eat out at restaurants, I created this educational game to simulate how every meal decision for people with Celiac's is a potentially life-threatening situation.",
    demoLink: "https://my-celiac-adventure.herokuapp.com",
    sourceLink: "https://github.com/jeffreyclu/my-celiac-adventure",
    // videoLink: "https://vimeo.com/425263915",
  },
  {
    title: "Top 100 Books List",
    technologies: ["HTML5", "CSS", "Express", "React"],
    description: "I was inspired to read as many books as I could from the Penguin Classics top 100 books list, but had no practical way to track which books I had read. Who uses a pen and notebook anymore, anyway ;)? This is a React based web app with CRUD functionality that features persistence through local storage.",
    demoLink: "https://my-top-100-books.herokuapp.com",
    sourceLink: "https://github.com/jeffreyclu/react-book-list",
    // videoLink: "https://vimeo.com/425263915",
  },
]

const Project = ({ project }) => {
  const { title, description, demoLink, sourceLink, videoLink } = project;
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
      {/* {videoId && <YouTube
        containerClassName="Video" 
        videoId="P4oyNOSxGBY"
      />} */}
      <div className="Video">
        {videoLink && <ReactPlayer width='100%' url={videoLink} light={true} />}
      </div>
      <div className="Buttons">
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
        <span className="AboutMe">I'm a former architect (buildings!) turned web developer based in Brooklyn, NY. I specialize in building JavaScript full-stack web applications with React and Express.</span>
        <div className="Buttons">
          <a href="mailto:hi@jeffreyclu.com"><div className="ContactButton">Get in Touch</div></a>
          <a href="https://github.com/jeffreyclu" target="_blank" rel="noopener noreferrer"><Github /></a>
          <a href="https://www.linkedin.com/in/jeffreyclu/" target="_blank" rel="noopener noreferrer"><Linkedin /></a>
        </div>
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
