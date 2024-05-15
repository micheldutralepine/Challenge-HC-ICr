import React, { useState } from 'react';
import Calendario from "../../assets/agendamento.png";
import "./Agendamento.css";

const Agendamento = () => {
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [nome, setNome] = useState("");
  const [rg, setRg] = useState("");
  const [pai, setPai] = useState("");
  const [dataAgendamento, setDataAgendamento] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [bairro, setBairro] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [mae, setMae] = useState("");
  const [celular, setCelular] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  const handleMudarFotoPerfil = (event) => {
    const file = event.target.files[0];
  
    setFotoPerfil(file);
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
        <div className="cotainer-agendamento">
          <div className="header-agendamento">
            <div className="topo">Agendamento Online</div>
          </div>
          <main>
            <div className="cadastro">
              <div className="logo-agendamento">
                <img src={Calendario} alt="Calendário" />
              </div>
              <div className="cadastro-int">
                <div className="form-1">
                  <form onSubmit={handleSubmit}>
                    Nome Completo:
                    <br />
                    <input
                      type="text"
                      id="nome"
                      name="Nome"
                      placeholder="Nome Completo"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                    />
                    <br />
                    RG:
                    <br />
                    <input
                      type="number"
                      id="rg"
                      name="RG"
                      value={rg}
                      onChange={(e) => setRg(e.target.value)}
                    />
                    <br />
                    Pai:
                    <br />
                    <input
                      type="text"
                      id="pai"
                      name="Pai"
                      placeholder="Nome do Pai"
                      value={pai}
                      onChange={(e) => setPai(e.target.value)}
                    />
                    <br />
                    <br />
                    Data do agendamento:
                    <br />
                    <input
                      type="date"
                      id="agendamento"
                      name="nascimento"
                      value={dataAgendamento}
                      onChange={(e) => setDataAgendamento(e.target.value)}
                    />
                    <br />
                    <br />
                    E-mail:
                    <br />
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    CEP:
                    <br />
                    <input
                      type="text"
                      id="cep"
                      name="cep"
                      value={cep}
                      onChange={(e) => {
                        setCep(e.target.value);
                        buscarCep(e.target.value);
                      }}
                    />
                    <br />
                    Cidade:
                    <br />
                    <input
                      type="text"
                      id="cidade"
                      name="cidade"
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)}
                    />
                    <br />
                    Bairro:
                    <br />
                    <input
                      type="text"
                      id="bairro"
                      name="bairro"
                      value={bairro}
                      onChange={(e) => setBairro(e.target.value)}
                    />
                    <div className="botoes-agendamento">
                      <input type="submit" name="cadastrar" value="Agendar" />
                      <input type="reset" value="Limpar" />
                    </div>
                  </form>
                </div>
                <div className="form-2">
                  <label htmlFor="nascimento">Data de Nascimento:</label>
                  <input
                    type="text"
                    id="nascimento"
                    name="nascimento"
                    placeholder="ddmmaaaa"
                    value={nascimento}
                    onChange={(e) => setNascimento(e.target.value)}
                  />
                  CPF:
                  <br />
                  <input
                    type="number"
                    id="cpf"
                    name="CPF"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                  <br />
                  Mãe:
                  <br />
                  <input
                    type="text"
                    id="mae"
                    name="Mae"
                    placeholder="Nome da Mãe"
                    value={mae}
                    onChange={(e) => setMae(e.target.value)}
                  />
                  <br />
                  Celular:
                  <br />
                  <input
                    type="number"
                    id="celular"
                    name="Celular"
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </body>

      
    </>
  );
}

export default Agendamento;