import React from 'react';
import { Card, Row, Col, CardBody, Button, CardTitle, CardText, CardImg } from 'reactstrap';

const SimpleCard = (props) => {
    return (
       
        <div className="py-5 my-5" id="testimoni">
          <div className="container">
            <div className="px-0 col-lg-8 col-md-10 col-sm-12 mx-auto text-center pb-3">
              <h2 className="display-5 mb-4">
                Testimoni
              </h2>
              <p className="font-size-lg text-black-50 mb-4">
                Berikut beberapa Testimoni
              </p>
            </div>
            <div className="container-fluid">
              <div className="mt-4 text-center d-flex flex-row flex-wrap justify-content-center">
                <Row>
                <Col xl="4" lg="6">
                <Card style={{ borderRadius: 10, marginBottom : 10}}>
        <CardImg top width="100%" src="https://via.placeholder.com/300C/O" alt="Card image cap" />
        <CardBody>
          <CardTitle>Seseorang</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">SMK Negeri 11 Bandung</small>
          </CardText>
        </CardBody>
      </Card> 

          
        </Col>
        <Col xl="4" lg="6">
                <Card style={{ borderRadius: 10, marginBottom : 10}}>
        <CardImg top width="100%" src="https://via.placeholder.com/300C/O" alt="Card image cap" />
        <CardBody>
          <CardTitle>Seseorang</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">SMK Negeri 11 Bandung</small>
          </CardText>
        </CardBody>
      </Card> 

          
        </Col>
        <Col xl="4" lg="6">
                <Card style={{ borderRadius: 10, marginBottom : 10}}>
        <CardImg top width="100%" src="https://via.placeholder.com/300C/O" alt="Card image cap" />
        <CardBody>
          <CardTitle>Seseorang</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <CardText>
            <small className="text-muted">SMK Negeri 11 Bandung</small>
          </CardText>
        </CardBody>
      </Card> 

          
        </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>

    );
};

export default SimpleCard;