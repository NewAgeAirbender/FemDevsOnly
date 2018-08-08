import React, { Component } from 'react';
import "./Landing.css";
import { Jumbotron, Button, Container, Row, Col } from 'reactstrap';
import quotes from "../../quotes.json";

class Landing extends Component {
    state = {
        quotes,
        quote: "",
    };
    componentDidMount() {
        this.getRandQuote();
    };

    getRandQuote = () => {
        this.setState({
            quote: quotes[Math.floor(Math.random() * quotes.length)],
        })
    };
    render() {
        return (
            <div>
                <Container className="asymmetric">
                   
                        <h1 className="fem">FEM DEVS ONLY
                        </h1>
                        <p>{this.state.quote}</p>
                        <p className="lead">
                            <Button color="primary" onClick={this.getRandQuote}>wow. that was terrible. show me another</Button>
                        </p>
    
                </Container>
            </div >
        );
    };
};

export default Landing;