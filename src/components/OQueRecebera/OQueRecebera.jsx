import "./OQueRecebera.css";

import {
  Search,
  Puzzle,
  Sprout,
  Compass
} from "lucide-react";

function OQueRecebera() {
  return (
    <section className="recebera">
      <div className="recebera-container">

        <span className="secao-tag">
          O que você receberá
        </span>

        <h2>
          Cada história é única.
          <br />
          Por isso cada leitura também é.
        </h2>

        <p className="recebera-intro">
          Após analisarmos cuidadosamente sua Primeira Leitura,
          você receberá uma devolutiva personalizada, construída
          a partir da sua realidade e do momento que está vivendo.
        </p>

        <div className="recebera-grid">

          <div className="recebera-card">

            <div className="icone">
              <Search size={34} strokeWidth={1.8}/>
            </div>

            <h3>Leitura Inicial</h3>

            <p>
              Uma compreensão do momento atual da sua história,
              observando os aspectos mais relevantes.
            </p>

          </div>

          <div className="recebera-card">

            <div className="icone">
              <Puzzle size={34} strokeWidth={1.8}/>
            </div>

            <h3>Padrões Identificados</h3>

            <p>
              Situações, comportamentos e ciclos que podem estar
              influenciando sua vida hoje.
            </p>

          </div>

          <div className="recebera-card">

            <div className="icone">
              <Sprout size={34} strokeWidth={1.8}/>
            </div>

            <h3>Pontos de Atenção</h3>

            <p>
              Aspectos que merecem cuidado neste momento para que
              você avance com mais consciência.
            </p>

          </div>

          <div className="recebera-card">

            <div className="icone">
              <Compass size={34} strokeWidth={1.8}/>
            </div>

            <h3>Direcionamento</h3>

            <p>
              A indicação do caminho que acreditamos fazer mais
              sentido para você neste momento.
            </p>

          </div>

        </div>

        <div className="recebera-destaque">

          <h3>
            Não entregamos respostas prontas.
          </h3>

          <p>
            Nosso compromisso é compreender sua história antes
            de sugerir qualquer processo.
            É isso que torna cada atendimento verdadeiramente individual.
          </p>

        </div>

      </div>
    </section>
  );
}

export default OQueRecebera;