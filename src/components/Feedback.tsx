import Form from "react-bootstrap/Form";
import "./Style.css";
import { Button } from "react-bootstrap";

function Feedback() {
  return (
    <>
      <h4>Quick Message!</h4>
      <Form>
        <Form.Group className="text" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="text" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" />
        </Form.Group>
        <Button style={{ margin: "10px" }} className="buttont">
          Send
        </Button>
      </Form>
    </>
  );
}

export default Feedback;
