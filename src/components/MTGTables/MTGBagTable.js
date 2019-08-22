import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { MDBContainer } from "mdbreact";
import "assets/css/scrollbar.css";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Bag: [],
      customerid: props.customerid
    };
  }

  componentDidMount() {
    // Make a request for a user with a given ID
    this.GetTargets();
  }

  GetTargets = () => {
     axios.get(`http://localhost:5000/api/WishTarget/${this.state.customerid}`)
       .then((response) => {
         this.setState({ Bag: response.data });
       })
  };

  rendertable = () => {
    return this.state.Bag.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.custname}</td>
          <td>{item.ownername}</td>
          <td>{item.itemdescription}</td>
          <td>{item.quantity}</td>
          <td>{item.wishid}</td>
          <td>{item.returndate}</td>
        </tr>
      );
    });
  };

  render() {
    let pageHeader = React.createRef();
    const scrollContainerStyle = { width: "1000px", maxHeight: "450px" };

    return (
      <>
        <div
          style={{
            backgroundImage:
              "url(" +
              require("assets/img/MTG/https___magic.wizards.com_sites_mtg_files_images_wallpaper_Back-to-Basics_UMA_1280x960_Wallpaper.jpg") +
              ")"
          }}
          className="page-header"
          data-parallax={true}
          ref={pageHeader}
        >
          <div className="filter" />
          <MDBContainer>
            <div
              className="scrollbar scrollbar-default"
              style={scrollContainerStyle}
            >
              <Row md="12">
                <Col md="12">
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h4">Don't forget to return your items.</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Table responsive>
                        <thead className="text-primary">
                          <tr>
                            <th>User Name</th>  
                            <th>Card Owner Name</th>
                            <th>Card Name</th>
                            <th>Quantity</th>
                            <th>Wish #</th>
                            <th>Return Date</th>
                          </tr>
                        </thead>
                        <tbody>{this.rendertable()}</tbody>
                      </Table>
                      <Link to = "/MTGCustomerLanding">
                      <Button
                        className="btn-round"
                        color="primary"
                      >
                        Return
                      </Button>
                      </Link>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </MDBContainer>
        </div>
      </>
    );
  }
}

export default Tables;
