import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import { Link, animateScroll as scroll } from "react-scroll";

class JumbotronAwal extends React.Component {

    render() {
        return (
            <div>
                <Jumbotron className="headerJumbotron">
                    <h2 className="display-4">{this.props.data ? this.props.data.welcome : "Loading"} <br /><br />{this.props.data ? this.props.data.title : "Loading"} </h2>
                    <br />
                    <p>{this.props.data ? this.props.data.paragraph : "Loading"}</p>
                    <p className="lead">
                        <Button color="primary">
                        <Link
                activeClass="active"
                to="pendaftaran"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
               {this.props.data ? this.props.data.button_daftar : "Loading"}
              </Link>
                        
                        </Button> {''}
                        <Button color="info">{this.props.data ? this.props.data.button_more : "Loading"}</Button>
                    </p>
                </Jumbotron>
            </div>
        );
    }
}

export default JumbotronAwal;