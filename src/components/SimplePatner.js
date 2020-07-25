import React from 'react';
import { Card, Row, Col } from 'reactstrap';

const SimplePatner = (props) => {
    return (
        <div className="py-5 my-5 bg-secondary" id="patnership">
          <div className="container">
            <div className="px-0 col-lg-8 col-md-10 col-sm-12 mx-auto text-center pb-2">
              <h2 className="display-5 text-light">
                Sekolah yg telah PKL di UPTD Tikomdik
              </h2>
             
            </div>
            <div className="container-fluid">
      
              <div className="mt-4 text-center d-flex flex-row flex-wrap justify-content-center ">
                <Row>
                <Col xl="4" lg="6">
          
            <div className="card-img-wrapper mx-auto w-50">
              <img src="https://smkn11bdg.sch.id/wp-content/uploads/2019/08/logo.png" className="card-img-top rounded" alt="..." />
            </div>
            
          
        </Col>
        <Col xl="4" lg="6">
          
             <div className="card-img-wrapper mx-auto w-50">
              <img src="https://www.smkn1-cmi.sch.id/wp-content/uploads/2017/05/logo-e1494606597209.png" className="card-img-top rounded" alt="..." />
            </div>
            
          
        </Col>
        <Col xl="4" lg="12">
          
             <div className="card-img-wrapper mx-auto w-50">
              <img src="http://foto2.data.kemdikbud.go.id/getImage/20203874/10.jpg" className="card-img-top rounded" alt="..." />
            </div>
            
          
        </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>

    );
};

export default SimplePatner;