import { useState } from "react";
// import { Link } from 'react-router-dom';
import { Card } from "reactstrap";
// import Header from './components/Header'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoContentCard from "./features/videoContent/VideoContentCard";

function App() {
  const [showVidCard, setShowVidCard] = useState(false);
  return (
    <div className="text-center mt-5">
      <Card
        text="Start"
        onClick={() => {
          setShowVidCard(true);
          console.log("Test: clicked!");
        }}
      >
        START
      </Card>
      {showVidCard && <VideoContentCard />}
    </div>
  );
}

export default App;
