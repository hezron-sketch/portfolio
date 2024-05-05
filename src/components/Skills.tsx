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
                    src="https://images.unsplash.com/photo-1662027008658-b615840c7deb?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="projmage"
                  />
                  <div className="projtem">
                    <a href="">Todo Flutter App</a>
                  </div>
                </li>
                <li>
                  <img
                    src="https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="projmage"
                  />
                  <div className="projtem">
                    <a href="">Data Visualization</a>
                  </div>
                </li>
                <li>
                  <img
                    src="https://images.pexels.com/photos/2442888/pexels-photo-2442888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="projmage"
                  />
                  <div className="projtem">
                    <a href="">This Portfolio</a>
                  </div>
                </li>

                <li>
                  <img
                    src="https://images.pexels.com/photos/953864/pexels-photo-953864.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="projmage"
                  />
                  <div className="projtem">
                    <a href="https://localhostwines.co.ke/">Wines WebApp</a>
                    <p className="exp">
                      View on github <HiArrowUpRight />
                    </p>
                  </div>
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
          <a href="public/documents/Hezron.pdf">
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
