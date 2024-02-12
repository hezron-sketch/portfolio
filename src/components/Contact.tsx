import {
  BsDiscord,
  BsGithub,
  BsMailbox2,
  BsPhone,
  BsTwitter,
} from "react-icons/bs";
import "./Style.css";
import { IconContext } from "react-icons";
import { Col, Container, Row } from "react-bootstrap";
import { BsInstagram } from "react-icons/bs";
import Feedback from "./Feedback";

function Contact() {
  return (
    <>
      <div className="body-contact" id="Contact">
        <p style={{ fontSize: "x-large", textAlign: "center" }}>Get in touch</p>
        <hr></hr>
        <Container>
          <Row>
            <Col xs={12} md={4}>
              <IconContext.Provider value={{ className: "react-icons" }}>
                <div className="p-contact">
                  <a href="tel:+254707069007">
                    <BsPhone /> +254707069007
                  </a>
                  <br />
                  <br />
                  <a href="mailto:hpaulhezne@gmail.com">
                    <BsMailbox2 /> hpaulhezne@gmail.com
                  </a>
                  <br />
                  <br />
                </div>
              </IconContext.Provider>
            </Col>
            <Col xs={12} md={4}>
              <div className="p-contact">
                <IconContext.Provider value={{ className: "react-icons" }}>
                  <a href="#">
                    <BsGithub /> Github
                  </a>
                  <br />
                  <br />
                  <a href="#">
                    <BsTwitter /> Twitter
                  </a>
                  <br />
                  <br />
                  <a href="#">
                    <BsInstagram /> Instagram
                  </a>
                  <br />
                  <br />
                  <a href="#">
                    <BsDiscord /> Discord
                  </a>
                </IconContext.Provider>
                <br />
                <br />
                <hr></hr>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <Feedback />
            </Col>
          </Row>
        </Container>
        <p style={{ textAlign: "center", padding: "10px" }}>
          Localhost Copyright &copy; {new Date().getFullYear()} All Rights
          Reserved.
        </p>
      </div>
    </>
  );
}

export default Contact;
