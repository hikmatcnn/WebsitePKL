import React from 'react';
import { Card, Row, Col } from 'reactstrap';

const SimpleGallery = (props) => {
    return (
       
        <div className="py-5 my-5" id="gallery">>
          <div className="container">
            <div className="px-0 col-lg-8 col-md-10 col-sm-12 mx-auto text-center pb-3">
              <h2 className="display-5 mb-4">
                Gallery
              </h2>
              <p className="font-size-lg text-black-50 mb-4">
                Berikut beberapa foto kegiatan
              </p>
            </div>
            <div className="container-fluid">
              <div className="mt-4 text-center d-flex flex-row flex-wrap justify-content-center">
                <Row>
                <Col xl="4" lg="6">
          <Card className="card-transparent mb-5" style={{ borderRadius: 20 }}>
            <div className="card-img-wrapper">
              <img src="https://via.placeholder.com/300C/O" className="card-img-top rounded" alt="..." />
            </div>
            
          </Card>
        </Col>
        <Col xl="4" lg="6">
          <Card className="card-transparent mb-5">
             <div className="card-img-wrapper">
              <img src="https://via.placeholder.com/300C/O" className="card-img-top rounded" alt="..." />
            </div>
            
          </Card>
        </Col>
        <Col xl="4" lg="12">
          <Card className="card-transparent mb-5">
             <div className="card-img-wrapper">
              <img src="https://via.placeholder.com/300C/O" className="card-img-top rounded" alt="..." />
            </div>
            
          </Card>
        </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>

    );
};

export default SimpleGallery;