import React from 'react';
import { Row, Col} from 'reactstrap';

const SimpleFooter = (props) => {
    return (
       <footer className="mt-5">
                <div className="container">
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}></Col>
          <Col className="p-0 d-flex justify-content-end">
            This site was made by UPTD TIKomDik.
          </Col>
        </Row>
      </div>
       </footer>

    );
};

export default SimpleFooter;