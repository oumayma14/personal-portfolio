import { Col, Tab, Container, Row, Nav } from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import colorSharp2 from "../assets/img/bg.jpg";



export const Projects = () => {
    const projects =[
        {
            title: "nom du projet 1",
            description: "topic",
            imageUrl: colorSharp2,
        },
        {
            title: "nom du projet 2",
            description: "topic",
            imageUrl: colorSharp2,
        },
        {
            title: "nom du projet 3",
            description: "topic",
            imageUrl: colorSharp2,
        },
    ]
    return(
        <section className="project" id="projects">
        <Container>
          <Row>
            <Col size={12}>
                <div >
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
};