import Container from "../UI/Container/Container";
import logo from "../../assets/shared/logo(1).svg";
import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import Backdrop from "../UI/Backdrop/Backdrop";

function Header() {
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);

  function toggleIsNavigationOpen() {
    setIsNavigationOpen((prevIsNavigationOpen) => !prevIsNavigationOpen);
  }

  return (
    <header className="header">
      <Container className="header__container flex flex--justify-space">
        <div className="header__link-wrapper">
          <Link to="/">
            <img className="header__link-logo" src={logo} alt="Rural Art" />
          </Link>
        </div>
        <button
          className="header__nav-toggle"
          aria-controls="header__nav-list"
          aria-expanded={isNavigationOpen}
          onClick={toggleIsNavigationOpen}
        >
          <span className="visually-hidden">Menu</span>
        </button>
        <nav className="header__nav" aria-label="Primary">
          <ul
            id="header__nav-list"
            className="header__nav-list flex flex--gap"
            data-visible={isNavigationOpen}
          >
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
            <li>
              <Link className="header__nav-link" to="/">
                Login
              </Link>
            </li>
          </ul>
        </nav>
        {isNavigationOpen && <Backdrop />}
      </Container>
    </header>
  );
}

export default Header;
