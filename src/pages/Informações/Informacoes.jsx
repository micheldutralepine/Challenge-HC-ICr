import "../Informações/Informacoes.css";

function Informacoes() {
  return (
    <>
      <section id="secao3">
      <h1>Informações</h1>
        <div className="container-informacoes">
          
          <div className=" container_1">
            <h1>Serviço de Atendimento Especial: Atende+</h1>
            <br />
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
          <div className=" container_1">
            <h1>Destribuição de fraldas em São Paulo</h1>
            <br />
            <p>
            A Secretaria Municipal de Saúde de São Paulo estabelece critérios para dispensar fraldas a pessoas com incontinência urinária ou fecal.

                Inclusão baseada em condições médicas específicas.
                  <br />
                  <br />

                -Limite de 120 fraldas por mês para incontinência urinária e 30 para fecal.
                  <br />
                -Documentos necessários incluem RG, CPF, CNS e comprovante de endereço.
                  <br />
                -Renovação anual do processo e registro no SIGA IPD.
                  <br />
                -Critérios de desligamento incluem ausência prolongada e má conduta.
                  <br />
                Referências médicas e formulários específicos são essenciais.
            </p>
               <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjJxZiuwpSGAxUHpZUCHSsEDQ4QFnoECBMQAQ&url=https%3A%2F%2Fwww.prefeitura.sp.gov.br%2Fcidade%2Fsecretarias%2Fupload%2Fsaude%2FOrientacao_dispensacao_fraldas_12_6_2023.pdf&usg=AOvVaw1ihgd432E3PGuq1Fu8ylW9&opi=89978449"> mais informaçoes e formulario </a>
          </div>
          <div className=" container_1">
            <h1>Como chegar</h1>
            <br />
            
          
            <iframe className="mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.3580490102017!2d-46.67538992582517!3d-23.55558076137763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5787201231c3%3A0x3f33dfaadb4d9d13!2sInstituto%20da%20Crian%C3%A7a%20e%20do%20Adolescente%20-%20ICr%20HCFMUSP!5e0!3m2!1spt-BR!2sbr!4v1700446609891!5m2!1spt-BR!2sbr"
              width="600"
              height="450"
              style={{ border: "0" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <p>Rua Alves Guimarães 475, São Paulo, SP, 05410-000 </p>
          </div>
          <div className="container_1">
            <h1>Telefones e Horários</h1>
            <br />
            
            <p><b>ICr Instituto da Criança e do Adolescente</b></p>
            <br />
            <p><b>tel:</b>(11) 2661-8500</p>
            <br />
            <p><b>Marcação de consultas</b> – de 2ª a 6ª feira</p>
            <p>ICr – (11) 2661-8635, das 7:00 às 16:00</p>
            <br />
            <p>ITACI – (11) 2661-8962 ou (11) 2661-8963, das 14:00 às 16:00</p>
            <br />
            <p><b>Agendamento de examesAgendamento de exames – de 2ª a 6ª feira
</b></p>
<br />
<p>(11) 2661-8548 ou (11) 2661-8670 ou pessoalmente no 2º andar do ICr – das 11:00 às 15:00

</p>

          </div>
        </div>
      </section>
    </>
  );
}

export default Informacoes;