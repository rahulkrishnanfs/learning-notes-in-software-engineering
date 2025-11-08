import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Home({ products }) {
  // console.log(products);
  // console.log("--------------------------------", products);

  return (
    <>
      <HomeCarousel />
      <Container>
        <Row>
          {products.map((product, index) => (
            <Col sm={12} md={4} lg={4} xl={4} key={index} xxl={2} className='mt-4'>
              <Card style={{ paddingLeft: '10px',paddingRight: '10px'}}>
                <Link to={`/product/${product.id}`}>
                <Card.Img variant="top" src={product.productImage} />
                </Link>
                <Card.Body>
                  <Card.Title>{product.productName}</Card.Title>
                  <Card.Text>
                    {product.productDescription}
                  </Card.Text>
                  <Button variant="primary">Click for more details</Button>
                </Card.Body>
              </Card>

            </Col>
          ))}

        </Row>
      </Container>


    </>
  )
}

export default Home