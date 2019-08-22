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
      Wishtarget: [],
      wishid: props.wishid      
    };
  }

  componentDidMount() {
    // Make a request for a user with a given ID
    this.GetTargets();
  }

  GetTargets = () => {
     axios.get(`http://localhost:5000/api/WishTarget/${this.state.wishid}`)
       .then((response) => {
         this.setState({ Wishtarget: response.data });
       })
  };

  AttendWish = (e,index) => {
    axios
      .post(`http://localhost:5000/api/MTGCard/MTGId/`)
      .then(response => {
        // handle success
        this.setState({ MTGCard: response.data });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  rendertable = () => {
    return this.state.Wishtarget.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{item.wishid}</td>
          <td>{item.spot}</td>
          <td>{item.owner}</td>
          <td>{item.itemdescription}</td>
          <td>{item.quantity}</td>
          <td>{item.marketprice}</td>
          <td>
              <Button
                className="btn-round"
                color="info"
                outline
                size="sm"
                onClick={event => this.AttendWish(event, index)}
               >
                <i className="fa fa-bullseye" /> Target Locked
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
                      <CardTitle tag="h4">Lock Your Target</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Table responsive>
                        <thead className="text-primary">
                          <tr>
                            <th>Wish ID</th>  
                            <th>Spot Name</th>
                            <th>Card Owner Name</th>
                            <th>Card Name</th>
                            <th>Quantity</th>
                            <th>Market Price</th>
                          </tr>
                        </thead>
                        <tbody>{this.rendertable()}</tbody>
                      </Table>
                      <Link to = "/MTGCards">
                      <Button
                        className="btn-round"
                        color="primary"
                      >
                        <i className="fa fa-window-close" /> Cancel eveything
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
