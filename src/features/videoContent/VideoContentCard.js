import { Card, Row, Col, CardTitle } from "reactstrap";
// import { Link } from "react-router-dom";
import { CONTENT } from "../../app/shared/CONTENT";

const VideoContentCard = () => {
  return (
    <Row className="ms-auto">
      {CONTENT.map((item) => {
        return (
          <Col md="5" className="m-4" key={item.id}>
            <Card>
              {item.name}
              <CardTitle>{item.title}</CardTitle>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default VideoContentCard;
