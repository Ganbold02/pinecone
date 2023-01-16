import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, Route, Routes } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center flex-column">
      <div className="col-ms-4">
        <div>
          <div>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <div className="d-flex justify-content-between">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Link to={"/register"}>register</Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
