import React, { useState } from "react";

function InfoPessoal() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [corFavorita, setCorFavorita] = useState("");
  const [comidasFavoritas, setComidasFavoritas] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [alergias, setAlergias] = useState("");
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [perfilVisivel, setPerfilVisivel] = useState(false);
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setPerfilVisivel(true);
  };

  const handleEditarPerfil = () => {
    setPerfilVisivel(false);
  };

  const handleMudarFotoPerfil = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFotoPerfil(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
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
    <div className="informacao-pessoal">
      <h2>Informações Pessoais</h2>
      {fotoPerfil && (
        <img
          className="foto-perfil"
          src={fotoPerfil}
          alt="Foto de perfil do paciente"
        />
      )}

      {perfilVisivel ? (
        <div>
          <p>
            <strong>• Nome:</strong> {nome}
          </p>
          <p>
            <strong>• Idade:</strong> {idade}
          </p>
          <p>
            <strong>• Cor Favorita:</strong> {corFavorita}
          </p>
          <p>
            <strong>• Comidas Favoritas:</strong> {comidasFavoritas}
          </p>
          <p>
            <strong>• Hobbies:</strong> {hobbies}
          </p>
          <p>
            <strong>• Alergias:</strong> {alergias}
          </p>
          <p>
            <strong>• CEP:</strong> {cep}
          </p>
          <p>
            <strong>• Bairro:</strong> {bairro}
          </p>
          <p>
            <strong>• Cidade:</strong> {cidade}
          </p>
          <button onClick={handleEditarPerfil}>Editar Perfil</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="upload-foto">Foto de Perfil:</label>
          <input
            type="file"
            id="upload-foto"
            accept="image/*"
            onChange={handleMudarFotoPerfil}
          />

          <label htmlFor="nome-paciente">Nome:</label>
          <input
            type="text"
            id="nome-paciente"
            placeholder="Digite seu nome:"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />

          <label htmlFor="idade-paciente">Idade:</label>
          <input
            type="number"
            id="idade-paciente"
            placeholder="Digite sua idade:"
            min="0"
            value={idade}
            onChange={(event) => setIdade(event.target.value)}
          />

          <label htmlFor="cor-fav">Cor favorita:</label>
          <input
            type="text"
            id="cor-fav"
            placeholder="Qual é sua cor favorita?"
            value={corFavorita}
            onChange={(event) => setCorFavorita(event.target.value)}
          />

          <label htmlFor="comida-fav">Comidas Favoritas:</label>
          <input
            type="text"
            id="comida-fav"
            placeholder="Quais são suas comidas favoritas?"
            value={comidasFavoritas}
            onChange={(event) => setComidasFavoritas(event.target.value)}
          />

          <label htmlFor="hobbies">Hobbies:</label>
          <input
            type="text"
            id="hobbies"
            placeholder="Quais são seus hobbies?"
            value={hobbies}
            onChange={(event) => setHobbies(event.target.value)}
          />

          <label htmlFor="alergias">Alergias:</label>
          <input
            type="text"
            id="alergias"
            placeholder="Possui alguma alergia?"
            value={alergias}
            onChange={(event) => setAlergias(event.target.value)}
          />

          <label htmlFor="cep">CEP:</label>
          <input
            type="text"
            id="cep"
            placeholder="Digite seu CEP"
            value={cep}
            onChange={(event) => {
              setCep(event.target.value);
              buscarCep(event.target.value);
            }}
          />

          <label htmlFor="bairro">Bairro:</label>
          <input
            type="text"
            id="bairro"
            placeholder="Digite seu bairro"
            value={bairro}
            onChange={(event) => setBairro(event.target.value)}
          />

          <label htmlFor="cidade">Cidade:</label>
          <input
            type="text"
            id="cidade"
            placeholder="Digite sua cidade"
            value={cidade}
            onChange={(event) => setCidade(event.target.value)}
          />

          <button type="submit">Salvar Informações</button>
        </form>
      )}
    </div>
  );
}

export default InfoPessoal;
