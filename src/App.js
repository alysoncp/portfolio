import React from "react";
import Button from "@material-ui/core/Button";
import './App.css';
import vbar from './img/vbar.gif'; 
import python from './img/python.gif'
import passwordkeeper from './img/passwordkeeper.gif'
import jungle from './img/jungle.png'

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
            <h2>About</h2>
            <h4>Email: alyson.c.pickett@gmail.com</h4>
            <h4>Github: <a href="https://github.com/alysoncp">https://github.com/alysoncp</a></h4>
            <h4>Professional interests include finance, dissemination of truth, cybersecurity, and machine learning</h4>
            <h3>Now let's cut to the chase, here's my work.</h3>
          </div>

          {/* Virtual Bar App */}
            <Entryleft 
              title = "Virtual Bar App"
              stack = "React, Node.js, Firebase, Google Cloud Functions"
              features = "A virtual chat room built by myself and two other junior coders. Users can find a local virtual bar to hang out in and grab a table to hang out with friends, or join an existing table and meet new people! Add other users to your friends list, send secret whispers while sitting at a table, and more!"
              gitlink = "https://github.com/alysoncp/virtual-bar"
              livelink = "https://virtual-bar-9a045.web.app/"
              gifpic = {vbar}
            />

          {/* Python stock scraper */}
            <Entryright 
              title = "Python Stock Scraper"
              stack = "Python, Beautiful Soup"
              features = "Scrapes revenue and growth data from GuruFocus for a set of stock tickers and compiles them into a CSV for investor comparision"
              gitlink = "https://github.com/alysoncp/ticker-list-revenue-scraper"
              gifpic = {python}
            />

          {/* Password Keeper App */}
            <Entryleft 
              title = "Password Keeper"
              stack = "HTML, CSS, JQuery, Express, Node.js"
              features = "An early project built with two other junior developers. Suspending disbelief on the issues of securely storing passwords, we came up with a system for organizations to store their usernames and passwords to share with members of their organizations. Company accounts can be categorized and managed by users with admin privileges"
              gitlink = "https://github.com/alysoncp/passwordkeeper"
              gifpic = {passwordkeeper}
            />

          {/* Jungle App*/}
            <Entryright 
              title = "Mock Amazon"
              stack = "Ruby on Rails"
              features = "Mock ecommerce site built with Ruby. View products by categories, see you cart, and checkout with stripe."
              gitlink = "https://github.com/alysoncp/jungle"
              gifpic = {jungle}
            />

          {/* Small footer */}
          <div className="footer">
            <p>Many more projects on my <a href="https://github.com/alysoncp"> <u>github</u> </a> </p>
          </div>
        
        </div>
      </div>

     
    </div>
  );
}

export default App;
