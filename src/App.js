import { useState } from "react";
// import { Link } from 'react-router-dom';
import Header from "./components/Header";
import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoContentCard from "./features/videoContent/VideoContentCard";
import React from "react";

function App() {
  const [showVidCard, setShowVidCard] = useState(false);

  return (
    <div className="text-center mt-5">
      <Header />
      <Button
        onClick={() => {
          setShowVidCard(!showVidCard);
          console.log("vidcard opened");
        }}
      >
        {showVidCard ? "Close" : "Start"}
      </Button>
      {showVidCard && <VideoContentCard />}
    </div>
  );
}

export default App;
