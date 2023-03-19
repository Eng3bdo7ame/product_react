import "./style/slider_style.css";
import "./imges/product-img/head-phone.jpg";
import { Carousel } from "react-bootstrap";
function Slider() {
  return (
    <section className="all-slider">
      <Carousel>
        <Carousel.Item>
          <div className="back-ground-img">
            <div className="back-ground-color"></div>
          </div>{" "}
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="back-ground-img-1">
            <div className="back-ground-color"></div>
          </div>{" "}
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="back-ground-img-2">
            <div className="back-ground-color"></div>
          </div>{" "}
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="back-ground-img-3">
            <div className="back-ground-color"></div>
          </div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="back-ground-img-4">
            <div className="back-ground-color"></div>
          </div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Slider;
