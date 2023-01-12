import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
export default function PostCreate() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="form.name">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="nem oruul" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="from.tailbar">
        <Form.Label>tailbar</Form.Label>
        <Form.Control type="text" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
