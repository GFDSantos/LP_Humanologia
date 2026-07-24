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
            Sua vida tem uma origem, uma lógica, um porquê.
          </h1>
          <h2>
            A Humanologia Brasileira ajuda você a compreender <br />a história que moldou a sua vida, identificar os padrões que influenciam suas escolhas e enxergar com mais clareza para tomar decisões mais maduras.
          </h2>
          <p>
            <strong >Caminhamos com você na reorganização da sua vida e das suas relações, para que possa viver de forma mais coerente com quem você realmente é.
          </strong>
          </p>
          <p className="hero-destaque">
            Toda transformação começa quando compreendemos a nossa história <br />e encontramos o nosso lugar na vida.
          </p>
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