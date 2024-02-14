import { Button, Col, Container, Row } from "react-bootstrap";
import "./Style.css";
import { HiArrowRight, HiArrowUpRight, HiDocumentText } from "react-icons/hi2";

function Skills() {
  return (
    <>
      <div className="body-skills">
        <Container>
          <div
            style={{
              fontSize: "x-large",
              textAlign: "center",
              fontWeight: "bold",
            }}
            id="Skills"
          >
            Skills
          </div>
          <hr></hr>
          <Row>
            <Col xs={12} md={4}>
              <div className="prog-skills">
                <div
                  style={{
                    fontSize: "large",
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  Programming Skills <hr />
                </div>
                <div style={{ fontWeight: "bold" }}>Programming languages</div>

                <ul>
                  <li>Python</li>
                  <li>Dart</li>
                  <li>HTML, CSS, Js & Ts</li> <hr />
                </ul>

                <div style={{ fontWeight: "bold" }}>Frameworks</div>
                <ul>
                  <li>Django</li>
                  <li>Flutter</li>
                  <li>React</li> <hr />
                </ul>
                <div style={{ fontWeight: "bold" }}>Libraries</div>
                <ul>
                  <li>Numpy</li>
                  <li>Pandas</li>
                  <li>React</li>
                  <li>Bootstrap etc.</li>
                  <hr />
                </ul>
                <div style={{ fontWeight: "bold" }}>Version Control</div>
                <ul>
                  <li>Git</li> <hr />
                </ul>
                <div style={{ fontWeight: "bold" }}>Docker etc.</div>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="projects">
                <div style={{ fontWeight: "bold", textAlign: "center" }}>
                  Projects
                </div>
                <hr />

                <li>
                  <img
                    src="https://img.freepik.com/free-vector/realistic-ui-ux-background_23-2149046824.jpg?w=1380&t=st=1707919938~exp=1707920538~hmac=d1db1f3c0cb86670cd63ea78883b23c48eebf3fad451c90889dd0bb288a7d517"
                    className="projmage"
                  />
                  <div className="projtem">Todo Flutter App</div>
                </li>
                <li>
                  <img
                    src="https://img.freepik.com/free-vector/futuristic-infographic-elements-concept_23-2148457430.jpg?w=1380&t=st=1707920097~exp=1707920697~hmac=0863bb86ad7f6249653bb87ec55d1d7d80dd0515b44ad086f49cbb1edc5afe4e"
                    className="projmage"
                  />
                  <div className="projtem">Data Visualization</div>
                </li>
                <li>
                  <img
                    src="https://img.freepik.com/free-photo/close-up-briefcase_1098-3090.jpg?w=1380&t=st=1707920183~exp=1707920783~hmac=75d2b666314a47a057c3771bb68ecfdb0868ad9ac5a56d4955f8f8d8242084e8"
                    className="projmage"
                  />
                  <div className="projtem">This Portfolio</div>
                </li>
                <li>
                  <img
                    src="https://img.freepik.com/free-vector/music-streaming-design_53876-90530.jpg?t=st=1707920534~exp=1707921134~hmac=2ec8a8ac58d202ed3eb3f8425061b24197648faedb03bac7fb87c3a02ab0ab1b"
                    className="projmage"
                  />
                  <div className="projtem">Flutter Music Player</div>
                </li>
                <li>
                  <img
                    src="https://img.freepik.com/free-photo/online-fashion-shopping-with-computer_23-2150400628.jpg?w=1380&t=st=1707920375~exp=1707920975~hmac=b73294a65f1713a69c542fc3d05215cca736987a62bb73f6b9eb55ded703f6d1"
                    className="projmage"
                  />
                  <div className="projtem">Wines WebApp</div>
                </li>

                <Button
                  className="viewmore"
                  style={{
                    backgroundColor: "rgba(155, 155, 155, 0.432)",
                  }}
                >
                  View more
                  <HiArrowUpRight size={20} />
                </Button>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="soft-skills">
                <div
                  style={{
                    fontSize: "large",
                    textAlign: "center",
                    fontWeight: 600,
                  }}
                >
                  Soft Skills
                  <hr />
                </div>
                <ul>
                  <li>Teamwork</li>
                  <li>Adaptability</li>
                  <li>Creative</li>
                  <li>Problem Solving</li>
                  <li>Integrity</li>
                </ul>
                <Button className="viewmore">
                  View more in my resume <HiArrowRight size={30} />
                </Button>
              </div>
            </Col>
          </Row>
          <a href="#resume">
            <div style={{ textAlign: "center" }}>
              <Button className="viewmore">
                Resume <HiDocumentText size={20} />{" "}
              </Button>
            </div>
          </a>
        </Container>
      </div>
    </>
  );
}

export default Skills;
