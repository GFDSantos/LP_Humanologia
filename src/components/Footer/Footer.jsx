import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <h2>
                    Humanologia Brasileira
                </h2>

                <p className="footer-frase">
                    Tudo está ligado.
                </p>

                <div className="footer-contato">
                    <a
                        href="https://wa.me/message/4OLDAAGNEODJA1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        📱 Fale conosco pelo WhatsApp
                    </a>
                </div>

                <nav className="footer-menu">
                    <a href="#hero">Início</a>

                    <a href="#primeiraLeitura">
                        Primeira Leitura
                    </a>

                    <a href="#quemSomos">
                        Quem Somos
                    </a>

                    <a href="#comoFunciona">
                        Como Funciona
                    </a>

                    <a href="#depoimentos">
                        Depoimentos
                    </a>
                </nav>

                <div className="footer-linha"></div>

                <p className="footer-final">
                    Toda grande transformação começa quando alguém decide compreender a própria história.
                </p>

                <p className="copyright">
                    © Humanologia Brasileira.
                    Todos os direitos reservados.
                </p>

            </div>
        </footer>
    );
}

export default Footer;