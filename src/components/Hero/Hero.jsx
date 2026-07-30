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
            Descubra a vida que você veio viver.
          </h1>
          <h2>
            A Primeira Leitura ajuda você a compreender o momento que está vivendo e o que está moldando sua história, para que possa tomar decisões com mais clareza e direção.
          </h2>
       
          <a
            href="https://forms.gle/qyHCVh6MDrp8rHbHA"
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