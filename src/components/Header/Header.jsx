import "./Header.css";
import logo from "../../assets/images/logo/nlogo_humanologia.jpeg";

const FORM_URL = "https://forms.gle/qyHCVh6MDrp8rHbHA";

function Header() {
  return (
    <header className="header">

      <div className="logo">
        <img
          src={logo}
          alt="Logo Humanologia Brasileira"
          className="logo-img"
        />
      </div>

      <nav>
        <ul className="menu">

          <li>
            <a href="#comoFunciona">
              Como Funciona
            </a>
          </li>

          <li>
            <a href="#depoimentos">
              Depoimentos
            </a>
          </li>

        </ul>
      </nav>

      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-header"
      >
        Quero começar
      </a>

    </header>
  );
}

export default Header;