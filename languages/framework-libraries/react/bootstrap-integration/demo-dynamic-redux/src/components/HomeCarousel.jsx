import {Carousel} from 'react-bootstrap';
import todo from "../assets/slides/todo.png"
import aitodo from "../assets/slides/aitodo.png"
import todolistmen from "../assets/slides/todo-list-men.png"

function HomeCarousel(){

    return(
        <>
        <div >
        <Carousel>
      <Carousel.Item>
        <div className="d-block w-100" style={{height: '700px', overflow: 'hidden'}}>
          <img src={todo} alt="First slide" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-block w-100" style={{height: '700px', overflow: 'hidden'}}>
          <img src={aitodo} alt="Second slide" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-block w-100" style={{height: '700px', overflow: 'hidden'}}>
          <img src={todolistmen} alt="Third slide" style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
        </>

    )
}

export default HomeCarousel;