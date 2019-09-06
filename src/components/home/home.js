import React from "react";
import './home.css';
import videoURL from "./drone.mp4";

class Home extends React.Component {
  render() {
    return (
       
      <div className="Home">
        <video className="background-video" loop autoPlay muted>
    <source src={videoURL} type="video/mp4" />
    
    Your browser does not support the video tag.
</video>

      </div>
    );
  }
}

export default Home;


