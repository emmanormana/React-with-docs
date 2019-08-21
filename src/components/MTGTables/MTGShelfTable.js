import React from "react"
import axios from "axios";
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
      Shelf: [],
      searchinput: '1'
    };
  }

  componentDidMount() {
    // Make a request for a user with a given ID
    this.GetByCustId();
  }

  GetByCustId = () => {
    axios.get(`http://localhost:5000/api/Shelf/Customer/${this.state.searchinput}`)
      .then((response) => {
        // handle success 
        this.setState({ Shelf: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  EditShelf = (custid) => {

  }

  CreateShelf = (custid) => {

  }

  rendertable = () => {
    return this.state.Shelf.map((item) => {
      return (
        <tr key={item.id}>
        <td>{item.itemdescription}</td>
        <td>{item.conservation}</td>
        <td>{item.quantity}</td>
        <td>{item.availableqty}</td>
        <td>{item.marketprice}</td>
        <td>          
            <Button
                className="btn-round"
                color="info"
                outline
                size="sm"
                //onClick={this.SelectSpot(item.id)}
                >
                <i className="fa fa-book" /> Edit this Shelf
            </Button>
        </td>
      </tr>)
    })
  };


  render() {
    let pageHeader = React.createRef();
    const scrollContainerStyle = { width: "1000px", maxHeight: "450px" };

    return (
      <>
        <div
          style=
          {
            {
            backgroundImage: "url(" + require("assets/img/MTG/https___magic.wizards.com_sites_mtg_files_images_wallpaper_WP_ArchiveTrap_1280x960.jpg") + ")"
            }
          }
          className="page-header"
          data-parallax={true}
          ref={pageHeader}
        >
          <div className="filter" />
          <MDBContainer>
            <div className="scrollbar scrollbar-default" style={scrollContainerStyle}>
              <Row md="12">
                <Col md="12">
                  <Card>
                    <CardHeader>
                      <CardTitle tag="h4">Organize Your Inventory</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Table responsive>
                        <thead className="text-primary">
                          <tr>
                            <th>Card Name</th>
                            <th>Conservation State</th>
                            <th>Quantity</th>
                            <th>Available Quantity</th>
                            <th>Market Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.rendertable()}
                        </tbody>
                      </Table>
                      <Button
                        href = "/mtgshelfcards"
                        className="btn-round"
                        color="primary"
                      >
                      <i className="nc-icon nc-simple-add" /> Add New Item
                    </Button>
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

export default Tables