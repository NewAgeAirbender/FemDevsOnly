import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup row>
          <Label for="comment" sm={2}>What'd they say?</Label>
          <Col sm={10}>
            <Input type="Comment" name="comment" id="comment" placeholder="They said WHAT?!" />
          </Col>
        </FormGroup>
      
          <Col sm={{ size: 10, offset: 2 }}>
            <Button color="secondary">Submit</Button>
          </Col>
     
      </Form>
    );
  }
}