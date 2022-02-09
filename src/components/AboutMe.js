
import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Chart from "../components/chart.js";
import Image from 'react-bootstrap/Image';
import macaque from '../images/macaques.png';
import Card from 'react-bootstrap/Card';

import '../css/AboutMe.css';


class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      chartData: {}
    };
  }



 render() {

   return (
     <div className="" id='skills'>

     <Container fluid>
         <Row>
            <Col xs={12}  sm={5} className='about'>
            <div id="text-main">
            <Container  style={{padding:'0px', margin:'0px'}}>
                <Row style={{padding:'0px', margin:'0px'}}>
                   <Col xs={4}  className='macaqueImg'>
                   <Image className='macaque img-fluid' src={macaque}  alt='loading..' />
                       </Col>
                  <Col xs={8}  className='text-left' style={{padding:'0px', margin:'0px'}}>
                  <h1>  What my Spirit animal says about me</h1>
                  </Col>
                </Row>
              </Container>


<Card className="aboutpara" height=''>
  <Card.Body>

      <div className=''>
    <p>Product Management is a means to an end. I believe in building the right products in order to solve problems to meet consumer needs. Product Management is instrumental in shaping tomorrow, hence motivating me to be one of the contributors. I am always thrilled to have new experiences and strive to try everything at least once in my life. While on some days I am guiding my peers in facing their challenges, other days I am constantly watching Netflix.

Reach out to me, if you want to talk about creating software products, cricket or random philosophy.
</p>

                </div>
                </Card.Body>

  </Card>

            </div>
            </Col>
           <Col xs={12}  sm={7} className=''>
           <div className='Skills'>
            <h1 className='text-center'>Skills</h1>
          <Chart chartData={this.state.chartData}  lavel="HTML" LegendPosition="bottom" />
</div>
           </Col>


         </Row>
       </Container>

     </div>
   );
 }
}

export default Skills;
