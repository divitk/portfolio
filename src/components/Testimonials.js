
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import quoteicon from '../images/quoteicon.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Jude from '../images/jude.jpg';
import Mohit from '../images/mohit.jpg';


import '../css/Testimonials.css';

function Testimonials() {
  return (
    <div className="Testimonials text-center">
    <span>KIND</span><Image className='quoteicon img-fluid mx-2' src={quoteicon} alt="Avatar"  roundedCircle   />
    <span>WORDS</span>
    <Carousel controls={false} >
      <Carousel.Item className=" text-center">

<div className='testimonial-para-jude text-center'>
          <p align="justify">Divit had studied and worked with me as a Teaching Intern. He has an excellent aptitude to learn anything new and teach. All his students were happy to learn from him. I wish him best of luck.</p>
</div>

<Container className='jude'>
    <Row >
       <Col className='text-right'>
       <Image className='img-fluid' src={Jude} alt="Avatar"  roundedCircle  style={{width:'55px', height:'55px'}} />
           </Col>
      <Col xs={9}  className='text-left' style={{padding:'0px'}}>
      <p style={{padding:'3px 0px 0px 0px', margin:'0px'}}>Jude Miranda. </p>
      <p style={{padding:'0px', margin:'0px'}}>Founder, Techmentry.com and Neebal.com</p>
      </Col>
    </Row>
  </Container>
      </Carousel.Item>

      <Carousel.Item className=" text-center">

<div className='testimonial-para-mohit text-center'>
<p align="justify">I have been working with Divit since he joined Amadeus. Within few days after joining he was able to make his visibility across teams. I thoroughly enjoyed my time working with Divit and came to know him as a truly valuable asset to our team. He is an impressive problem solver who is able to address complex issues strategically and confidently. He is a true team player, and always fosters positive discussions and tries to bring the best out of teammates.</p>
</div>

<Container className='mohit'>
    <Row >
       <Col className='text-right'>
       <Image className='img-fluid' src={Mohit} alt="Avatar"  roundedCircle  style={{width:'55px', height:'55px'}} />
           </Col>
      <Col xs={9}  className='text-left' style={{padding:'0px'}}>
      <p style={{padding:'3px 0px 0px 0px', margin:'0px'}}>Mohit Kumar</p>
      <p style={{padding:'0px', margin:'0px'}}>Member Technical Staff at Amadeus</p>
      </Col>
    </Row>
  </Container>
      </Carousel.Item>

    </Carousel>

    </div>
  );
}

export default Testimonials;
