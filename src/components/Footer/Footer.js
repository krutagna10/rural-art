import Container from "../UI/Container/Container";
import "./Footer.css";
import logo from "../../assets/shared/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <Container className="footer__container">
        <h1>Footer Component</h1>
        <img src={logo} alt="Rural Art" />
      </Container>
    </footer>
  );
}

export default Footer;
