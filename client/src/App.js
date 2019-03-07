import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Quote from './components/Quote';
// import quotes from '../../scripts/quotesDB';


class App extends Component {
  state = {
    // quotes,
    // quote: "",
  };
  componentDidMount() {
    this.getRandQuote();
  };

  getRandQuote = () => {
    // this.setState({
    //   quote: quotes[Math.floor(Math.random() * quotes.length)],
    // });
  };
  render() {
    return (
      <div className="App">
        <Container tag="asymmetric">
        <hl>Dev Nasty</hl>
          <Row>
            <Col>
              <Quote />
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
};

export default App;