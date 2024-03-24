import '../Agendamento/Agendamento.css';
import Calendario from '../../assets/agendamento.png';


function Agendamento(){

    return(
        <> 
            <body id='body-agendamento'>
                <div className="cotainer-agendamento">
                <div className="header-agendamento">
                    <div className="topo">Agendamento Online</div>
                </div>
                <main>
                    <div className="cadastro">
                    <div className="logo-agendamento">
                        <img src={Calendario} />
                    </div>
                    <div className="cadastro-int">
                        <div className="form-1">
                        <form>
                            Nome Completo:<br />
                            <input
                            type="text"
                            id="nome"
                            name="Nome"
                            placeholder="Nome Completo"
                            /><br />
                            RG:<br />
                            <input type="number" id="rg" name="RG" /><br />
                            Pai:<br />
                            <input
                            type="text"
                            id="pai"
                            name="Pai"
                            placeholder="Nome do Pai"
                            /><br /><br />
                            Data do agendamento:<br />
                            <input type="date" id="agendamento" name="nascimento" />
                            <br /><br />
                            E-mail:<br />
                            <input type="text" id="email" name="email" />
                        </form>
                        </div>
                        <div className="form-2">
                        <label for="nascimento">Data de Nascimento:</label>
                        <input
                            type="text"
                            id="nascimento"
                            name="nascimento"
                            placeholder="ddmmaaaa"
                        />

                        CPF:<br />
                        <input type="number" id="cpf" name="CPF" /><br />
                        Mãe:<br />
                        <input
                            type="text"
                            id="mae"
                            name="Mae"
                            placeholder="Nome da Mãe"
                        /><br />
                        Celular:<br />
                        <input type="number" id="celular" name="Celular" />
                        <div className="botoes-agendamento">
                            <input type="submit" name="cadastrar" value="Agendar" />
                            <input type="Reset" value="Limpar" />
                        </div>
                        </div>
                    </div>
                    </div>
                </main>
                </div>
            </body>
        </>
    )
}

export default Agendamento