import React from 'react';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Container, Image, Row, Col } from 'react-bootstrap';
import { removeCartItem } from '../redux/cartSlice';

function Cart() {
    const cartItems = useSelector((state) => state.cartState.cartItems);
    console.log("Cart istems console is >>>>", cartItems);
    const totalAmount = cartItems.reduce((total, product)=>{
        total+= product.productPrice;
        return total;
    },0) ;
    console.log(totalAmount);
    const dispatch  = useDispatch();

    const handleremoveItem = (item)=>(
        dispatch(removeCartItem(item))    
    );

    return (
        <Container>
            <Row>
                <Col>
                    Cart Items
                </Col>
            </Row>
            <Row>

                <Col>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Model Image</th>
                                <th>Model Name</th>
                                <th>Price</th>
                                <th>Count</th>
                                <th>Remove Item</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td> <Image src={item?.productImage ?? ""} /></td>
                                    <td>{item?.productName ?? ""}</td>
                                    <td>{item?.productPrice ?? 0}</td>
                                    <td>{item.quantiy}</td>
                                    <td><MdOutlineRemoveShoppingCart onClick={()=>handleremoveItem(item)}/></td>

                                </tr>
                            ))}
                            <tr>
                                <td colSpan={6} className='text-end'>
                                    Total Price: {totalAmount}
                                </td>
                            </tr>


                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}

export default Cart;