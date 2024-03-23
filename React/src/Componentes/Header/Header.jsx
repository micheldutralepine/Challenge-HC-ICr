function Header(){

    return(
        <> 
            <header id="header">
                <div class="header-container">
                    <div class="logo">
                        <img src="./imgs/logo-certa.jpg" alt="" />
                    </div>
                    <div class="menu">
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