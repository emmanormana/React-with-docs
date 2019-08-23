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
        Wish: [],
      spotid: props.spotid
    };
  }

  componentDidMount() {
    // Make a request for a user with a given ID
    this.GetWishes();
  }

  GetWishes = () => {
     axios.get(`http://localhost:5000/api/Wish/Spot/${this.state.spotid}`)
       .then((response) => {
         this.setState({ Wish: response.data });
       })
  };

  ReturnWish = (e, itemIndex) => {
    this.setState({
      Wish: this.state.Wish.map((item, index) => {
        if (itemIndex === index) {
          return {
            ...item
          };
        }
        return item;
      })
    }); 
    e.preventDefault();
    const exchangeid = this.Wish.exchangeid
    axios
      .patch(`http://localhost:5000/api/Exchange/Return/${exchangeid}`)
      .then(result => {
        e.preventDefault();
        console.log(this.state.Wish);
        this.props.handleWish(this.state.Wish);
      });
  }

  rendertable = () => {
    return this.state.Wish.map((item, index) => {
      return (
        <tr key={item.id}>
          <td>{item.custid}</td>
          <td>{item.ownerid}</td>
          <td>{item.ownername}</td>
          <td>{item.shelfid}</td>
          <td>{item.bagid}</td>
          <td>{item.itemid}</td>
          <td>{item.itemdescription}</td>
          <td>{item.quantity}</td>
          <td>{item.spotid}</td>
          <td>{item.spot}</td>
          <td>{item.returndate}</td>
          <td>{item.expiringdate}</td>
          <td>{item.boxid}</td>
          <td>{item.boxnumber}</td>
          <td>
            <Button
              className="btn-round"
              color="info"
              outline
              size="sm"
              onClick={event => this.ReturnWish(event, index)}
            >
              <i className="nc-icon nc-box" /> Box Returned Cards
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
                      <CardTitle tag="h4">Wishes in this spot.</CardTitle>
                    </CardHeader>
                    <CardBody>
                      <Table responsive>
                        <thead className="text-primary">
                          <tr>
                            <th>Customer #</th>  
                            <th>Owner #</th>
                            <th>Owner Name</th>
                            <th>Shelf #</th>
                            <th>Bag #</th>
                            <th>Card #</th>
                            <th>Card Name</th>
                            <th>Quantity</th>
                            <th>Spot #</th>
                            <th>Spot Name</th>
                            <th>Return Date</th>
                            <th>Expiring Date</th>
                            <th>Box #</th>
                            <th>Box Number</th>
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
