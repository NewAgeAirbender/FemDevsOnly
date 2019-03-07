import React from 'react';
import "./quote.css";
import { Button, Container } from 'reactstrap';

export const Quote = props => (
    <Container className="asymmetric">

        <h1 className="fem">FEM DEVS ONLY
                        </h1>
        <p>{this.state.quote}</p>
        <p className="lead">
            <Button color="primary" onClick={this.getRandQuote}>wow. that was terrible. show me another</Button>
        </p>

    </Container>
);