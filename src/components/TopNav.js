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
            <div><a href='/'><img src={theImage} style={{height:'100px', width:'300px', objectFit:'cover',marginLeft:'1.5em'}}/></a></div>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav style={{padding:'5em'}}className="ml-auto" navbar>
              <NavItem className="navItems" style={{marginRight:'5em',}}>
                <NavLink href="/" style={{color: '#1481B1', fontSize: '1.2em'}}><strong>Home</strong></NavLink>
              </NavItem>
              <NavItem className="navItems" style={{marginRight:'5em'}}>
                <NavLink href="/about" style={{color: '#1481B1', fontSize: '1.2em'}}><strong>About</strong></NavLink>
              </NavItem>
              <NavItem className="navItems"style={{marginRight:'5em'}}>
                <NavLink href="/photos" style={{color: '#1481B1', fontSize: '1.2em'}}><strong>Photo Gallery</strong></NavLink>
              </NavItem>
              <NavItem className="navItems"style={{marginRight:'5em'}}>
                <NavLink href="/contact" style={{color: '#1481B1', fontSize: '1.2em'}}><strong>Contact</strong></NavLink>
              </NavItem>

              <NavItem className="navItems">
                <NavLink href="/blog" style={{color: '#1481B1', fontSize: '1.2em'}}><strong>Blog</strong></NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default TopNav
