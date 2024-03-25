import '../Perfil-Personalizado/Perfil-Personalizado.css';

function PerfilPersonalizado(){

    return(
        <> 
            <section id="secao6">
                <h1>Perfil Personalizado</h1>
                <div className="foto-perfil">
                    <img id="preview-foto" src="" alt="" />
                    <input type="file" id="upload-foto" accept="image/*" />
                </div>

                <div className="informação-pessoal">
                    <label for="nome-paciente">Nome:</label>
                    <input type="text" id="nome-paciente" placeholder="Digite seu nome" />

                    <label for="idade-paciente">Idade:</label>
                    <input
                    type="number"
                    id="idade-paciente"
                    placeholder="Digite sua idade"
                    min="0"
                    />

                    <label for="cor-fav">Cor favorita:</label>
                    <input
                    type="text"
                    id="cor-fav"
                    placeholder="Qual é sua cor favorita?"
                    />

                    <label for="comida-fav">Comidas Favoritas:</label>
                    <input
                    type="text"
                    id="comida-fav"
                    placeholder="Quais são suas comidas favoritas?"
                    />

                    <label for="hobbies">Hobbies:</label>
                    <input type="text" id="hobbies" placeholder="Quais são seus hobbies?" />

                    <label for="alergias">Alergias:</label>
                    <input type="text" id="alergias" placeholder="Possui alguma alergia?" />

                    <div>
                    <button id="botao-perfil" onclick="validarFormulario()">
                        Atualizar Informações
                    </button>
                    <button onclick="toggleclassNamee()">historico de exames</button> 
                    </div>

                    <div className="historico-tratamento">
                    <h3>Histórico de Tratamento:</h3>
                    <ul>
                        <li>
                        <strong>Consulta em 15/08/2023 - Dr. Silva</strong>
                        <textarea rows="2" placeholder="Obsevações:"></textarea>
                        </li>
                        <li>
                        <strong>Exame de sangue em 18/08/2023</strong>
                        <textarea rows="2" placeholder="Obsevações:"></textarea>
                        </li>
                    </ul>
                    </div>
                </div>

                <div className="alterar-tema">
                    <h3>Personalização de Tema</h3>
                    <label for="cor-tema">Escolha a Cor do Tema:</label>
                    <input type="color" id="cor-tema" />
                </div>
            </section>
        </>
    )
}

export default PerfilPersonalizado