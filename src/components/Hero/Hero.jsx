import "./Hero.css";
import casalHero from "../../assets/images/hero/EduLuanaI.jpeg";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        {/* Texto */}
        <div className="hero-content">
          <span className="hero-tag">
            Humanologia Brasileira
          </span>
          <h1>
            Descubra o que realmente está influenciando as decisões que você toma.
          </h1>
          <h2>
            A Primeira Leitura da Humanologia Brasileira ajuda você a compreender a lógica da sua história e enxergar com mais clareza o momento que está vivendo, <br />para tomar decisões mais alinhadas<br /> com quem você realmente é.
          </h2>
       
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfzP_KPKxGs4p1FMn7BTRcBNVsPc7vmJaBfRRtQBLMiYmsJHg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-hero"
          >
            Quero começar minha
            <br />
            Primeira Leitura
          </a>
          <span className="hero-info">
            Gratuita • Leva cerca de 3 minutos
          </span>
        </div>
        {/* Imagem */}
        <div className="hero-image">
          <img
            src={casalHero}
            alt="Edu e Luana - Humanologia Brasileira"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;