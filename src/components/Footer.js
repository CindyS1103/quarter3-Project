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
  DropdownItem,
  Row,
  Col } from 'reactstrap';
  import theImage from '../images/Screen Shot 2018-06-05 at 9.27.25 AM.png'

const footerStyles = {
  width: '100%',
  height: '100px',
  marginLeft: '20px'
}
const bottomRow = {
  textAlign: 'center',
  fontSize: '1.2em'
}


class Footer extends Component {




    render() {
      return (

        <div className="footer-container" >
        <div class="Container" color="info" light expand="md" style={footerStyles}>
        <Row>
          <Col xs="6" sm="4" style={{marginTop: '20px', fontSize: '1.2em'}}><strong>CONTACT US</strong>
            <hr className="my-4" />
        <Row>
          <Col xs="6" sm="8"><strong style={{fontSize: '1.3em', color: 'SteelBlue'}}>SOS Communications, Inc.</strong></Col>
        </Row>
        <Row>
          <Col xs="6" sm="6" style={{fontSize: '.9em'}}>P.O. Box 1858</Col>
        </Row>
        <Row>
          <Col xs="6" sm="6" style={{fontSize: '.9em'}}>Show Low, AZ. 85902</Col>
        </Row>
        <Row>
          <Col xs="6" sm="6" style={{fontSize: '.9em'}}>Phone: 480-968-4225</Col>
        </Row>
        <Row>
          <Col xs="6" sm="6" style={{fontSize: '.9em'}}>Email: soscommco@aol.com</Col>
        </Row>
          </Col>
        <Col xs="6" sm="4" style={{marginTop: '20px', fontSize: '1.2em'}}><strong>RECENT BLOG POSTS</strong>
            <hr className="my-4" />
            <Row>
              <Col xs="6" sm="8"><a href="/blog">Importance of Cleaning Fiber Optic Cables</a></Col>
            </Row>
            <Row>
              <Col xs="6" sm="10"><a href="/blog">Why Fiber Optic Cables are Superior to Copper</a></Col>
            </Row>
            <Row>
              <Col xs="6" sm="8"><a href="/blog">How Does Fusion Splicing Work</a></Col>
            </Row>
        </Col>
        <Col xs="6" sm="4" style={{marginTop: '20px', fontSize: '1.2em'}}>

            <Row>
              <Col xs="6" sm="8">
              <div> </div>
              </Col>
            </Row>
            </Col>

      </Row>
      <Row style={bottomRow}>
      <Col xs="6" sm="12">© 2018 SOS Communications, Inc.</Col>

      </Row>
        </div>
        </div>

      );
    }
  }
export default Footer
