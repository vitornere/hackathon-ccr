import { Container } from './styles';
import IdeaImage from '../../assets/images/idea.svg';

export default function AboutSection() {
  return (
    <Container id="about">
      <img src={IdeaImage} alt="Idea" />
      <div>
        <h1>SOBRE O PROJETO</h1>
        <span>
          Criamos a Mentorando para unir universitários, jovens de escolas
          públicas e empresas, para desenvolver novos projetos e crescerem
          juntos
        </span>
      </div>
    </Container>
  );
}
