import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import github from '../assets/img/github.png';
import linkedin from '../assets/img/in.png';
import whatsapp from '../assets/img/whatsapp.png';
import DarkMode from "../components/DarkMode/DarkMode";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          {/* Your brand/logo here */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <li>
              <a href="#home" className="nav-link navbar-link" onClick={() => onUpdateActiveLink('home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="nav-link navbar-link" onClick={() => onUpdateActiveLink('skills')}>
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="nav-link navbar-link" onClick={() => onUpdateActiveLink('projects')}>
                Projects
              </a>
            </li>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/oumayma-fazzeni-jnfj1221/" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" />
              </a>
              <a href="#">
                <img src={github} alt="GitHub" />
              </a>
              <a href="#">
                <img src={whatsapp} alt="WhatsApp" />
              </a>
            </div>
            <button className="contact-button" onClick={scrollToContact}>
              <span>Let's Connect</span>
            </button>
            <DarkMode />
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};