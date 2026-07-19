import "./JornadaHumanologia.css";

function JornadaHumanologia() {
  return (
    <section className="jornada-humanologia">
      <div className="jornada-container">
        <span className="secao-tag">
          A Jornada Humanologia
        </span>

        <h2>
          Como acontece a sua jornada na Humanologia Brasileira
        </h2>

        <p className="intro">
          Cada história é única.
        </p>

        <p className="intro">
          Por isso, a Humanologia Brasileira não segue um caminho igual
          para todas as pessoas.
        </p>

        <p className="intro">
          A Primeira Leitura é o ponto de partida. A partir dela,
          compreendemos o momento que você está vivendo <br />e indicamos
          o caminho que acreditamos fazer mais sentido para a sua história.
        </p>


        <div className="linha"></div>

        <div className="fluxo">

          <div className="etapa">
            <span className="numero">
              1
            </span>

            <h3>
              Primeira Leitura
            </h3>

            <p>
              Um primeiro olhar para compreender sua história
              e o momento que você está vivendo.
            </p>
          </div>

          <div className="etapa">

            <span className="numero">
              2
            </span>

            <h3>
              Sessão de Clareza
            </h3>

            <p>
              Um encontro individual para aprofundar a leitura,
              responder suas dúvidas e indicar o caminho mais adequado
              para você.
            </p>
          </div>


          <p className="intro">
            A partir daqui, cada história segue um caminho diferente.
          </p>

          <div className="bifurcacao">

            <div className="caminho">

              <h3>
                Sessão Individual
              </h3>

              <p>
                Quando existe uma necessidade específica
                e pontual.
              </p>

            </div>

            <div className="caminho">

              <h3>
                Travessia
              </h3>

              <p>
                Uma jornada personalizada de três meses para quem
                está vivendo uma encruzilhada e deseja reorganizar
                sua vida com clareza, direção e acompanhamento.
              </p>
            </div>

          </div>


          <div className="etapa">

            <h3>
              Comunidade Humanologia Brasileira
            </h3>

            <p>
              Um espaço para continuar crescendo,
              compartilhando experiências e fortalecendo
              essa caminhada.
            </p>

          </div>

          <div className="etapa">

            <h3>
              Vivência Anual
            </h3>

            <p>
              Um encontro presencial para aprofundar
              a experiência e fortalecer os vínculos
              da comunidade.
            </p>
          </div>

        </div>

        <div className="formacao">

          <h3>
            Para algumas pessoas…
          </h3>

          <p>
            Durante essa jornada, algumas pessoas descobrem
            que sua missão também é ajudar outras pessoas.
          </p>

          <p>
            Para elas, existe a Formação em Humanologia Brasileira,
            um processo de aprofundamento voltado para quem deseja
            aprender o método e aplicá-lo profissionalmente.
          </p>

        </div>

      </div>
    </section>
  );
}

export default JornadaHumanologia;