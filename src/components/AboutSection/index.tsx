import { Container } from './styles';
import IdeaImage from '../../assets/images/idea.svg';

export default function AboutSection() {
  return (
    <Container id="about">
      <img src={IdeaImage} alt="Idea" />
      <div>
        <h1>SOBRE O PROJETO</h1>
        <span>
          A mentorando entende que o início de um projeto pode ser desafiador, e
          é por isso que a plataforma foi criada. Ela quebra as barreiras e
          conecta jovens talentosos com as instituições certas. Os projetos
          incríveis que antes eram arquivados ou demoravam anos para sair do
          papel por falta de financiamento ou networking, terão uma visibilidade
          sem fronteiras na nossa vitrine, e qualquer instituição do mundo pode
          ajudar os jovens a tornar o projeto uma realidade.
        </span>
      </div>
    </Container>
  );
}
