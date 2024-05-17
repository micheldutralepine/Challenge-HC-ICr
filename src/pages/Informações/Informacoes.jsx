import "../Informações/Informacoes.css";

function Informacoes() {
  return (
    <>
      <section id="secao3">
      <h1>Informações</h1>
        <div className="container-informacoes">
          
          <div className="atende-mais container_1">
            <h2>Serviço de Atendimento Especial: Atende+</h2>
            <p>
              O Serviço de Atendimento Especial é uma modalidade de transporte
              gratuito, porta a porta, destinado às pessoas com autismo,
              surdocegueira ou deficiência física severa. Se você precisa de
              assistência adicional, o Atende+ está aqui para ajudar.
            </p>
            <p>
              Horário do serviço: das 7h às 20h, de segunda-feira a domingo,
              exceto aos feriados.
            </p>
            <br />
            <p>
            Documentos necessários:
              Usuário:
                <br />
              1. CPF e RG ou certidão de nascimento em caso de menor de idade (originais e cópias).
              2. Comprovante de endereço (original e cópia), com CEP (conta de água, luz ou telefone).
              <br />
              <br />
              Responsável:
              <br />
              1. RG (original).
              2. Comprovante de endereço (original), com CEP (conta de água, luz ou telefone).
            </p>
            <a href="https://www.sptrans.com.br/atende/requisitos">
              Requisitos/Inscrição no Atende+
            </a>
            <p>
              Caso você já tenha cadastro, abaixo há o link de acesso ao portal
              deles:
            </p>
            <a href="http://atende.sptrans.com.br/">
              Acesso ao sistema do Atende+
            </a>

          </div>
          <div className="como-chegar container_2">
            <h2>Localização</h2>
            <p>
              Clique em "Rotas" e veja as principais informações do seu trajeto
            </p>
          </div>
          <div className="local-maps container_4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3580490102017!2d-46.67538992582517!3d-23.55558076137763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5787201231c3%3A0x3f33dfaadb4d9d13!2sInstituto%20da%20Crian%C3%A7a%20e%20do%20Adolescente%20-%20ICr%20HCFMUSP!5e0!3m2!1spt-BR!2sbr!4v1700446609891!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className=" container_3">

          </div>
        </div>
      </section>
    </>
  );
}

export default Informacoes;
