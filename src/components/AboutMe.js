
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
    <p>Product management, to him, is not just a profession; it's a calling. The ability to innovate, empathize with users, and collaborate with brilliant minds to bring ideas to life excites him every day. 

As a Product Manager at Pilot Flying J, he leads the design and implementation of APIs that revolutionize the parking reservation system and mobile fueling. Witnessing the tangible impact of his work on truck drivers' lives drives his passion for creating meaningful products.

He is always thrilled to have interactions and learn from others. Let's connect and embark on an exciting journey of creating products that make a difference!
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
