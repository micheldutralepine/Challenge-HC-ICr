import { Link } from "react-router-dom";
import "../Header/Header.css";
import Logo from "../../assets/logo grande ICr.png";

function Header() {
  return (
    <>
      <header id="header">
        <div className="header-container">
          <div className="logo">
            <img src={Logo} alt="Logo ICr" />
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link to="/"> Home </Link>
              </li>
              <li>
                <Link to="impactos"> Impactos </Link>
              </li>
              <li>
                <Link to="informacoes"> Informações </Link>
              </li>
              <li>
                <Link to="agendamento"> Agendamento </Link>
              </li>
              <li>
                <Link to="educacao-ludica"> Educação Lúdica </Link>
              </li>
              <li>
                <Link to="perfil-personalizado"> Perfil Personalizado </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
