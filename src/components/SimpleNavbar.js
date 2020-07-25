import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { Link, animateScroll as scroll } from "react-scroll";

const SimpleNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className="fixed-top" color="light" light expand="md">
      <NavbarBrand href="/">Website Tikomdik</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar></Nav>
        <Nav navbar>
          <NavItem>
            <NavLink>
              <Link
                activeClass="active"
                to="gallery"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Gallery
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link
                activeClass="active"
                to="patnership"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Patnership
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link
                activeClass="active"
                to="testimoni"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Testimoni
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <Link
                activeClass="active"
                to="pendaftaran"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Daftar
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default SimpleNavbar;
