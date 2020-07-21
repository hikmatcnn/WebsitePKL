import React from "react";
import {
  Jumbotron,
  Button,
  Row,
  Form,
  Col,
  Container,
  Image,
  Card,
} from "react-bootstrap";

import Gambar1 from "../assets/images/undraw_team_goals_hrii.png";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    alert(this.state.name);
  };

  render() {
    return (
      <div>
        <Jumbotron className="headerJumbotron">
          <h2>Selamat Datang di UPTD TIKomDik</h2>
          <p>Unit Pelaksana Teknis Daerah</p>
          <p>Teknologi Informasi dan Komunikasi Pendidikan</p>
          <p>
            <Button variant="primary">Daftar</Button>{" "}
            <Button variant="outline-primary">More info ...</Button>
          </p>
        </Jumbotron>
        <Container>
          <Row className="justify-content-center marginTop3  marginBottom3">
            <Col sm className="textnaTengah">
              <h2>Who Has Join?</h2>
              <p>Tikomdik telah menerima PKL </p>
            </Col>
          </Row>
          <Row className="justify-content-center marginBottom3 paddingLeft">
            <Col sm={4}>
              <p>Sekolah yg telah Join</p>
              <p>- SMK Negeri 11 Bandung </p>
              <p>- SMK Negeri 1 Cimahi </p>
              <p>- SMK Negeri 1 Cidaun </p>
            </Col>
            <Col sm={8}>
              <Image className="gambarLebar100" src={Gambar1} />
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="justify-content-center marginTop3  marginBottom3">
            <Col sm className="textnaTengah">
              <h2>Testimoni</h2>
              <p></p>
            </Col>
          </Row>
          <Row className="justify-content-center marginBottom3 paddingLeft">
            <Col sm={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150C/O"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150C/O"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src="https://via.placeholder.com/150C/O"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <Container fluid={true}>
          <Row className="justify-content-center marginTop3">
            <Col md={8}>
              <h2>Form Pendaftaran </h2>
            </Col>
          </Row>
          <Row className="justify-content-center marginBottom3">
            <Col md={8}>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                  <Form.Label htmlFor="full-name">Full Name</Form.Label>
                  <Form.Control
                    id="full-name"
                    name="name"
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="email">Email</Form.Label>
                  <Form.Control
                    id="email"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label htmlFor="message">Message</Form.Label>
                  <Form.Control
                    id="message"
                    name="message"
                    as="textarea"
                    rows="3"
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                </Form.Group>

                <Button
                  className="d-inline-block"
                  variant="primary"
                  type="submit"
                  disabled={this.state.disabled}
                >
                  Send
                </Button>

                {this.state.emailSent === true && (
                  <p className="d-inline success-msg">Email Sent</p>
                )}
                {this.state.emailSent === false && (
                  <p className="d-inline err-msg">Email Not Sent</p>
                )}
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default HomePage;
