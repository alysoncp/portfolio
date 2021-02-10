import React from "react";
import Button from "@material-ui/core/Button";
import './App.css';
import vbar from './img/vbar.gif'; 

import Entryleft from "./Entryleft.js"
import Entryright from "./Entryright.js"

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="title">
          <h1>Alyson Pickett</h1>
          <h3>Web / Software Developer</h3>
        </div>
        <div className="info">
          <div className="contact">
            <p>email: alyson.c.pickett@gmail.com</p>
          </div>
          <div className="nav-buttons">
            <Button variant="contained" color="primary">About</Button>
            <Button variant="contained" color="primary">Links</Button>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="port-items">

          {/* Quick description of me */}
          <div className="description">
            <h2>About</h2>
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
              features = "Scrapes data from Stock Guru(?) by entering a set of stock tickers and compiles them into a CSV for investor comparision"
              gitlink = "https://github.com/alysoncp/virtual-bar"
              gifpic = {vbar}
            />



          {/* Password Keeper App */}
            <Entryleft 
              title = "Password Keeper"
              stack = "HTML, CSS, JQuery, Express, Node.js"
              features = "An early project built with two other junior developers. Suspending disbelief on the issues of securely storing passwords, we came up with a system for organizations to store their usernames and passwords to share with members of their organizations. Company accounts can be categorized."
              gitlink = "https://github.com/alysoncp/virtual-bar"
              gifpic = {vbar}
            />



        
          {/* Tweeter */}
          <div className="port-item port-item-odd">
            <h3>Twitter Clone</h3>
            <p>**Insert video here**</p>
            <p><i><b>Github: </b></i>**Github Link</p>
            <p><i><b>Stack: </b></i>  HTML, CSS, JQuery, Express, Node.js</p>
            <p>Twitter Clone. Add a tweet, see all available tweets loaded chronologically </p>
          </div>


          
          <div className="port-item">
            Here's another portfolio item
          </div>
          <div className="port-item port-item-odd">
            Here's a card
          </div>
          <div className="port-item">
            Here's another portfolio item
          </div> <div className="port-item">
            Here's a card
          </div>
          <div className="port-item">
            Here's another portfolio item
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default App;
