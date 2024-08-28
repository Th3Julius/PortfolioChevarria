import "../styles/components/Nav.css";

function Nav() {
  return (
    <>
      <nav>
        <div className="info">
          <div className="copy-container">
            <span>gerardo@gmail.com</span>
            <button className="copy">Copy</button>
          </div>
          <div className="cv-container">
            <button className="cv">CV</button>  
          </div>
        </div>
        <div className="redes">
          <a href="">LinkedIn</a>
          <span>/</span>
          <a href="">Whatsapp</a>
          <span>/</span>
          <a href="">GitHub</a>
        </div>
      </nav>
    </>
  );
}

export default Nav;
