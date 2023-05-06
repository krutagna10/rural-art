import Container from "../UI/Container/Container";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Container className="header__container">
        <div className="header__link-wrapper">
          <Link to="/">
            <img src={logo} alt="Rural Art" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/">Products</Link>
            </li>
          </ul>
        </nav>
        <h1>Header</h1>
      </Container>
    </header>
  );
}

export default Header;
