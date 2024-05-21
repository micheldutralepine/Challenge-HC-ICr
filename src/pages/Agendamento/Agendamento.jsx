import React, { useState } from "react";
import Calendario from "../../assets/agendamento.png";
import "./Agendamento.css";

const Agendamento = () => {
  const [nome, setNome] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [rg, setRg] = useState("");
  const [cpf, setCpf] = useState("");
  const [pai, setPai] = useState("");
  const [mae, setMae] = useState("");
  const [dataAgendamento, setDataAgendamento] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const buscarCep = (cep) => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.erro) {
          setCidade(data.localidade);
          setBairro(data.bairro);
        } else {
          console.log("CEP não encontrado.");
        }
      })
      .catch((error) => {
        console.error("Ocorreu um erro ao buscar o CEP:", error);
      });
  };

  return (
    <>
      <body id="body-agendamento">
        <div className="titulo-agendamento">
          <h1> ⎯⎯ Agendamento Online ⎯⎯ </h1>
        </div>
        <div className="container-agendamento">
          <main>
            <div className="cadastro">
              <div className="logo-agendamento">
                <img src={Calendario} alt="Calendário" />
              </div>
              <div className="cadastro-int">
                <form onSubmit={handleSubmit}>
                  <label for="nome">Nome Completo:</label>
                  <input
                    type="text"
                    id="nome"
                    name="Nome"
                    placeholder="Nome Completo"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                  />

                  <label for="nascimento">Data de Nascimento:</label>
                  <input
                    type="date"
                    id="nascimento"
                    name="nascimento"
                    value={nascimento}
                    onChange={(e) => setNascimento(e.target.value)}
                  />

                  <label for="rg">RG:</label>
                  <input
                    type="number"
                    id="rg"
                    name="RG"
                    placeholder="Qual é o seu RG?"
                    value={rg}
                    onChange={(e) => setRg(e.target.value)}
                  />

                  <label for="cpf">CPF:</label>
                  <input
                    type="number"
                    id="cpf"
                    name="CPF"
                    placeholder="Qual é o seu CPF?"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />

                  <label for="pai">Pai:</label>
                  <input
                    type="text"
                    id="pai"
                    name="Pai"
                    placeholder="Nome do Pai"
                    value={pai}
                    onChange={(e) => setPai(e.target.value)}
                  />

                  <label for="mae">Mãe:</label>
                  <input
                    type="text"
                    id="mae"
                    name="Mae"
                    placeholder="Nome da Mãe"
                    value={mae}
                    onChange={(e) => setMae(e.target.value)}
                  />

                  <label for="agendamento">Data do agendamento:</label>
                  <input
                    type="date"
                    id="agendamento"
                    name="agendamento"
                    value={dataAgendamento}
                    onChange={(e) => setDataAgendamento(e.target.value)}
                  />

                  <label for="email"> E-mail:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Qual é o seu E-mail?"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <label for="celular">Celular:</label>
                  <input
                    type="number"
                    id="celular"
                    name="Celular"
                    placeholder="Qual é o número do seu celular?"
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                  />

                  <label for="cep">CEP:</label>
                  <input
                    type="text"
                    id="cep"
                    name="cep"
                    placeholder="Digite o seu CEP"
                    value={cep}
                    onChange={(e) => {
                      setCep(e.target.value);
                      buscarCep(e.target.value);
                    }}
                  />

                  <label for="cidade">Cidade:</label>
                  <input
                    type="text"
                    id="cidade"
                    name="cidade"
                    placeholder="Qual é a sua cidade?"
                    value={cidade}
                    onChange={(e) => setCidade(e.target.value)}
                  />

                  <label for="bairro">Bairro:</label>
                  <input
                    type="text"
                    id="bairro"
                    name="bairro"
                    placeholder="Qual é o seu bairro?"
                    value={bairro}
                    onChange={(e) => setBairro(e.target.value)}
                  />

                  <div className="botoes-agendamento">
                    <input type="submit" name="cadastrar" value="Agendar" />
                    <input type="reset" value="Limpar" />
                  </div>
                </form>
              </div>
            </div>
          </main>
        </div>
      </body>
    </>
  );
};

export default Agendamento;
