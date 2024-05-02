import "./Educacao-Ludica.css";

function EducacaoLudica() {
  return (
    <>
      <section id="secao5">
        <div className="secao5-container">
          <h1>Educação Lúdica</h1>
          <h2>Vídeos Educativos</h2>
          <p>
            Selecione um dos nossos vídeos educativos para assistir e aprender
            de forma divertida!
          </p>
          <div className="videos-container">
            <div className="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/SS4HMzDs2Bc?si=mh7QmmmAa982CLBh"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/SS4HMzDs2Bc?si=mh7QmmmAa982CLBh"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/SS4HMzDs2Bc?si=mh7QmmmAa982CLBh"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            <div className="video">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/SS4HMzDs2Bc?si=mh7QmmmAa982CLBh"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <section id="kahoot-section">
        <div className="kahoot-container">
          <h2>Jogos Interativos</h2>
          <p>
            Divirta-se com o nosso quiz sobre saúde infantil no Instituto da
            Criança e do Adolescente.
          </p>
          <div className="kahoot-content">
            <a
              href="https://kahoot.it/challenge/?quiz-id=7ac4832b-5574-42d5-9c00-39dc7ef1217b&single-player=true"
              target="_blank"
              class="botao-jogar"
            >
              Clique para jogar!
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default EducacaoLudica;
