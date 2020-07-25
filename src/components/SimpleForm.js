import React from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
} from "reactstrap";

class SimpleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      noHandphone: "",
      asalSekolah: "",
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
    alert(this.state.name);
  };

  render() {
    return (
      <Container
        fluid={true}
        className="App bg-light px-5"
        style={{ borderRadius: 10, padding: 20 }}
        id="pendaftaran"
      >
        <h2 className="text-center px-5">FORM PENDAFTARAN PKL</h2>
        <Form className="form px-5" onSubmit={this.handleSubmit}>
          <Col>
            <FormGroup>
              <Label>Nama Lengkap</Label>
              <Input
                type="text"
                name="name"
                id="namaLengkap"
                value={this.state.name}
                placeholder="Nama Lengkap"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={this.state.email}
                placeholder="myemail@email.com"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Nomor Handphone</Label>
              <Input
                type="number"
                name="noHandphone"
                id="noHandphone"
                value={this.state.noHandphone}
                placeholder="nomor telepon"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Asal Sekolah</Label>
              <Input
                type="text"
                name="asalSekolah"
                id="asalSekolah"
                value={this.state.asalSekolah}
                placeholder="Asal Sekolah"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="exampleFile">Surat Resmi</Label>
              <Input type="file" name="file" id="exampleFile" />
            </FormGroup>
          </Col>

          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default SimpleForm;
