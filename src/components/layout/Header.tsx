import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header__wrapper">
      <div className="header">
        <div className="header__name">
          <Link to="/">
            Prawich <br />
            Thawansakdivudhi<span className="r">_</span>
          </Link>
        </div>
        <div className="header__nav">
          <ul>
            <li key={"proj"}>
              <Link to={"/projects"}>Projects</Link>
            </li>
            <li key={"blog"}>
              <Link to={"/blog"}>Blog</Link>
            </li>
            <li key={"contme"}>
              <Link to={"/contacts"}>Contact Me</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
