import "../styles/components/Footer.css";
import EmailIcon from "../assets/icons/EmailIcon";
import WhatsApp from "../assets/icons/WhatsApp";
import ImagenManos from "../assets/img/manos.png"

function Footer() {
    return (
        <footer className="footer">
            
            <div className="footer__informacion">
                <div className="footer__logo">
                    <img className="ManosProject" src={ImagenManos} alt="Foto" />
                </div>
                <div className="footer-titulo">
                    <h2 className="footer-titulo-text">
                        Tell me about your next <br /> project
                    </h2>
                </div>
                
                
                <div className="footer__informacion--correo">
                    <div className="footer__info--contactos">
                        <button className="footer__info--contactos-btn"> 
                            <EmailIcon
                                color={'black'}
                                stroke={'none'}
                                className="IconEmail"
                            />
                            Email Me</button>
                        <button className="footer__info--contactos-btn">
                            <WhatsApp
                                color={'black'}
                                stroke={'white'}
                                className="IconEmail"
                            />
                            WhatsApp</button>
                    </div>
                </div>
            </div>

            <div className="footer__contactos">
                <h4>2024 All rights reserved.</h4>
                <div className="footer__contatos--link">
                    <a href="">LinkedIn</a>
                    <a href="">GitHub</a>
                    <a href="">WhatsApp</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
