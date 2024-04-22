import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import { BiLogoGmail } from "react-icons/bi";
import { FaTelegramPlane, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a9c2c4"
          fill-opacity="1"
          d="M0,224L30,202.7C60,181,120,139,180,112C240,85,300,75,360,74.7C420,75,480,85,540,117.3C600,149,660,203,720,197.3C780,192,840,128,900,133.3C960,139,1020,213,1080,208C1140,203,1200,117,1260,85.3C1320,53,1380,75,1410,85.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        ></path>
      </svg>

      <footer className="footer">
        <Container className="footerContainer">
          <Row>
            <Col className="col-12 col-md-6 col-lg-4">
              <BiLogoGmail />
              <span>danyalamirhosseini@gmail.com</span>
            </Col>
            <Col className="col-12 col-md-6 col-lg-4">
              <FaTelegramPlane />
             <span> @danyal_amirhosseini</span>
            </Col>
            <Col className="col-12 col-md-6 col-lg-4">
              <FaLinkedin />
              <span>Danyal Amirhosseini</span>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default Footer;