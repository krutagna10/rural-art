import Container from "../UI/Container/Container";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <Container className="header__container flex flex--justify-space">
        <div className="header__link-wrapper">
          <Link to="/">
            <img className="header__link-logo" src={logo} alt="Rural Art" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
