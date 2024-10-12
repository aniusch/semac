import React from 'react';
import './SobreTerceiraEdicao.css'; 

const SobreTerceiraEdicao = () => {
  return (
    <section id='sobre-terceira-edicao' className="event-section">
      <div className="event-content">
        <div className="gradient-line"></div> 
        <h1>Sobre o Evento</h1>
        <p>
          A III Semana das Engenharias de Automação e Computação da UFMT é um evento que reúne estudantes e profissionais para explorar inovações em automação e computação. Com palestras, workshops e atividades interativas, é uma oportunidade para aprender, trocar experiências e fazer networking, impulsionando o desenvolvimento dos participantes.
        </p>
        <button className="inscreva-se-button">Inscreva-se</button>
      </div>
      <div className="event-details">
        <div className="detail-item palestras">
          <img src="/icone_palestra.jpg" alt="Palestras" className="img-palestras" />
          <div>
            <h3>Palestras</h3>
            <p>Com temas atuais e relevantes</p>
          </div>
        </div>
        <div className="detail-item minicursos">
          <div>
            <h3>Minicursos</h3>
            <p>Aprendizado de conceitos importantes da área</p>
          </div>
          <img src="/icone_minicurso.jpg" alt="Minicursos" className="img-minicursos" />
        </div>
        <div className="detail-item workshops">
          <img src="/icone_workshop.jpg" alt="Workshops" className="img-workshops" />
          <div>
            <h3>Workshops</h3>
            <p>Uma oportunidade imperdível de troca de conhecimento</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreTerceiraEdicao;
