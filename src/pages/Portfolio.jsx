import React from "react";
//import './portfolio.css'
import breathe from "../assets/carousel_breathe.jpeg";
//import IMG2 from "../../assets/portfolio2.jpg";
import "../App.css";

const data = [
  {
    id: 1,
    image: breathe,
    title: "HealthQuest-App",
    desc: "Health Quest is a RESTful API-based web app that aims to provide users with a place to learn and implement good health practices into their routines. Health Quest uses Node.js and Express.js to create a RESTful API, Handlebars.js as the template engine, and MySQL and the Sequelize ORM for the database. User authentication via express-session and cookies protects sensitive user information within a user account.",
    github: "https://chardige.github.io/Travel-planner/",
    demo: "https://github.com/CharDige/Travel-planner.git",
  },
  {
    id: 2,
    image: breathe,
    title: "HealthQuest-App",
    desc: "Health Quest is a RESTful API-based web app that aims to provide users with a place to learn and implement good health practices into their routines. Health Quest uses Node.js and Express.js to create a RESTful API, Handlebars.js as the template engine, and MySQL and the Sequelize ORM for the database. User authentication via express-session and cookies protects sensitive user information within a user account.",
    github: "https://chardige.github.io/Travel-planner/",
    demo: "https://github.com/CharDige/Travel-planner.git",
  },
  /*
    {
      id: 2,
      image: IMG2,
      title: 'Group Project 2 -SKLHub',
      desc: 'A skill bartering money-free application the users to revert to the old way of doing things.  Technologies: Node.js and its dependencies, Express.js, Handlebars, MySQL Sequielize ORM',
      github: 'https://github.com/stellalph/sklhub.git',
      demo: 'https://warm-citadel-17427.herokuapp.com/'
    },
    
    {
      id: 3,
      image: IMG3,
      title: 'Group Project 1 - Travel Planner',
      desc: 'A travel planner for travellers to plan activities and manage their budget. Technologies: HTML, CSS Materialise, JQuery, Moment.js and the Fetch API',
      github: 'https://chardige.github.io/Travel-planner/',
      demo: 'https://github.com/CharDige/Travel-planner.git'
    },
    {
      id: 4,
      image: IMG4,
      title: 'MERN Ski Resort',
      desc: 'A MERN single page application encouraging the users to stay active and healthy and foster friendships.  Technologies: React, GraphQL, Node.js and MongoDB',
      github: 'https://github.com/stellalph/MERN-Ski-Resort.git',
      demo: 'https://still-harbor-63486.herokuapp.com/'
    },
    {
      id: 5,
      image: IMG5,
      title: 'Note Taker',
      desc: 'A note taker application used to write and save notes allowing the users to better organize their thoughts. Technologies: Node.js and its dependencies, Insomnia and Express.js',
      github: 'https://github.com/stellalph/EJS-NOTE-TAKER',
      demo: 'https://note-taker-app-stella.herokuapp.com/'
    },
    {
      id: 6,
      image: IMG6,
      title: 'MERN Book Search Engine',
      desc: 'A Google Books API search engine built with RESTful API and refactor it to be a GraphQL API built with Apollo Server and using the MERN technologies - MongoDB, Express, React and Node',
      github: 'https://github.com/stellalph/21-MERN-Book-Search-Engine.git',
      demo: 'https://protected-brushlands-99995.herokuapp.com/'
    },*/
];

const Portfolio = () => {
  return (
    <section className="project">
      <h2>Portfolio</h2>
      <div className="project_image">
        {data.map(({ id, image, title, desc, github, demo }) => {
          return (
            <section>
              <img src={image}></img>
              <h3>{title}</h3>
            </section>
          );
        })}
      </div>
    </section>
  );
};
export default Portfolio;
