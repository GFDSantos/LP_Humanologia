import "./Header.css";
import logo from "../../assets/images/logo/nlogo_humanologia.jpeg";

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
            <a href="#quemSomos">
              Quem Somos
            </a>
          </li>

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

          <li>
            <a href="#primeiraLeitura">
              Primeira Leitura
            </a>
          </li>

        </ul>
      </nav>

      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfzP_KPKxGs4p1FMn7BTRcBNVsPc7vmJaBfRRtQBLMiYmsJHg/viewform"
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