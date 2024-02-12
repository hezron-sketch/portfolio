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
              <img src="/avator.png" className="avator" />
              <hr></hr>
              <p>
                <div style={{ fontSize: "large" }}>
                  Hello, I am<h2 className="name">Hezron Onyango</h2>a tech
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
                <Button className="buttont">Resume</Button>
                <Button className="buttont">Hire Me</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Index;
