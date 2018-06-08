import React from 'react'
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
  Container,
  Row,
  Col,
Media } from 'reactstrap';
import theImage from '../images/IMG_3680.jpg'



const About = () => {
  return (
    <div>
      <Media>
      <Media style={{marginTop:'5em', marginLeft:'5em',fontSize:'16px', marginRight:'5em'}}>

        <Row >
          <Col xs="6" >
      <h3 style={{color:'#1476AC'}}><span class="company">Why choose SOS Communications?</span></h3>
      <h5><strong>Our company has over 40 years of expierence in the telecommunications, fiber optic splicing, and copper networks maintenance industries.</strong></h5>
      <p><span class="company">SOS Communications</span> takes great pride in providing high-quality, future proof telecommunication services to a wide variety of clientel.</p>
      <h4 style={{color:'#1476AC'}}><span class="company">About SOS Communications</span></h4>
      <p><span class="company"><strong>SOS Communications</strong></span> is a Fiber Optic Splicing & Testing Company established in 1987. We are a licensed, bonded, and insured Arizona corporation. We operate throughout Arizona and our main client base is Telephone and Cable TV companies such as Cox Communications, Sprint, and Verizon. <strong>SOS Communciations</strong> also services other corporations and construction companies in need of fiber optic services throught the state. Our moto has always been to do it right, keep it neat and organized and then do it fast in that order!</p>
      <p><strong>SOS Communications</strong> works on splicing new fiber cables, existing networks, testing, trouble shooting fiber problems, emergency repairs and conversions in all aerial and buried fiber optic networks. We use the latest splicing and testing equipment like Fujikura 70s splicers and EXFO OTDR’s and test equipment.</p><br/>

      <p>We specialize in FTTH (fiber to the home) projects for all types of companies installing fiber optic cables directly to new and existing houses with the goal of one or more fibers to every house supplying telephone, cable, and high speed internet, replacing any copper or coax cables.</p><br/>

      <p><strong>SOS Communications</strong> supplies and sells through our various suppliers all fiber related material such as splice cases, patch and connector panels, patch cords and cable. <strong>SOS Communications</strong> can install short fiber optic cable runs but do not get involved with pulling long runs of fiber cable or installing conduit.</p><br/>
      <h2 style={{color:'#1476AC'}}><a href='/contact'>Contact us for a free consultation with our experts!</a></h2>



      </Col>

      <Col xs="6">
      <h3 style={{color:'#1476AC'}}><span class="company">Fiber Optics</span></h3>
      <p>A dependable fiber optic network is a necessity in order for many businesses to communicate with their customers and engage in business in order to stay profitable. <strong>SOS Communications</strong> can answer any questions you may have about installing fiber optic cabling systems for your company. We have over 40 years of experience in the industry and are skilled in providing fiber optic splicing and cabling solutions to ensure your business is technologically prepared.</p>
      <h3 style={{color:'#1476AC'}}><span class="company">Network Solutions And Wiring</span></h3>
      <p>At <strong>SOS Communications</strong>, structured network cabling systems are top priority. Our company guarantees neat and organized network cabling solutions to meet your specific technological needs. We have worked with many different companies with different needs in order to customized wiring solutions to suit all business needs.</p>

      <Media>
      <Media img className="aboutImage" src={theImage} style={{maxHeight:'50vh',objectFit:'cover', paddingBottom:'0', marginLeft: '20px', marginTop: '30px', width:'90%', marginBottom:'10em'}}/>
      </Media>
      </Col>
      </Row>
      </Media>
      </Media>



    </div>
  )
}
export default About
