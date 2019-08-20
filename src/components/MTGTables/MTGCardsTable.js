import React from "react"
import axios from "axios";

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Container,
    Table,
    Row,
    Col
  } from "reactstrap";


class Tables extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        MTGCard: [],
        searchinput : 'Card Name'
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
        this.setState({ MTGCard :response.data });
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
        this.setState({ MTGCard :response.data });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    }
    rendertable = () => 
    {
       return this.state.MTGCard.map((item) => 
        {
           return (<tr key={item.id}>
            <td>{item.mtgid}</td>
            <td>{item.name}</td>
            <td>{item.set}</td>
            <td>{item.setcode}</td>
          </tr>)
        })
    };

    
    render() { 
        let pageHeader = React.createRef();

        React.useEffect(() => {
            if (window.innerWidth < 991) {
              const updateScroll = () => {
                let windowScrollTop = window.pageYOffset / 3;
                pageHeader.current.style.transform =
                  "translate3d(0," + windowScrollTop + "px,0)";
              };
              window.addEventListener("scroll", updateScroll);
              return function cleanup() {
                window.removeEventListener("scroll", updateScroll);
              };
            }
          });
        
        return (
              <>
                  <div
        style={{
            backgroundImage: "url(" + require("assets/img/MTG/https___magic.wizards.com_sites_mtg_files_images_wallpaper_Ferocious_Pup_M20_1920x1080.jpg") + ")"
          }}
          className="page-header"
          data-parallax={true}
          ref={pageHeader}
                  >
                      <div className="filter" />
                      <Container>
                          <div className="content">
                              <Row md="12">
                                  <Col md="12">
                                      <Card>
                                          <CardHeader>
                                              <CardTitle tag="h4">Simple Table</CardTitle>
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
                                          </CardHeader>
                                          <CardBody>
                                              <Table responsive>
                                                  <thead className="text-primary">
                                                      <tr>
                                                          <th>MTGCardID</th>
                                                          <th>Card Name</th>
                                                          <th>Set</th>
                                                          <th>Set Code</th>
                                                      </tr>
                                                  </thead>
                                                  <tbody>
                                                      {this.rendertable()}
                                                  </tbody>
                                              </Table>
                                          </CardBody>
                                      </Card>
                                  </Col>
                              </Row>
                          </div>
                      </Container>
                  </div>
              </>
          );
      }
}

export default Tables