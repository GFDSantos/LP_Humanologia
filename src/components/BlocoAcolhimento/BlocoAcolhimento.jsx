import "./BlocoAcolhimento.css";

import {
  Heart,
  Users,
  HeartPulse,
  Wallet,
  Sprout,
  Brain
} from "lucide-react";

function BlocoAcolhimento() {
  return (
    <section className="acolhimento">
      <div className="container">

        <span className="secao-tag">
          Antes de qualquer resposta
        </span>

        <h2>
          Queremos ouvir você.
        </h2>

        <p className="texto-principal">
          Toda história humana começa nas primeiras relações da vida.
          É nesse primeiro ambiente <br />
          que aprendemos a amar, confiar, sentir medo,
          nos proteger e encontrar o nosso lugar.

          <br /><br />

          Com o passar dos anos, essa história continua sendo escrita através das
          relações, das escolhas, <br />
          do corpo, do trabalho, da espiritualidade e da
          forma como vivemos.

          <br /><br />

          É por isso que nenhuma história pode ser compreendida olhando apenas para
          um único problema.
        </p>

        <div className="cards">

          <div className="card">
            <Heart className="icone-card" />

            <h3>Relacionamentos</h3>

            <p>
              Conflitos, separações,
              dificuldades
              <br />
              de comunicação
              ou desafios afetivos.
            </p>
          </div>

          <div className="card">
            <Users className="icone-card" />

            <h3>Família</h3>

            <p>
              Questões familiares,
              convivência,
              pais, filhos
              <br />
              e vínculos.
            </p>
          </div>

          <div className="card">
            <HeartPulse className="icone-card" />

            <h3>Saúde</h3>

            <p>
              O corpo muitas vezes
              expressa aquilo que ainda
              não foi compreendido.
            </p>
          </div>

          <div className="card">
            <Wallet className="icone-card" />

            <h3>Vida Financeira</h3>

            <p>
              Dificuldades financeiras,
              bloqueios
              <br />
              ou insegurança
              em relação ao futuro.
            </p>
          </div>

          <div className="card">
            <Sprout className="icone-card" />

            <h3>Propósito</h3>

            <p>
              A sensação de que existe
              algo maior esperando
              por você.
            </p>
          </div>

          <div className="card">
            <Brain className="icone-card" />

            <h3>Cansaço</h3>

            <p>
              Quando a vida parece pesada
              e você sente
              <br />
              que perdeu a direção.
            </p>
          </div>

        </div>

        <p className="frase-final">
          Nenhuma dessas histórias é igual.
          <br />
          <strong>Por isso queremos compreender a sua.</strong>
        </p>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfzP_KPKxGs4p1FMn7BTRcBNVsPc7vmJaBfRRtQBLMiYmsJHg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-acolhimento"
        >
          Quero começar minha
          <br />
          Primeira Leitura
        </a>

      </div>
    </section>
  );
}

export default BlocoAcolhimento;