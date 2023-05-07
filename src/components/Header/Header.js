import Container from "../UI/Container/Container";
import logo from "../../assets/shared/logo.png";
import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

function Header() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  return (
    <header className="header">
      <Container className="header__container flex flex--justify-space">
        <div className="header__link-wrapper">
          <Link to="/">
            <img className="header__link-logo" src={logo} alt="Rural Art" />
          </Link>
        </div>
        <button className="header__nav-toggle"></button>
        <nav className="header__nav">
          <ul className="header__nav-list flex flex--gap">
            <li>
              <Link className="header__nav-link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="header__nav-link" to="/products">
                Products
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
