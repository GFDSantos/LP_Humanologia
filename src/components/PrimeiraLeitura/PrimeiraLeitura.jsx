import "./PrimeiraLeitura.css";

function PrimeiraLeitura() {
  return (
    <section id="primeiraLeitura" className="primeira-leitura">
      <div className="primeira-container">

        <span className="secao-tag">
          Primeira Leitura
        </span>

        <h2>
          Antes de qualquer processo,
          queremos compreender o momento
          que você está vivendo.
        </h2>

        <p className="introducao">
            Antes de indicar qualquer caminho,
            queremos compreender a sua história.
        </p>

        <div className="card-leitura">

          <h3>
            O que você receberá
          </h3>
        <div className="lista-beneficios">
        <ul>
          <li>✔ Uma leitura inicial do seu momento pessoal.</li>
          <li>✔ Os principais padrões identificados.</li>
          <li>✔ Os aspectos que merecem atenção.</li>
        </ul>
        <ul>
          <li>✔ A indicação do caminho mais adequado.</li>
          <li>✔ Atendimento individual.</li>
          <li>✔ Sem julgamentos.</li>
        </ul>

        <p className="texto-final">
          <strong>Não acreditamos em soluções prontas.</strong><br />
          Cada pessoa carrega uma história única e cada história precisa
          ser compreendida antes de qualquer decisão.
        </p>

      </div>
          <div className="informacoes">
            <div>
              <strong>Gratuita</strong>
              <span>Sem custo</span>
            </div>
            <div>
              <strong>Rápida</strong>
              <span>Leva 3 minutos</span>
            </div>
            <div>
              <strong>Individual</strong>
              <span>Cada história é única</span>
            </div>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfzP_KPKxGs4p1FMn7BTRcBNVsPc7vmJaBfRRtQBLMiYmsJHg/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primeira"
          >
            Quero começar minha 
            <br />Primeira Leitura
          </a>
        </div>
      </div>
    </section>
  );
}

export default PrimeiraLeitura;