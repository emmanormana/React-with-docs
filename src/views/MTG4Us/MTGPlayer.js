/*!

=========================================================
* Paper Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/MTGNavbar.js";

// created classes
import Customer from "classes/Customer.js"

// Post Controller
import CustomerPOST from "controllers/CustomerPOST.js"

// Using ReactDOM
import ReactDOM from 'react-dom';

function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/MTG/https___magic.wizards.com_sites_mtg_files_images_wallpaper_Back-to-Basics_UMA_1280x960_Wallpaper.jpg") + ")"
        }}
      >
        <div className="filter" />
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" lg="4">
              <Card className="card-register ml-auto mr-auto">
                <h3 className="title mx-auto">Halt, PlanesWalker!</h3>
                <h5 className="title mx-auto">Who goes there?</h5>
                <Form className="register-form">
                  <label>Full Name</label>
                  <Input placeholder="FullName" type="text" value={this.state(Customer.custname)} 
                    onChange={event => this.setstate(event.target.value )} />
                  <label>Email</label>
                  <Input placeholder="Email" type="text" value={Customer.email}/>
                  <label>Mobile Phone</label>
                  <Input placeholder="MobilePhone" type="text" value={Customer.mobilephone}/>
                  <Button 
                  block className="btn-round" 
                  color="primary"
                  onClick={() => ReactDOM.render(<CustomerPOST />, document.getElementById('root'))}
                  >
                    Register
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
        <div className="footer register-footer text-center">
          <h6>
            © {new Date().getFullYear()}, made by Oda-Sensei
          </h6>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
