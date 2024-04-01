import { Row, Col, Container } from "reactstrap";
import Card from "react-bootstrap/Card";
// import { Link } from "react-router-dom";
import { CONTENT } from "../../app/shared/CONTENT";

const VideoContentCard = () => {
  return (
    <Container>
      <Row className="ms-auto video-card-container">
        {CONTENT.map((item) => {
          return (
            <Col md="5" className="m-4" key={item.id}>
              <Card className="video-card">
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Subtitle>{item.niche}</Card.Subtitle>
                  <Card.Link href="https://www.google.com" target="_blank">
                    Card Link
                  </Card.Link>
                </Card.Body>
                {/* {item.niche}
                <CardTitle>{item.title}</CardTitle> */}
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default VideoContentCard;
