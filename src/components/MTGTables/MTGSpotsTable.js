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
      Spot: [],
      searchinput: ""
    };
  }

  componentDidMount() {
    // Make a request for a user with a given ID
    this.GetAll();
  }

  GetAll = () => {
    const response = [
      {
        name: "Trading Post",
        document: "12345678000190",
        address: "Ixalan",
        telephone: "2345678",
        workinghours: "[Tue~Fri:] 18:00~24:00 [Sat] 14:00~24:00",
        status: true,
        id: 1
      },
      {
        name: "Island",
        document: "12345678910111",
        address: "Island",
        telephone: "454878898",
        workinghours: "From time to time",
        status: true,
        id: 2
      },
      {
        name: "Mountain",
        document: "12345678911111",
        address: "Mountain",
        telephone: "454878898",
        workinghours: "When Maome comes to mountain",
        status: true,
        id: 3
      }
    ];
    this.setState({ Spot: response });
    // axios.get('http://localhost:5000/api/Spot')
    //   .then((response) => {
    //     // handle success
    //     this.setState({ Spot: response.data });
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
    //   .finally(function () {
    //     // always executed
    //   });
  };

  GetByName = () => {
    axios
      .get(`http://localhost:5000/api/Spot/Name/${this.state.searchinput}`)
      .then(response => {
        // handle success
        this.setState({ Spot: response.data });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  GetByCustId = () => {
    axios
      .get(`http://localhost:5000/api/Spot/Customer/${this.state.searchinput}`)
      .then(response => {
        // handle success
        this.setState({ Spot: response.data });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  SelectSpot = spotid => {};

  rendertable = () => {
    return this.state.Spot.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td>{item.address}</td>
          <td>{item.telephone}</td>
          <td>{item.workinghours}</td>
          <td>
            <Link
              to={{
                pathname: `/mtgselectspot/${item.id}`,
                state: { spot: item }
              }}
            >
              <Button
                className="btn-round"
                color="info"
                outline
                size="sm"
                //onClick={this.SelectSpot(item.id)}
              >
                <i className="nc-icon nc-istanbul" /> Select Spot
              </Button>
            </Link>
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
                      <CardTitle tag="h4">Select Your Spot</CardTitle>
                      <input
                        placeholder="Search..."
                        type="text"
                        className="form-control"
                        value={this.state.searchinput}
                        onChange={event =>
                          this.setState({ searchinput: event.target.value })
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
                        <tbody>{this.rendertable()}</tbody>
                      </Table>
                      <Button
                        className="btn-round"
                        color="primary"
                        onClick={this.GetByCustId}
                      >
                        <i className="nc-icon nc-istanbul" /> Add New Spot
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

export default Tables;
