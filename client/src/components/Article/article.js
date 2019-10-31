import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './article.css';
import Landing from './components/Quote';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Container tag="asymmetric">
          <Row>
            <Col>
                  <Landing />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;