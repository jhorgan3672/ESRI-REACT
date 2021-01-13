import React, { Component } from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';

class AppNavbar extends Component{
    
        render(){
            return (
                <div>
                <Navbar color="dark" dark expand="sm">
                    <Container>
                        <NavbarBrand href="https://www.usgs.gov/centers/eersc/science/national-coal-resources-data-system-ncrds?qt-science_center_objects=0#qt-science_center_objects">NCRDS</NavbarBrand>
                        <NavbarToggler onClick={this.toggle}></NavbarToggler>
                        <Collapse isOpen={this.stateisOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="https://code.chs.usgs.gov">
                                        Publication
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://code.chs.usgs.gov">
                                        |
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://code.chs.usgs.gov">
                                        Code
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
            )
            
        }
    
}






export default AppNavbar;