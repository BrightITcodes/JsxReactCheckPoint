import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Card from "react-bootstrap/Card";
import { Container, Image } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";
import Images from "./components/Image";

function App() {
  let firstName = prompt("Enter your first name").trim();
  return (
    <Container className="mt-6 mb-6">
      <Row>
        <Col lg={{ span: 12, offset: 4 }}>
          <Card style={{ width: "25rem" }} className="justify-content-center">
            {/* Checks if first name is provided, displays firstname else displays hello there */}
            <Card.Header>{<p> Hello {firstName || "there!"} </p>}</Card.Header>
            <Images />
            <Card.Body>
              <Name />
              <Description />
            </Card.Body>
            <Price />
            {/* Checks if first name is prov, displays firstname with an image else displays hello there at the footer */}
            <Card.Footer className="text-muted text-center">
              {firstName ? (
                <>
                  Hello, {firstName}
                  <img
                    width={250}
                    src="https://th.bing.com/th/id/OIP.yrb37Fw4uAolhbKJ1Xcj4wHaFo?rs=1&pid=ImgDetMain"
                    alt="picture"
                  />
                </>
              ) : (
                <div>Hello, there!</div>
              )}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
