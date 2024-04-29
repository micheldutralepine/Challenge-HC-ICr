import HistoricoTratamento from "./HistoricoTratamento";
import InfoPessoal from "./Info-Pessoal";
import "./styles/PerfilPersonalizado.css";

function PerfilPersonalizado() {
  return (
    <section className="perfil-personalizado">
      <h1>Perfil Personalizado</h1>
      <div className="conteudo">
        <InfoPessoal />
        <HistoricoTratamento />
      </div>
    </section>
  );
}

export default PerfilPersonalizado;
