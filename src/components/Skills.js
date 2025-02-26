import { Container, Row } from "react-bootstrap";
import {Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import react from "../assets/img/react.png";
import gitt from "../assets/img/git.png";
import pythonn from "../assets/img/python.png";



export const Skills = () => {
    const responsive = {
        SuperLargeDesktop: {
            breakpoint: {max: 4000,min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: {max: 464 , min:0},
            items:1
        }
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>rfnjfdjkfdjkdfjkdfjkfdnjjdjdkjkdjddnjkdk</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={react} alt="image"/>
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={gitt} alt="image"/>
                                    <h5>Git</h5>
                                </div>
                                <div className="item">
                                    <img src={pythonn} alt="image"/>
                                    <h5>python</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
