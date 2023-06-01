import React from "react";

import image from "../components/images/globe-2.jpg";
// import image from "../components/images/globe-1.jpg";
import "../components/styles/Home.css";

function HomePage() {
  return (
    <div className="home" style={{ backgroundImage: `url(${image})` }}>
      <div>
        <h1 className="home-para">
          Embark on a journey of discovery and explore the wonders of the world
        </h1>
        <button>Let's Go</button>
      </div>
    </div>
  );
}

export default HomePage;
