import { useState } from "react";

function HistoricoTratamento() {
  const [tratamentos, setTratamentos] = useState([]);
  const [procedimento, setProcedimento] = useState("");
  const [data, setData] = useState("");
  const [observacao, setObservacao] = useState("");
  const [mostrarHistorico, setMostrarHistorico] = useState(false);

  const handleAdicionarTratamento = () => {
    if (procedimento && data) {
      const novoTratamento = {
        procedimento: procedimento,
        data: data,
        observacao: observacao,
      };
      setTratamentos([...tratamentos, novoTratamento]);
      setProcedimento("");
      setData("");
      setObservacao("");
    } else {
      alert("Preencha todos os campos!");
    }
  };

  const toggleMostrarHistorico = () => {
    setMostrarHistorico(!mostrarHistorico);
  };

  return (
    <div className="historico-tratamento">
      <h2>Histórico de Tratamento</h2>
      {mostrarHistorico && (
        <div className="ver-historico">
          <ul>
            {tratamentos.map((tratamento, index) => (
              <li key={index}>
                <strong>• Procedimento:</strong> {tratamento.procedimento}
                <br />
                <strong>➡ Data:</strong> {tratamento.data} <br />
                <strong>➡ Observação:</strong> {tratamento.observacao}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!mostrarHistorico && (
        <div>
          <label htmlFor="procedimento">Procedimento:</label>
          <input
            type="text"
            id="procedimento"
            value={procedimento}
            onChange={(event) => setProcedimento(event.target.value)}
          />
          <div>
            <label htmlFor="data">Data:</label>
            <input
              type="date"
              id="data"
              value={data}
              onChange={(event) => setData(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="observacao">Observação:</label>
            <textarea
              id="observacao"
              value={observacao}
              onChange={(event) => setObservacao(event.target.value)}
            ></textarea>
          </div>
        </div>
      )}

      <div className="botoes-container">
        <button className="add-tratamento" onClick={handleAdicionarTratamento}>
          Adicionar Tratamento
        </button>
        <button onClick={toggleMostrarHistorico}>
          {mostrarHistorico ? "Esconder Histórico" : "Mostrar Histórico"}
        </button>
      </div>
    </div>
  );
}

export default HistoricoTratamento;
