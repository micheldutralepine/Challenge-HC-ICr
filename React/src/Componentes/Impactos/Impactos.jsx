import '../Impactos/Impactos.css'
import X from '../../assets/x.svg';
import Certo from '../../assets/certo.svg';


function Impactos(){

    return(
        <> 
            <section id="secao2">
                <div className="impactos-container">
                    <div className="impactos-negativos">
                    <h1>Impactos Negativos do problema</h1>
                    <p>
                        Baseado em uma análise geral das pricipais dores do Instituto da
                        Criança e do Adolescente, interpretamos que os impactos mais
                        importantes e recorrentes em seus pacientes e acompanhantes são:
                    </p>

                    <hr />
                    <ul className="impactos-negativos-lista">
                        <img width="15px" src={X} alt="" />
                        <li>Ansiedade, estresse e medo</li>
                        <img width="15px" src={X} alt="" />
                        <li>Cancelamento de procedimentos</li>
                        <img width="15px" src={X} alt="" />
                        <li>Atrasos na consultas, exames e tratamentos</li>
                        <img width="15px" src={X} alt="" />
                        <li>Desinformação</li>
                        <img width="15px" src={X} alt="" />
                        <li>Experiência insatisfatória</li>
                    </ul>
                    </div>
                    <div className="impactos-positivos">
                    <h1>Impactos Positivos da solução</h1>
                    <p>
                        A partir da nossa solução, buscamos melhorar a experiência
                        hospitalar através de uma plataforma online que une praticidade,
                        informação clara e suporte emocional ao paciente e seus
                        acompanhantes. Dessa forma, trazendo:
                    </p>
                    <hr />
                    <ul className="impactos-positivos-lista">
                        <img width="17px" src={Certo} alt="" />
                        <li>Atendimentos ágeis e personalizados</li>
                        <img width="17px" src={Certo} alt="" />
                        <li>Mais tranquilidade e segurança a todos</li>
                        <img width="17px" src={Certo} alt="" />
                        <li>Redução na desinformação e no cancelamento</li>
                        <img width="17px" src={Certo} alt="" />
                        <li>Melhora na experiência hospitalar</li>
                    </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Impactos