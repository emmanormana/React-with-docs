import React from "react"
import axios from "axios";
import { MDBContainer } from "mdbreact";
import "assets/css/scrollbar.css";
import { Link } from "react-router-dom";

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
      Spot: [],
      customerid: props.customerid,
      searchinput: ''
    };
  }

  componentDidMount() {
    // Make a request for a user with a given ID
    this.GetAll();
  }

  GetAll = () => {
    axios.get('http://localhost:5000/api/Spot')
      .then((response) => {
        // handle success 
        this.setState({ Spot: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  GetByName = () => {
    axios.get(`http://localhost:5000/api/Spot/Name/${this.state.searchinput}`)
      .then((response) => {
        // handle success 
        this.setState({ Spot: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  GetByCustId = () => {
    axios.get(`http://localhost:5000/api/Spot/Customer/${this.state.searchinput}`)
      .then((response) => {
        // handle success 
        this.setState({ Spot: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  AddSpot = (e, item) => {
    e.preventDefault();
    const spotid = item.id;
    console.log(item);
    console.log(spotid);
    console.log(this.state.customerid);
    axios.post(`http://localhost:5000/api/Spot/Customer/${spotid}/${this.state.customerid}`)
    .then (result => {
      e.preventDefault();
    });
  }

  rendertable = () => {
    return this.state.Spot.map((item) => {
      return (
        <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.address}</td>
        <td>{item.telephone}</td>
        <td>{item.workinghours}</td>
        <td>          
          <Button
            className="btn-round"
            color="info"
            outline
            size="sm"
            onClick={event => this.AddSpot(event, item)}
          >
          <i className="fa fa-share" /> Tap This Land
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
            backgroundImage: "url(" + require("assets/img/MTG/https___magic.wizards.com_sites_mtg_files_images_wallpaper_Back-to-Basics_UMA_1280x960_Wallpaper.jpg") + ")"
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
                      <CardTitle tag="h4">Tap a Land</CardTitle>
                      <input placeholder="Search..." type="text" className="form-control"
                        value=
                        {
                          this.state.searchinput
                        }
                        onChange={
                          (event) => (this.setState({ searchinput: event.target.value }))
                        }
                      />
                      <Button
                        className="btn-round"
                        color="success"
                        outline
                        size="sm"
                        onClick={this.GetByName}
                      >
                        <i className="fa fa-search" /> Find By Name
                  </Button>
                  <Button
                        className="btn-round"
                        color="success"
                        outline
                        size="sm"
                        onClick={this.GetByCustId}
                      >
                        <i className="fa fa-search" /> Find By Customer ID
                  </Button>
                    </CardHeader>
                    <CardBody>
                      <Table responsive>
                        <thead className="text-primary">
                          <tr>
                            <th>Spot Name</th>
                            <th>Address</th>
                            <th>Telephone</th>
                            <th>Working Hours</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.rendertable()}
                        </tbody>
                      </Table>
                      <Link to="/MTGCustomerLanding">
                      <Button
                        className="btn-round"
                        color="primary"
                      >
                      Return To Previous Menu
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

export default Tables