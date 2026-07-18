import "./QuemSomos.css";
import casalHero from "../../assets/images/quemSomos/EduLuanaII.jpeg";

function QuemSomos() {
  return (
    <section
      id="quemSomos"
      className="quem-somos"
    >
      <div className="quem-container">

        <span className="secao-tag">
          Quem Somos
        </span>

        <h2>
          A Humanologia Brasileira nasce do encontro
          entre experiência, escuta e propósito.
        </h2>

        <div className="quem-conteudo">

          <div className="quem-foto">
            <img
              src={casalHero}
              alt="Edu e Luana - Humanologia Brasileira"
              className="quem-img"
            />
          </div>

          <div className="quem-texto">

            <p>
              <strong>Nós somos Edu e Luana.</strong>
            </p>

            <p>
              Há mais de doze anos buscamos compreender
              por que tantas pessoas continuam repetindo
              histórias que não desejam viver.
            </p>

            <p>
              Ao longo dessa caminhada percebemos que,
              por trás da maioria dos conflitos,
              existe uma desordem nas relações.
            </p>

            <p>
              Foi dessa busca que nasceu a
              <strong> Humanologia Brasileira.</strong>
            </p>

            <p>
              Mais do que um conjunto de técnicas,
              ela nasceu como uma forma de compreender
              o ser humano em toda a sua complexidade.
            </p>

          </div>

        </div>

        <div className="estatisticas">

          <div className="item">
            <h3>500+</h3>
            <span>Pessoas atendidas</span>
          </div>

          <div className="item">
            <h3>12+</h3>
            <span>Anos de experiência</span>
          </div>

          <div className="item">
            <h3>100%</h3>
            <span>Atendimento individual</span>
          </div>

        </div>

      </div>
    </section>
  );
}

export default QuemSomos;