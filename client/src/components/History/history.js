import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

const Example = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardImg top width="100%" src="http://news.experiencenottinghamshire.com/wp-content/uploads/2015/12/Ada-Lovelace.jpg" alt="Ada Lovelace" />
        <CardBody>
          <CardTitle>Ada Lovelace</CardTitle>
          <CardSubtitle>The Prophet of Computer Age</CardSubtitle>
          <CardText>Ada Lovelace became the first computer programmer by designing the first computer algorithm, and explaining how it would work on Babbage’s proposed (but non-existent) Analytical Engine.</CardText>
        
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://10eighty.co.uk/web/wp-content/uploads/2017/08/Grace-Hopper-10Eighty-UK.jpg" alt="Grace Hopper" />
        <CardBody>
          <CardTitle>Grace Hopper</CardTitle>
          <CardSubtitle>First Lady of Software</CardSubtitle>
          <CardText>One of the first programmers of the Harvard Mark I computer, she was a pioneer of computer programming who invented one of the first compiler related tools. She popularized the idea of machine-independent programming languages, which led to the development of COBOL.</CardText>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="https://flavorwire.files.wordpress.com/2017/11/bombshell_hedylamarr2_preview.jpg" alt="Hedy Lamarr" />
        <CardBody>
          <CardTitle>Hedy Lamarr</CardTitle>
          <CardSubtitle>Mother of Wi-Fi</CardSubtitle>
          <CardText>An inventor who worked frequency hopping — a World War II-era secure communications technology that’s used today in wireless internet, GPS and cellphones.</CardText>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default Example;