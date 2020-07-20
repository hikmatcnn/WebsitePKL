import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

import Gambar3 from "../assets/images/Tikomdik.png";
import Hero from "../components/Hero";
import Content from "../components/Content";

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
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={Gambar3} alt="First slide" />
            <Carousel.Caption>
              <h3>Selamat Datang di UPTD TIKomDik</h3>
              <p>
                Unit Pelaksana Teknis Daerah Teknologi Informasi dan Komunikasi
                Pendidikan
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div>
          <Hero title="Who Has Join?" />
          <Content>
            <p>
              Hello PKL / Magang tidak hanya ada pada Tahun ini Saja, di tahun
              sebelumnya juga sudah ada yg PKL / Magang ke UPTD TIKomDik
            </p>
          </Content>
        </div>
        <div>
          <Hero title="Testimoni" />
          <Content>
            <p>Berikut Beberapa testimoni yang kami dapatkan :D</p>
          </Content>
        </div>
        <div>
          <Hero title="Daftar" />
          <Content>
            <Form>
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
          </Content>
        </div>
      </div>
    );
  }
}

export default HomePage;
