import React from 'react'
import Button from "@material-ui/core/Button";
import './Entry.css';

export default function Entryleft({title, stack, features, gitlink, livelink, gifpic}) {

  const checkLink = () => {
    if (livelink) {
      return (
        <Button className="social-button" variant="contained" onClick={() => window.open(livelink, "_blank")} color="secondary">Live Link</Button>
      )
    }
  }

  return (
    <div className="port-item port-left">
           
      <img className="app-video" src={gifpic} /> 

      <div className="port-item-text text-left">
        <a href="https://virtual-bar-9a045.web.app/"><h2>{title}</h2></a> 
        <p><i><b>Stack: </b></i>{stack}</p>
        <p><i><b>Features: </b></i></p>
        <p>{features}</p>
        <div className="social-icons">
          <Button className="social-button" variant="contained" onClick={() => window.open(gitlink, "_blank")} color="default">Github Repo</Button>
          {checkLink()}
        </div>
      </div>  
        
    </div>

  )
}
