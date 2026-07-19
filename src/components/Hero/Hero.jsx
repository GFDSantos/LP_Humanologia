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
            Você nasceu para viver uma vida que faz sentido para quem você realmente é.
          </h1>
          <h2>
            A Humanologia Brasileira ajuda você a compreender por que sua vida chegou até aqui e a reconstruir sua relação consigo mesmo, com sua família, com as pessoas e com a própria vida.
          </h2>
          <p>
            <strong >Porque toda transformação começa quando encontramos o nosso lugar na vida.</strong>
          </p>
          <p className="hero-destaque">
            Antes de indicar qualquer caminho, queremos compreender a sua história.
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