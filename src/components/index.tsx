import "./Style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import { IconContext } from "react-icons";

function Index() {
  return (
    <>
      <div className="body-index">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <h1 style={{ paddingTop: "10%" }} className="heading" id="Home">
                Software Developer
              </h1>
              <img
                src="https://img.freepik.com/free-photo/fashion-boy-with-yellow-jacket-blue-pants_71767-96.jpg?w=826&t=st=1707919766~exp=1707920366~hmac=807daac4e0db6bfae506e88afee65c1a70142d396ec78b6f147b07aa017b06a9"
                alt="new"
                className="avator"
              />
              <hr></hr>
              <p>
                <div style={{ fontSize: "large" }}>
                  Hello, I am<h2 className="name">Localhost</h2>a tech
                  enthusiast. I code to explore the computer system.
                </div>
              </p>
              <div className="quick-links">
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <BsGithub />
                  <BsInstagram />
                  <BsTwitter />
                </IconContext.Provider>
              </div>
            </Col>
            <Col xs={12} md={6}>
              <Container style={{ fontSize: "large" }}>
                <p style={{ paddingTop: "20%" }}>
                  <div id="About">Me:</div>
                  Am currently a Computer Science student at the Technical
                  University of Mombasa.{" "}
                </p>
                <p>I posses considerable knowledge in this field. </p>
              </Container>

              <div className="abt-btn">
                <Button className="viewmore">Resume</Button>
                <Button className="viewmore">Hire Me</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Index;
