import React from "react";
import axios from "axios";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        boxnumber : '',
        spotid : props.spotid
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const boxnumber = this.state.boxnumber
    console.log(boxnumber);
    console.log(this.state.spotid);
    axios
    .post(`http://localhost:5000/api/Box/${this.state.spotid}/${boxnumber}`)
    .then(result => {
      this.props.history.push("/mtgBox")
    });
  };

  render() {
    const boxnumber = this.state.boxnumber;
    return (
      <div
        className="page-header"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/MTG/https___magic.wizards.com_sites_mtg_files_images_wallpaper_Approach-of-the-Second-Sun_AKH_1280x960_Wallpaper.jpg") +
            ")"
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Hello, Spot Master!</h3>
                <h5 className="title mx-auto">It is very hard to create a Box. Will you bear it?</h5>
                <Form className="register-form" onSubmit={this.onSubmit}>
                  <label>Box Number</label>
                  <Input
                    name="boxnumber"
                    placeholder="Choose a Number"
                    type="text"
                    value={boxnumber}
                    onChange={this.onChange}
                  />
                  <Button
                    block
                    className="btn-round"
                    color="primary"
                    type="submit"
                  >
                    Click and Register
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
