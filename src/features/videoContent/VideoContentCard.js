import { Row, Col, Container } from "reactstrap";
import Card from "react-bootstrap/Card";
import { CONTENT } from "../../app/shared/CONTENT";
import { useState } from "react";
import VideoContentModal from "./Modal/videoContentModal";
import "./styles/styles.css";

const VideoContentCard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  const handleClick = (item) => {
    console.log("Link clicked:" + JSON.stringify(item));
    setIsOpen(true);
    setClickedItem(item);
    console.log("This is the item's ID: " + item.id);
  };

  return (
    <Container fluid>
      <Row md="2" className="ms-auto video-card-container">
        {CONTENT.map((item) => (
          <Col md="5" className="m-4" key={item.id}>
            <Card className="video-card">
              <Card.Body>
                <Card.Title className="bungee-spice-regular">
                  {item.title}
                </Card.Title>
                <Card.Subtitle>{item.name}</Card.Subtitle>
                <button onClick={() => handleClick(item)}>
                  click to learn more
                </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {isOpen && (
        <VideoContentModal isOpen={isOpen} data={clickedItem} />
      )}
      {console.log("isOpen after rendering:", isOpen)}
  </Container>
  );
};

export default VideoContentCard;
