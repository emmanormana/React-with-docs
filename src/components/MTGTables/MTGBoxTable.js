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
        Box: [],
      spotid: props.spotid
    };
  }

  componentDidMount() {
    // Make a request for a user with a given ID
    this.GetBoxes();
  }

  GetBoxes = () => {
     axios.get(`http://localhost:5000/api/Box/Spot/${this.state.spotid}`)
       .then((response) => {
         this.setState({ Box: response.data });
       })
  };

  EmptyBox = (e, item) => {
    e.preventDefault();
    const boxid = item.id;
    console.log(item);
    console.log(boxid);
    axios.delete(`http://localhost:5000/api/BoxContent/${boxid}`)
    .then (result => {
      this.props.history.push("/mtgspotlanding")
    });
  };

  rendertable = () => {
    return this.state.Box.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{item.boxnumber}</td>
          <td>{item.spotname}</td>
          <td>{item.custname}</td>
          <td>{item.ownername}</td>
          <td>{item.shelfid}</td>
          <td>{item.itemdescription}</td>
          <td>{item.quantity}</td>
          <td>
            <Button
              className="btn-round"
              color="info"
              outline
              size="sm"
              onClick={event => this.EmptyBox(event, item)}
            >
              <i className="nc-icon nc-box" /> Exile Box Content
            </Button>
          </td>
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
              require("assets/img/MTG/https___magic.wizards.com_sites_mtg_files_images_wallpaper_Approach-of-the-Second-Sun_AKH_1280x960_Wallpaper.jpg") +
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
                      <CardTitle tag="h4">My Box My Rules.</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Table responsive>
                        <thead className="text-primary">
                          <tr>
                            <th>Box Number</th>  
                            <th>Spot Name</th>
                            <th>Customer Name</th>
                            <th>Owner Name</th>
                            <th>Shelf #</th>
                            <th>Card Name</th>
                            <th>Quantity</th>
                          </tr>
                        </thead>
                        <tbody>{this.rendertable()}</tbody>
                      </Table>
                      <Link to = "/MTGSpotLanding">
                      <Button
                        className="btn-round"
                        color="primary"
                      >
                        Return
                      </Button>
                      </Link>
                      <Link to = "/MTGNewBoxHeader">
                      <Button
                        className="btn-round"
                        color="warning"
                      >
                        <i className="nc-icon nc-box" /> Add More Boxes
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
