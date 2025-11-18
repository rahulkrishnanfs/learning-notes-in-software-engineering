import React from 'react'
import HomeCarousel from '../components/HomeCarousel'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { addToCart } from '../redux/cartSlice'; //import action to dispatch from there
import { useDispatch } from 'react-redux';

function Home({ products }) {
  // console.log(products);
  // console.log("--------------------------------", products);
  // const [ cartItems, setCartItems] = useState(0);
  // let cartItems = 0;
  // const handleAddToCart = ()=>{
  //   setCartItems(cartItems+1)
    
  //   console.log("Add to cart clicked")
  // }
  // console.log("cart items is ---->>",cartItems)
  const dispatch = useDispatch();

  const handleAddToCart = (product)=>{

    dispatch(addToCart(product));
  }
  return (
    <>
      <HomeCarousel />
      {/* <h1>Cart Items is: {cartItems}</h1> */}
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
                  <Button variant="primary" onClick={()=>handleAddToCart(product)}>Add to Cart</Button>
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