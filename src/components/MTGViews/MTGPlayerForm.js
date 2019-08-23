import React from "react";
import axios from "axios";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// created classes
import Customer from "classes/Customer.js";

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      name: Customer.custname,
      email: Customer.email,
      mobilephone: Customer.mobilephone,
      status: 1
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  GetByName = () => {
    axios
      .get(`http://localhost:5000/api/Customer/Name/${this.state.name}`)
      .then(response => {
        // handle success
        const result = response.data[0];
        this.props.handleCustomerId(result.id);
      });
  };

  onSubmit = e => {
    e.preventDefault();
    const { name, email, mobilephone, status } = this.state;

    axios
      .post("http://localhost:5000/api/Customer", {
        name,
        email,
        mobilephone,
        status
      })
      .then(result => {
        this.GetByName();
      });
  };

  render() {
    const { name, email, mobilephone } = this.state;
    return (
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/MTG/https___magic.wizards.com_sites_mtg_files_images_wallpaper_Back-to-Basics_UMA_1280x960_Wallpaper.jpg") +
            ")"
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Halt, PlanesWalker!</h3>
                <h5 className="title mx-auto">Who goes there?</h5>
                <Form className="register-form" onSubmit={this.onSubmit}>
                  <label>Full Name</label>
                  <Input
                    name="name"
                    placeholder="FullName"
                    type="text"
                    value={name}
                    onChange={this.onChange}
                  />
                  <label>Email</label>
                  <Input
                    name="email"
                    placeholder="Email"
                    type="text"
                    value={email}
                    onChange={this.onChange}
                  />
                  <label>Mobile Phone</label>
                  <Input
                    name="mobilephone"
                    placeholder="MobilePhone"
                    type="text"
                    value={mobilephone}
                    onChange={this.onChange}
                  />
                  <Button
                    block
                    className="btn-round"
                    color="primary"
                    type="submit"
                  >
                    Register
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>© {new Date().getFullYear()}, made by Oda-Sensei</h6>
        </div>
      </div>
    );
  }
}

export default PlayerForm;
