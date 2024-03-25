import '../Header/Header.css';
import Logo from '../../assets/logo-certa.jpg';

function Header(){

    return(
        <> 
            <header id="header">
                <div className="header-container">
                    <div className="logo">
                        <img src={Logo} alt="Logo ICr" />
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="#secao1"> Sobre o Hospital </a></li>
                            <li><a href="#secao2"> Impactos </a></li>
                            <li><a href="#secao3"> Informações </a></li>
                            <li><a href="./paginas/login.html"> Agendamento </a></li>
                            <li><a href="#secao5"> Educação Lúdica </a></li>
                            <li><a href="#secao6"> Perfil Personalizado </a></li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header