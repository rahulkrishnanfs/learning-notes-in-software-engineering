import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

function UseStateUsage (){
    const [color, setColor] = useState("red")    

    return(
        <>
        <Container>
            <Row>
                <Col>
                <Button className="m-1 p-2" variant="primary" onClick={()=>{setColor("Blue")}}>Blue Color</Button>
                </Col>
                <Col>
                <Button className="m-1 p-2" variant="danger" onClick={()=>{setColor("Red")}}>Red Color</Button>
                </Col>
                <Col>
                <Button className="m-1 p-2" variant="success" onClick={()=>{setColor("Green")}}>Green Color</Button>
                </Col>
            </Row>
            <Row>
                <Col>
                <ListGroup className="mt-3">
                    <ListGroup.Item>{color}</ListGroup.Item>
                </ListGroup>
                </Col>
            </Row>
        </Container>
        
        
        
        </>
    )

}

export default UseStateUsage