import React, { Component } from 'react'
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
  DropdownItem } from 'reactstrap';
  import theImage from '../images/sos-communications.png'


const navStyles = {
  height: '10em'

}

class TopNav extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>

        <Navbar color="secondary" light expand="md" style={navStyles}>
          <NavbarBrand>
            <div>< img src={theImage} style={{height:'100px', width:'300px', objectFit:'cover',marginLeft:'1.5em'}}/></div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" style={{color: '#1481B1', fontSize: '1.2em'}}><strong>Home</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about" style={{color: '#1481B1', fontSize: '1.2em'}}><strong>About</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/photos" style={{color: '#1481B1', fontSize: '1.2em'}}><strong>Photo Gallery</strong></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact" style={{color: '#1481B1', fontSize: '1.2em'}}><strong>Contact</strong></NavLink>
              </NavItem>

              <NavItem>
                <NavLink href="/blog" style={{color: '#1481B1', fontSize: '1.2em'}}><strong>Blog</strong></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{color: '#1481B1', fontSize: '1.2em'}}>
                  <strong>Admin</strong>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <a href="/Login" style={{color: '#1481B1', fontSize: '1.2em'}}>Login</a>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default TopNav
