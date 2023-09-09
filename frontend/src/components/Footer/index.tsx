import { Container } from "./styles";

import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <div className="footer">
        <div className="address">
          <img src="/assets/logo.webp" alt="Shopper Logo" />
          <div>
            <p>+55 11 3661-1712</p>
            <p>contato@shopper.com.br</p>
          </div>
          <div>
            <p>CNPJ 24.583557/0001-60</p>
            <p>São Paulo - SP</p>
          </div>
        </div>

        <div className="links">
          <ul>
            <li>
              <a href="/">Sobre nós</a>
            </li>
            <li>
              <a href="/">Carreiras</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
            <li>
              <a href="/">Imprensa</a>
            </li>
            <li>
              <a href="/">Termos de Uso</a>
            </li>
            <li>
              <a href="/">Política de Privacidade</a>
            </li>
          </ul>
        </div>

        <div className="plataform">
          <p>Social</p>
          <ul className="plataform-icons">
            <li>
              <FaFacebookSquare color="#ffffff" size={20} />
            </li>
            <li>
              <FaInstagram color="#ffffff" size={20} />
            </li>
          </ul>

          <p>Disponível em</p>

          <ul className="plataform-type">
            <li>
              <a href="https://play.google.com/store/apps/details?id=br.com.shopper.shopperapp&hl=pt_BR&pli=1">
                <img src="/assets/badge-google.png" alt="" />
              </a>
            </li>
            <li>
              <a href="https://landing.shopper.com.br/static/media/icon-applestore-xl.02137fef9c741bc47c6e.webp">
                <img src="/assets/badge-apple.png" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
