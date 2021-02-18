import React from "react";
import './App.css';

import vbar from './img/vbar.gif'; 
import python from './img/python.gif'
import passwordkeeper from './img/passwordkeeper.gif'
import jungle from './img/jungle.png'
import cmel from './img/cmel.gif'
import puddle from './img/puddle.png'
import todo from './img/pern.gif'

import Entryleft from "./Entryleft.js"
import Entryright from "./Entryright.js"

function App() {
  return (
    <div className="App">

      <div className="header">
        <h1>Alyson Pickett</h1>
        <h3>Web / Software Developer</h3>
      </div>

      <div className="body">
        <div className="port-items">

          {/* Quick description of me */}
          <div className="description">
            <div className="desc-content">
              <h2>About</h2>
              <p>Former Industrial Controls Engineer with a degree in Electromechanical Engineering turned software nut, with a preference for full stack development. Leaning towards backend.</p>  <p>My primary language is Javascript, with experience in Ruby, Python, and C as well.</p>  <p>Professional interests include finance, dissemination of truth, cybersecurity, and machine learning.</p>
            </div>
            <div className="desc-content">
              <h2>Contact</h2>
              <span> <b>Email: </b><a href="mailto:alyson.c.pickett@gmail.com">alyson.c.pickett@gmail.com</a></span><br /><br />
              <span> <b>Github: </b><a href="https://github.com/alysoncp">https://github.com/alysoncp</a></span><br /><br />
              <span> <b>LinkedIn: </b><a href="https://www.linkedin.com/in/alyson-pickett-2020/">https://www.linkedin.com/in/alyson-pickett-2020/</a></span><br/><br/>
            </div>
          </div>

          <div className="work-header">
            <h2>Work</h2>
          </div> 

          {/* Virtual Bar App */}
            <Entryleft 
              title = "Virtual Bar App"
              stack = " React, Node.js, Firebase, Google Cloud Functions"
              features = "A virtual chat room built by myself and two other junior coders. Users can find a local virtual bar to hang out in and grab a table to hang out with friends, or join an existing table and meet new people! Add other users to your friends list, send secret whispers while sitting at a table, and more!"
              gitlink = "https://github.com/alysoncp/virtual-bar"
              livelink = "https://virtual-bar-9a045.web.app/"
              gifpic = {vbar}
            />

          {/* Python stock scraper */}
            <Entryright 
              title = "Python Stock Scraper"
              stack = " Python, Beautiful Soup"
              features = "Scrapes revenue and growth data from GuruFocus for a set of stock tickers and compiles them into a CSV for investor comparision"
              gitlink = "https://github.com/alysoncp/ticker-list-revenue-scraper"
              gifpic = {python}
            />

          {/* Password Keeper App */}
            <Entryleft 
              title = "Password Keeper"
              stack = " HTML, CSS, JQuery, Express, Node.js, PostgreSQL"
              features = "An early project built with two other junior developers. Suspending disbelief on the issues of securely storing passwords, we came up with a system for organizations to store their usernames and passwords to share with members of their organizations. Company accounts can be categorized and managed by users with admin privileges"
              gitlink = "https://github.com/alysoncp/passwordkeeper"
              gifpic = {passwordkeeper}
            />

          {/* Jungle App*/}
            <Entryright 
              title = "Mock Amazon"
              stack = " Ruby on Rails"
              features = "Mock ecommerce site built with Ruby. View products by categories, see your cart, and checkout with stripe."
              gitlink = "https://github.com/alysoncp/jungle"
              gifpic = {jungle}
            />

          {/* Check My Engine Light */}
            <Entryleft
              title = "Business Webpage"
              stack = " HTML, CSS, Bootstrap"
              features = "Responsive, single page, smooth scrolling website for displaying information about a business"
              gitlink = "*insert*"
              livelink = "http://www.alysonpickett.ca/code/checkmyenginelight/index.html"
              gifpic = {cmel}
            />    

          {/* To Do PERN app */}
          <Entryright
              title = "To-Do App"
              stack = " PostgreSQL, Node.js, Express, React"
              features = "Add, delete, and update entries on a very simple todo-list deployed on Heroku"
              gitlink = "https://github.com/alysoncp/Node_postgres_todoapp"
              livelink = "https://todo-deploy-pern.herokuapp.com/"
              gifpic = {todo}
            /> 

          {/* Puddle-jumper airway C program */}
            <Entryleft
              title = "All-aboard Puddle-Jumper Airways!"
              stack = " C"
              features = "Command-line program designed to manage bookings at a small airline. Add flights, make new bookings, and view all passengers on a flight"
              gitlink = "https://github.com/alysoncp/puddle_jumper_airways"
              gifpic = {puddle}
            />          

          {/* Small footer */}
          <div className="footer">
            <p>This page built with React and deployed on cPanel. <br></br>Many more projects on my <a href="https://github.com/alysoncp"> <u>github</u> </a> </p>
          </div>
        
        </div>
      </div>

     
    </div>
  );
}

export default App;
