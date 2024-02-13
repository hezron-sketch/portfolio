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
                <ol>
                  <li>
                    <img src="public/todo.jpg" className="projmage" />
                    <div className="projtem">Todo Flutter App</div>
                  </li>
                  <li>
                    <img
                      src="public/datavisualization.jpg"
                      className="projmage"
                    />
                    <div className="projtem">Data Visualization</div>
                  </li>
                  <li>
                    <img src="public/portfolio.jpg" className="projmage" />
                    <div className="projtem">This Portfolio</div>
                  </li>
                  <li>
                    <img src="public/music.jpg" className="projmage" />
                    <div className="projtem">Flutter Music Player</div>
                  </li>
                  <li>
                    <img src="public/shop.jpg" className="projmage" />
                    <div className="projtem">Wines WebApp</div>
                  </li>
                </ol>
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
