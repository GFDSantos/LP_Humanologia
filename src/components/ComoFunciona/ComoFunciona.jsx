import "./ComoFunciona.css";

function ComoFunciona() {
  return (
      <section
        id="comoFunciona"
        className="como-funciona"
      >   

      <div className="como-container">

        <span className="secao-tag">
          Como Funciona
        </span>

        <h2>
          A Primeira Leitura é o começo da sua jornada.
        </h2>

        <p className="como-intro">
          A Humanologia Brasileira começa compreendendo o momento
          que você está vivendo. A partir dessa compreensão,
          compartilhamos nossa percepção e indicamos o caminho
          que acreditamos fazer mais sentido para a sua realidade.
        </p>

        <div className="fluxo">

          <div className="card-fluxo">

            <div className="numero">
              1
            </div>

            <h3>
              Primeira Leitura
            </h3>

            <p>
              Você responde algumas perguntas e realizamos uma
              primeira leitura da sua história para compreender
              o momento que você está vivendo.
            </p>

          </div>

          <div className="seta">
            →
          </div>

          <div className="card-fluxo">

            <div className="numero">
              2
            </div>

            <h3>
              Leitura Personalizada
            </h3>

            <p>
              Identificamos os principais aspectos que merecem
              atenção e preparamos uma devolutiva construída
              exclusivamente a partir das suas respostas.
            </p>

          </div>

          <div className="seta">
            →
          </div>

          <div className="card-fluxo">

            <div className="numero">
              3
            </div>

            <h3>
              Sessão de Clareza
            </h3>

            <p>
              Entramos em contato para compartilhar nossa leitura,
              esclarecer dúvidas e apresentar nossa percepção
              sobre o seu momento de vida.
            </p>

          </div>

          <div className="seta">
            →
          </div>

          <div className="card-fluxo">

            <div className="numero">
              4
            </div>

            <h3>
              Recomendação Personalizada
            </h3>

            <p>
              Ao final da Primeira Leitura, indicaremos o caminho que acreditamos fazer mais sentido para você. Em alguns casos, uma Sessão de Cuidado é suficiente. Em outros, recomendamos a Travessia.
            </p>

          </div>

        </div>

        <div className="bloco-destaque">

          <h3>
            Não existe um caminho certo para todas as pessoas.
            <br />
            Existe o caminho que faz sentido para a sua história.
          </h3>

          <p>
            Por isso, também não acreditamos em soluções prontas.
          </p>

          <p>
            A Primeira Leitura existe para compreender quem você é,
            o momento que está vivendo e indicar, com responsabilidade,
            o caminho que faz mais sentido para a sua realidade.
          </p>

        </div>

      </div>

    </section>
  );
}

export default ComoFunciona;