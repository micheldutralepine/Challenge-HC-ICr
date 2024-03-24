import FotoPerfil from '../../assets/avatardefault_92824.svg';


function Relatos(){

    return(
        <> 
            <div className="relatos">
                <div className="relatos-container">
                    <div className="relatos-titulo">
                    <h2>Relatos de Pacientes</h2>
                    <p>
                        Compartilhamos experiências inspiradoras de pacientes que passaram
                        por aqui. Suas histórias podem ajudar a tranquilizar e acabar com o
                        medo dos outros.
                    </p>
                    </div>

                    <div className="depoimentos">
                    <div className="depoimento1">
                        <div className="depoimento-titulo">
                        <img width="50px" src={FotoPerfil} alt="" />
                        <h2>Lucas</h2>
                        </div>
                        <h4>transplante</h4>
                        <p>
                        "O transplante foi uma bênção transformadora. A cirurgia foi
                        conduzida com maestria, a equipe médica mostrou compaixão
                        excepcional. Cada batida do coração é agora um testemunho da
                        generosidade do doador. Uma segunda chance que ilumina meu caminho
                        com gratidão e vida renovada."
                        </p>
                    </div>
                    <div className="depoimento2">
                        <div className="depoimento-titulo">
                        <img width="50px" src={FotoPerfil} alt="" />
                        <h2>Júlia</h2>
                        </div>
                        <h4>Doação de sengue</h4>
                        <p>
                        "Participar da doação de sangue foi uma experiência incrível. A
                        equipe foi extremamente profissional e acolhedora. Saber que minha
                        doação pode salvar vidas é gratificante. Recomendo a todos!"
                        </p>
                    </div>
                    <div className="depoimento3">
                        <div className="depoimento-titulo">
                        <img width="50px" src={FotoPerfil} alt="" />
                        <h2>João</h2>
                        </div>
                        <h4>Hemodiálise</h4>
                        <p>
                        "A hemodiálise trouxe alívio e vitalidade. A equipe dedicada e as
                        instalações confortáveis tornaram o processo mais suportável.
                        Agradeço pela qualidade no cuidado prestado."
                        </p>
                    </div>
                    <div className="depoimento4">
                        <div className="depoimento-titulo">
                        <img width="50px" src={FotoPerfil} alt="" />
                        <h2>Maria Eduarda</h2>
                        </div>
                        <h4>Cirurgia</h4>
                        <p>
                        "Minha experiência cirúrgica foi notável. A equipe médica
                        demonstrou profissionalismo excepcional, oferecendo suporte e
                        informações claras. As instalações eram modernas e acolhedoras,
                        proporcionando conforto pré e pós-operatório. A recuperação foi
                        suave, e estou grato pelo cuidado compassivo que recebi. Recomendo
                        este centro cirúrgico sem hesitação."
                        </p>
                    </div>
                    <div className="depoimento5">
                        <div className="depoimento-titulo">
                        <img width="50px" src={FotoPerfil} alt="" />
                        <h2>Matheus</h2>
                        </div>
                        <h4>Doaçao de sangue</h4>
                        <p>
                        "Doar sangue foi simples e gratificante. Equipe eficiente e
                        ambiente acolhedor. Contribuí para salvar vidas. Recomendo."
                        </p>
                    </div>

                    <div className="depoimento6">
                        <div className="depoimento-titulo">
                        <img width="50px" src={FotoPerfil} alt="" />
                        <h2>Stefanie</h2>
                        </div>
                        <h4>Quimioterapia</h4>
                        <p>
                        " A experiência com a quimioterapia foi além das expectativas. A
                        equipe médica foi carinhosa e profissional, proporcionando
                        conforto durante todo o tratamento. Grato pela qualidade
                        excepcional do cuidado."
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Relatos