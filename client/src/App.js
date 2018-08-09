import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Quote from './components/Quote';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container tag="asymmetric">
          <Row>
            <Col>
            {this.state.quotes.length ? (
              <List>
                {this.state.quotes.map(quote) => (
                  <Quote key={quote._id}>
                    <Link to={"/quotes/" + book._id}>
                      <strong>
                        {quote.content}
                      </strong>
                    </Link>
                  </Quote>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
