import React from "react";
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="nav-buttons">
          <button>A button</button>
          <button>A button</button>
          <button>A button</button>
        </div>
        <div className="title">
          <h1>Alyson Pickett</h1>
          <h2>Web / Software Developer</h2>
        </div>
        <div className="contact">
          <p>email: alyson.c.pickett@gmail.com</p>
          <p>Github: kdjfkd</p>
        </div>
      </div>
      <div className="body">
        <div className="port-items">

          {/* Quick description of me */}
          <div className="description">
            <h2>Let's cut the the chase - Here is my work: </h2>
          </div>

          {/* Virtual Bar App */}
          <div className="port-item">
            <h3>Virtual Bar Application</h3>
            <p>**Insert video here**</p>
            <p>**Live Link</p>
            <p><i><b>Github: </b></i>**Github Link</p>
            <p><i><b>Stack: </b></i>  React, Node.js, Firebase, Google Cloud Functions</p>
            <p>A virtual chat room built by myself and two other junior coders. Users can find a local virtual bar to hang out in and grab a table to hang out with friends, or join an existing table and meet new people! Add other users to your friends list, send secret whispers while sitting at a table</p>
          </div>

          {/* Python stock scraper */}
          <div className="port-item">
            <h3>Python Stock Scraper</h3>
            <p>**Insert video here**</p>
            <p>**Live Link</p>
            <p><i><b>Github: </b></i>**Github Link</p>
            <p><i><b>Stack: </b></i>  Python, Beautiful Soup</p>
            <p>Scrapes data from Stock Guru(?) by entering a set of stock tickers and compiles them into a CSV for investor comparision</p>
          </div>

          {/* Password Keeper App */}
          <div className="port-item">
            <h3>Password Keeper</h3>
            <p>**Insert video here**</p>
            <p>**Live Link</p>
            <p><i><b>Github: </b></i>**Github Link</p>
            <p><i><b>Stack: </b></i>  HTML, CSS, JQuery, Express, Node.js</p>
            <p>An early project built with two other junior developers. Suspending disbelief on the issues of securely storing passwords, we came up with a system for organizations to store their usernames and passwords to share with members of their organizations. Company accounts can be categorized.</p>
          </div>

          {/* Tweeter */}
          <div className="port-item">
            <h3>Twitter Clone</h3>
            <p>**Insert video here**</p>
            <p><i><b>Github: </b></i>**Github Link</p>
            <p><i><b>Stack: </b></i>  HTML, CSS, JQuery, Express, Node.js</p>
            <p>Twitter Clone. Add a tweet, see all available tweets loaded chronologically </p>
          </div>


          
          <div className="port-item">
            Here's another portfolio item
          </div>
          <div className="port-item">
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
