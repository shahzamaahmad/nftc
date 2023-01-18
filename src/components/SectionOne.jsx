import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
 import './section.css'
 import modi from './images/modi.jpeg';
 import kishan from './images/kishan.jpeg';
 import naik from './images/naik.jpeg';
 import first from './images/first.jpeg';


function SectionOne(){
  return(
      <>
      
      <Container fluid >
      <Row className="gallery">
          
      <Col xs={6} className="column">
        
      <div className='column'><img width={400} height={400} src={first}  /></div>
      <div className='column'><img width={400} height={400} src={first}  /></div>
      <div className='column'><img width={400} height={400} src={first}  /></div>
      <div className='column'><img width={400} height={400} src={first}  /></div>
      <div className='column'><img width={400} height={400} src={first}  /></div>
      <div className='column'><img width={400} height={400} src={first}  /></div>

      </Col>
     
      <Col xs={5} className="column">
      
      <Card style={{ width: '18rem' }}>
           <Card.Img style={{ width: '300px' , height: '300px' }}  src={modi} />
      <Card.Body>
        <Card.Title>Shri Narendar Modi</Card.Title>
        <Card.Text>
         Hon'ble Prime Minister
        </Card.Text>
     
   
      </Card.Body>
    </Card>
    </Col>
    
      
    </Row>
  </Container>
  </>
  )
};
export default SectionOne;
