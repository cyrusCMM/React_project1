import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Card, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <>
      <div className="App">
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Cyrus Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#cards">Cards</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Container className="py-5" id="home">
          <h1 className="text-center mb-2">Welcome to My React Project</h1>
          <p className="text-center mb-5">My name is Cyrus. I am a GOMYCODE student.</p>

          <Row className="g-4" id="cards">
            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>HTML</Card.Title>
                  <Card.Text>HTML is used to structure a web page.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>CSS</Card.Title>
                  <Card.Text>CSS is used to style a web page.</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>React</Card.Title>
                  <Card.Text>React helps us build reusable components.</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
