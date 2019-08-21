import React from "react"
import axios from "axios";
import { MDBContainer } from "mdbreact";
import "assets/css/scrollbar.css";
import MTGCard from"classes/MTGCard.js"

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
      MTGCard: [],
      mid: MTGCard.id,
      mname: MTGCard.name,
      mset: MTGCard.set,
      msetcode: MTGCard.setcode,
      mmtgid: MTGCard.mtgid,
      searchinput: '',
      qtyinput: '0'
    };
  }

  componentDidMount() {
    // Make a request for a user with a given ID
    this.GetAll();
  }

  GetAll = () => {
    axios.get('http://localhost:5000/api/MTGCard')
      .then((response) => {
        // handle success 
        this.setState({ MTGCard: response.data });
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
    axios.get(`http://localhost:5000/api/MTGCard/Name/${this.state.searchinput}`)
      .then((response) => {
        // handle success 
        this.setState({ MTGCard: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  GetBySet = () => {
    axios.get(`http://localhost:5000/api/MTGCard/Set/${this.state.searchinput}`)
      .then((response) => {
        // handle success 
        this.setState({ MTGCard: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  GetBySetCode = () => {
    axios.get(`http://localhost:5000/api/MTGCard/SetCode/${this.state.searchinput}`)
      .then((response) => {
        // handle success 
        this.setState({ MTGCard: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  GetByMTGId = () => {
    axios.get(`http://localhost:5000/api/MTGCard/MTGId/${this.state.searchinput}`)
      .then((response) => {
        // handle success 
        this.setState({ MTGCard: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  AddToShelf = (id) => {
    axios.get(`http://localhost:5000/api/MTGCard/MTGId/`)
      .then((response) => {
        // handle success 
        this.setState({ MTGCard: response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }

  onChange = (e) => {this.setState(
    {
       qtyinput: e.target.value
    })
    ;}

  rendertable = () => {
    return this.state.MTGCard.map((item) => {
      return (
        <tr key={item.id}>
        <td>{item.mtgid}</td>
        <td>{item.name}</td>
        <td>{item.set}</td>
        <td>{item.setcode}</td>
        <td><input id={item.id} type="text" value={this.state.qtyinput}
            onChange={this.onChange}
        /></td>
        <td>
          <Button
          className="btn-round"
          color="info"
          outline
          size="sm"
          onClick={this.AddToShelf(item.id)}
          >
          <i className="nc-icon nc-send" /> Add to Shelf
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
                      <CardTitle tag="h4">Choose Your Weapons</CardTitle>
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
                        onClick={this.GetBySet}
                      >
                        <i className="fa fa-search" /> Find By Set
                  </Button>
                  <Button
                        className="btn-round"
                        color="success"
                        outline
                        size="sm"
                        onClick={this.GetBySetCode}
                      >
                        <i className="fa fa-search" /> Find By Set Code
                  </Button>
                  <Button
                        className="btn-round"
                        color="success"
                        outline
                        size="sm"
                        onClick={this.GetByMTGId}
                      >
                        <i className="fa fa-search" /> Find By MTG Card ID
                  </Button>
                    </CardHeader>
                    <CardBody>
                      <Table responsive>
                        <thead className="text-primary">
                          <tr>
                            <th>MTGCardID</th>
                            <th>Card Name</th>
                            <th>Set</th>
                            <th>Set Code</th>
                            <th>Quantity</th>
                            <th>Shelf</th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.rendertable()}
                        </tbody>
                      </Table>
                        <Button
                        href="/mtgshelf"
                        className="btn-round"
                        color="primary"
                        >
                          Return To Previous Menu
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