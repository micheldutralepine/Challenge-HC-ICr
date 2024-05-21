import "./SobreHospital.css";
import { useState } from "react";
import EntradaInstituto from "../../assets/Instituto-da-criança-sobre.jpg";

function SobreHospital() {
  const [paragrafoVisivel, setparagrafoVisivel] = useState("");

  return (
    <>
      <section id="secao1">
        <div className="secao1-hospital">
          <div className="hospital-container">
            <div className="hospital-titulo">
              <h1> ⎯⎯ Sobre o Hospital ⎯⎯ </h1>
            </div>
            <div className="hospital-elementos">
              <img
                className="hospital-img"
                src={EntradaInstituto}
                alt="Imagem da entrada do Instituto"
              />
              <div className="hospital-conteudo">
                <button
                  id="btnHistoria"
                  onClick={() => setparagrafoVisivel("historia")}
                >
                  <b>História</b>
                </button>
                <button
                  id="btnProjeto"
                  onClick={() => setparagrafoVisivel("projeto")}
                >
                  <b>Projeto Pintando o Bem</b>
                </button>
                <button
                  id="btnAtendimento"
                  onClick={() => setparagrafoVisivel("atendimento")}
                >
                  <b>Atendimento e Estrutura</b>
                </button>
                <div
                  className={`info-historia ${
                    paragrafoVisivel !== "historia" ? "hidden" : ""
                  }`}
                >
                  <p>
                    Fundado em 1976 por um grupo de pediatras liderados pelo
                    Prof. Eduardo Marcondes, o Instituto da Criança do Hospital
                    das Clínicas da FMUSP comemorou em dezembro de 2016, 40 anos
                    homenageando seus pioneiros, refletindo sobre os desafios
                    atuais e futuros da saúde da criança e do adolescente e
                    celebrando sua renovação pela arte do artista Gustavo Rosa,
                    que reforça um dos pilares institucionais – a humanização do
                    atendimento.
                  </p>
                </div>
                <div
                  className={`info-projeto ${
                    paragrafoVisivel !== "projeto" ? "hidden" : ""
                  }`}
                >
                  <p>
                    Por meio do projeto Pintando o bem na saúde, o instituto
                    Gustavo Rosa doou 120 reproduções de obras alegres, que
                    trazem ludicidade aos ambientes e contribuem para um melhor
                    acolhimento dos pacientes e suas famílias. Considerado
                    Centro de Referência Nacional em Saúde da Criança pelo
                    Ministério da Saúde, o hospital ocupa uma área de cerca de
                    25 mil metros quadrados, destinada ao atendimento
                    ambulatorial e internações – com 226 leitos e mais de 70 mil
                    atendimentos ambulatoriais por ano.
                  </p>
                </div>
                <div
                  className={`info-atendimento ${
                    paragrafoVisivel !== "atendimento" ? "hidden" : ""
                  }`}
                >
                  <p>
                    Atende pacientes do Sistema Único de Saúde e de operadoras
                    de planos de saúde (Saúde Suplementar) por meio de suas
                    enfermarias e apartamentos, Centro Cirúrgico, Centro de
                    Tratamento Intensivo Neonatal 1 e 2 (alocado no Instituto
                    Central do Hospital das Clínicas), UTI Pediátrica,
                    Ambulatório, Unidade de Diálise, Pronto-Socorro e Centro de
                    Diagnóstico. O ICr possui ainda um prédio que abriga o
                    Serviço de Onco-hematologia e transplante de Células
                    Hematopoiéticas, o Instituto de Tratamento do Câncer
                    Infantil (ITACI).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SobreHospital;
