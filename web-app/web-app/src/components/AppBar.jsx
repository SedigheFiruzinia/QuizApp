import { Container, Navbar } from "react-bootstrap";

const AppBar = () => {
  return (
    <Navbar bg="primary" variant="dark" className="fixed-top appBar">
      <Container>
        <Navbar.Brand
          style={{ fontSize: "30px", fontWeight: "700", color: "#e9ecef" }}
        >
          QuizPad
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="circle text-center m-2">A</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default AppBar;
