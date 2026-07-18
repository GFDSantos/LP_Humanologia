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
                    <p>
                        📱 WhatsApp
                    </p>
                    <p>
                        ✉ contato@humanologiabrasileira.com.br
                    </p>
                </div>
                <nav className="footer-menu">
                    <a href="#hero">Início</a>
                    <a href="#quem-somos">Quem Somos</a>
                    <a href="#como-funciona">Como Funciona</a>
                    <a href="#depoimentos">Depoimentos</a>
                </nav>
                <div className="footer-linha"></div>
                <p className="copyright">
                    © {new Date().getFullYear()} Humanologia Brasileira.
                    Todos os direitos reservados.
                </p>
                <p className="desenvolvido">
                    Landing Page desenvolvida por
                    <strong> GFDSantos</strong>
                </p>
            </div>
        </footer>
    );
}

export default Footer;