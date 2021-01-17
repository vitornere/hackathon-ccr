import { Container } from './styles';
import RightArrowImg from '../../assets/images/right-arrow.svg';

export default function ProjectSection() {
  return (
    <Container id="projects">
      <span>Conheça e apoie ou traga seu projeto para mentorando!</span>

      <article>
        <img src="" alt="" />
        <div>
          <span className="title">
            DecoreUX — Design de Serviços na Arquitetura e Decoração de
            Ambientes
          </span>
          <ul>
            <li>ÁREA: Tecnologia</li>
            <li>Problema resolvido: xyffgfgfb</li>
            <li>Mentores: Universidade Federal do ABC</li>
            <li>Mentorados: EE PS. Generoso Alves de Siqueira</li>
          </ul>
          <a>
            <span>Conheça o projeto</span>
            <img src={RightArrowImg} alt="Right Arrow" />
          </a>
        </div>
      </article>
    </Container>
  );
}
