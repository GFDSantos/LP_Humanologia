import "./Filosofia.css";

function Filosofia() {
  return (
    <section className="filosofia">
      <div className="filosofia-container">
        <span className="filosofia-tag">
          A vida fala através das relações.
        </span>

        <h2>
          Tudo está ligado.
        </h2>

        <p className="filosofia-intro">
          A família é o primeiro lugar onde aprendemos essa linguagem.
        </p>

        <div className="linha"></div>
        <div className="manifesto">
          <p className="filosofia-texto">
            Família.
          </p>
          <p className="filosofia-texto">
            Relacionamentos.
          </p>
          <p className="filosofia-texto">
            Corpo.
          </p>
          <p className="filosofia-texto">
            Propósito.
          </p>
          <p className="filosofia-texto">
            Espiritualidade.
          </p>
          <p className="filosofia-texto">
            Ciclos.
          </p>
          <p className="filosofia-texto">
            Escolhas.
          </p>
        </div>

        <div className="linha"></div>
        <h3 className="encerramento">
          Nada está separado.
        </h3>
      </div>
    </section>
  );
}

export default Filosofia;