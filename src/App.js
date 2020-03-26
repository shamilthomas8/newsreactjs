import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Card from "react-bootstrap/Card";
import {
  Navbar,
  Nav,
  NavItem,
  Form,
  FormControl,
  Button
} from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    fetch(
      "http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=94d2ef05d8fb46fbb666a0db0d0cf281"
    )
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        //console.log(data);
        this.setState({
          articles: myJson.articles
        });
      });
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Shorts</Navbar.Brand>
            <Nav className="mr-auto">
              <Router>
                <Nav.Link href="#home">Local</Nav.Link>
                <Nav.Link href="C:\Users\ASUS\practical-react\src\international.js">
                  international
                </Nav.Link>
                <Nav.Link href="src\App.js">Latest</Nav.Link>
              </Router>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>
        </>
        {this.state.articles.map((item, index) => (
          <div className="body">
            <Card>
              <Card.Img variant="top" src={item.urlToImage} />
              <Card.Body>
                <Card.Title>
                  <h2 style={{ textAlign: "left" }}>{item.title}</h2>
                </Card.Title>
                <Card.Text>
                  <b style={{ textAlign: "right" }}>{item.author}</b>
                  <p>{item.content}</p>
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <a href={item.url}>Read More</a>
                </small>
              </Card.Footer>
            </Card>
            <br></br>
          </div>
        ))}
      </div>
    );
  }
}

export default Home;
