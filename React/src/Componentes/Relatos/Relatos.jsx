import '../Relatos/Relatos.css';
import FotoPerfil from '../../assets/avatardefault_92824.svg';
import FotoMenino from '../../assets/ft-perfil menino.png';
import FotoMenino1 from '../../assets/ft-perfil menino1.png';
import FotoCrianca from '../../assets/ft-perfil crianca.png';
import FotoMenina from '../../assets/ft-perfil menina.png';
import FotoMenino2 from '../../assets/ft-perfil menino2.png';
import FotoMenina1 from '../../assets/ft-perfil menina1.jpg';


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
                        <img width="50px" src={FotoMenino1} alt="" />
                        <h2>Lucas</h2>
                        </div>
                        <h4>
                            Atendimento Ambulatorial - <br />
                            Dra. Fernanda (Pediatra):
                        </h4>
                        <p>
                            "A Dra. Fernanda é a melhor! Ela sempre nos recebe com um sorriso
                            e brinca comigo durante a consulta. Minha mãe disse que ela
                            explica tudo muito bem e sempre nos deixa confortáveis. Gosto de
                            ir ao ICr porque sei que vou ver a Dra. Fernanda!"
                        </p>
                    </div>
                    <div className="depoimento2">
                        <div className="depoimento-titulo">
                        <img width="50px" src={FotoCrianca} alt="" />
                        <h2>Júlia</h2>
                        </div>
                        <h4>
                            Exames Diagnósticos - <br />
                            Setor de Radiologia:
                        </h4>
                        <p>
                            "A ressonância magnética da minha filha no Instituto da Criança e
                            do Adolescente foi tranquila e eficiente. Agendamento fácil,
                            atendimento pontual, técnico gentil explicando tudo. Recebemos os
                            resultados rapidamente. Ótima experiência!"
                        </p>
                    </div>
                    <div className="depoimento3">
                        <div className="depoimento-titulo">
                        <img width="50px" src={FotoMenino} alt="" />
                        <h2>João</h2>
                        </div>
                        <h4>Internação Hospitalar - Ala Pediátrica:</h4>
                        <p>
                            "Quando tive que ficar no hospital por alguns dias, fui para a ala
                            pediátrica do ICr. Lá é muito legal! As enfermeiras são super
                            simpáticas e brincaram comigo o tempo todo. Até ganhei um
                            brinquedo novo!"
                        </p>
                    </div>
                    <div className="depoimento4">
                        <div className="depoimento-titulo">
                        <img width="50px" src={FotoMenina} alt="" />
                        <h2>Maria Eduarda</h2>
                        </div>
                        <h4>Cirurgia - Dr. Pedro (Cirurgião Pediátrico):</h4>
                        <p>
                            "Eu tive que fazer uma cirurgia no Instituto da Criança e do
                            Adolescente, mas o Dr. Pedro foi tão legal que eu nem estava com
                            tanto medo. Ele me explicou tudo e até desenhou no papel como ia
                            ser. Depois da cirurgia, ele veio me ver e disse que eu fui muito
                            corajosa. Obrigada, Dr. Pedro!"
                        </p>
                    </div>
                    <div className="depoimento5">
                        <div className="depoimento-titulo">
                        <img width="50px" src={FotoMenino2} alt="" />
                        <h2>Matheus</h2>
                        </div>
                        <h4>
                            Exames Diagnósticos - <br />
                            Setor de Radiologia:                        
                        </h4>
                        <p>
                            "Fui fazer um exame no Setor de Radiologia do ICr e foi legal! O
                            técnico foi bem legal comigo, ele me deu um fone de ouvido para eu
                            ouvir música durante o exame. Não doeu nada e eu até consegui ver
                            as fotos depois. Muito obrigado!"
                        </p>
                    </div>

                    <div className="depoimento6">
                        <div className="depoimento-titulo">
                        <img width="50px" src={FotoMenina1} alt="" />
                        <h2>Stefanie</h2>
                        </div>
                        <h4>Serviço de Pneumologia:</h4>
                        <p>
                            "Quando minha filha teve problemas respiratórios, buscamos ajuda
                            no serviço de pneumologia do Instituto da Criança e do
                            Adolescente. Fomos recebidas com muito cuidado e atenção. O médico
                            explicou tudo de forma clara e fez um plano de tratamento eficaz.
                            Estamos muito gratas pelo excelente atendimento recebido."
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Relatos