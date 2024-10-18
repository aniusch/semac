import "./Footer.css";
import LogoSemac from "../../../assets/logo.svg";
import LogoUFMT from "../../../assets/footer_logos/logo_ufmt.png";
import Instagram from "../../../assets/footer_logos/line-md_instagram.png";
import Github from "../../../assets/footer_logos/mdi_github.png";
import PhoneIcon from "../../../assets/footer_logos/Vector-1.png";
import MailIcon from "../../../assets/footer_logos/Vector-2.png";
import LocationIcon from "../../../assets/footer_logos/Vector.png";

const Footer = ({ links }) => {
  return (
    <div>
      <div className="footer_container">
        <div className="footer_col">
          <div className="footer_logos">
            <img src={LogoSemac} alt="Logo Semac" height={40}/>
            <img src={LogoUFMT} alt="Logo UFMT" />
          </div>

          <p className="link-item">
            Coordenadora do Projeto - Gracyeli Guarienti
          </p>
          <p className="link-item">
            <a href="tel:+5565996002469">
              <img
                src={PhoneIcon}
                style={{ paddingRight: "0.5rem" }}
                alt="Telefone"
              />
              (65) 99600-2469
            </a>
          </p>
          <p className="link-item">
            <a href="mailto:gracyeli.guarienti@ufmt.br">
              <img
                src={MailIcon}
                style={{ paddingRight: "0.5rem" }}
                alt="Email"
              />
              gracyeli.guarienti@ufmt.br
            </a>
          </p>

          <div className="footer_contact">
            <img
              src={LocationIcon}
              alt="Localização"
              className="footer_location_icon"
            />
            <p>
              <a
                href="https://maps.app.goo.gl/U4SpsgBXt1uySNjq5"
                target="_blank"
                rel="noopener noreferrer"
              >
                Universidade Federal de Mato Grosso – Faculdade de Engenharia
                (FAENG) - MT
              </a>
            </p>
          </div>
        </div>
        <div className="footer_menu">
          <div className="footer_col">
            <p className="colored-bigger">Menu</p>
            {links.map((link) => (
              <a key={link.href} href={link.href} className="link-item">
                {link.text}
              </a>
            ))}
          </div>
          <div className="footer_col">
            <p className="colored-bigger">Redes Sociais</p>
            <div className="footer_contact">
              <div className="footer_social_icons">
                <img
                  src={Instagram}
                  alt="Instagram"
                  style={{ width: "20px", height: "20px" }}
                />
                <img src={Github} alt="Github" style={{ width: "20px" }} />
              </div>
              <div className="footer_social_links">
                <a
                  className="link-noStyle"
                  href="https://www.instagram.com/semac_ufmt/"
                  target="_blank"
                >
                  Instagram
                </a>
                <a
                  className="link-noStyle"
                  href="https://github.com/aniusch/semac"
                  target="_blank"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bottom">
        <a href="https://infocorpjr.com.br/" target="_blank">
          © 2024 <span className="colored-text">InfoCorp</span>. Todos os
          direitos reservados.
        </a>
      </div>
    </div>
  );
};

export default Footer;
