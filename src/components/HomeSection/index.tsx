import { Container } from './styles';
import TogetherImg from '../../assets/images/together.png';

export default function HomeSection() {
  return (
    <Container id="home">
      <article>
        <h1>Transmitir conhecimento gera oportunidades</h1>
        <span>
          Criamos a Mentorama para unir universitários, jovens de escolas
          públicas e empresas, para desenvolver novos projetos e crescerem
          juntos
        </span>
        <button type="button">UNIVERSITÁRIOS</button>
        <button type="button">ESCOLAS PÚBLICAS</button>
        <button type="button">EMPRESAS</button>
      </article>
      <div>
        <img src={TogetherImg} alt="Imagem Juntos Somos Mais Fortes" />
      </div>
    </Container>
  );
}
