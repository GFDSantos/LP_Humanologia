import "./Depoimentos.css";

function Depoimentos() {
    const videos = [
        {
            categoria: "Relacionamentos",
            video: "NUc5AJKiCCM"
        },
        {
            categoria: "Família",
            video: "wFr2AdHVmIQ"
        },
        {
            categoria: "Recomeço",
            video: "u_2wt6co6P8"
        },
        {
            categoria: "Transformação",
            video: "71_4Z6Zr6Ws"
        },
        {
            categoria: "Nova Jornada",
            video: "mc9BArKFx6A"
        }
    ];

    const escritos = [
        {
            assunto: "Padrão que se repetia",
            texto:
                "Eu achei que o problema era meu casamento. Descobri que era algo que vinha de muito antes. Quando entendi isso, tudo mudou.",
            nome: "Maria R.",
            local: "São Paulo, SP"
        },

        {
            assunto: "Bloqueio financeiro",
            texto:
                "Sempre que eu chegava perto de um certo nível financeiro, algo acontecia. Nunca tinha entendido por quê. Agora entendo.",
            nome: "Carlos M.",
            local: "Belo Horizonte, MG"
        },

        {
            assunto: "Sintoma recorrente",
            texto:
                "Tratei por anos. Melhorava e voltava. Quando fui às origens do que meu corpo estava dizendo, o processo foi diferente.",
            nome: "Ana L.",
            local: "Rio de Janeiro, RJ"
        },

        {
            assunto: "Sensação de estar perdida",
            texto:
                "Eu não sabia nem nomear o que sentia. Sabia só que estava errado. A leitura me deu palavras para o que eu vivia há anos.",
            nome: "Patrícia S.",
            local: "Guararema, SP"
        },

        {
            assunto: "Conflito familiar antigo",
            texto:
                "Achei que o problema era minha família. Aprendi que tinha muito meu ali dentro. Isso foi difícil e libertador ao mesmo tempo.",
            nome: "Fernando T.",
            local: "Campinas, SP"
        },

        {
            assunto: "Relacionamento que não evoluía",
            texto:
                "Cada relacionamento terminava igual. Depois da Leitura da Alma, entendi o que eu precisava mudar em mim — não no outro.",
            nome: "Juliana C.",
            local: "Santos, SP"
        }
    ];


    return (
        <section
            id="depoimentos"
            className="depoimentos"
        >
            <div className="depoimentos-container">

                <span className="secao-tag">
                    Histórias Reais
                </span>

                <h2>
                    Histórias de quem decidiu dar o primeiro passo
                </h2>

                <p className="depoimentos-intro">
                    Cada pessoa chega vivendo uma realidade diferente.
                    O que elas têm em comum é a decisão de começar.
                </p>

                {/* ===========================
                    DEPOIMENTOS EM VÍDEO
                ============================ */}

                <h3 className="titulo-subsecao">
                    Depoimentos em Vídeo
                </h3>

                <div className="cards-videos">

                    {videos.map((item, index) => (
                        <div
                            className="card-video"
                            key={index}
                        >
                            <span className="categoria">
                                {item.categoria}
                            </span>

                            <div className="video-youtube">
                                <iframe
                                    src={`https://www.youtube.com/embed/${item.video}`}
                                    title={`Depoimento ${item.categoria}`}
                                    loading="lazy"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            </div>
                        </div>
                    ))}

                </div>

                {/* ===========================
                    DEPOIMENTOS ESCRITOS
                ============================ */}

                <h3 className="titulo-subsecao escritos-titulo">
                    Experiências Compartilhadas
                </h3>

                <div className="cards-escritos">

                    {escritos.map((item, index) => (
                        <div
                            className="card-escrito"
                            key={index}
                        >
                            <span className="categoria">
                                {item.assunto}
                            </span>

                            <p>
                                "{item.texto}"
                            </p>

                            <h4>
                                {item.nome}
                            </h4>

                            <small>
                                {item.local}
                            </small>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Depoimentos;