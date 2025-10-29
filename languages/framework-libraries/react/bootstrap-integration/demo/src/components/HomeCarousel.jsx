import {Carousel, Image} from 'react-bootstrap';
import todo from "../assets/slides/todo.png"
import aitodo from "../assets/slides/aitodo.png"
import todolistmen from "../assets/slides/todo-list-men.png"

function HomeCarousel(){

    return(
        <>
        <div >
        <Carousel>
      <Carousel.Item>
        <Image src={todo}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={aitodo}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <Image src={todolistmen}/>
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