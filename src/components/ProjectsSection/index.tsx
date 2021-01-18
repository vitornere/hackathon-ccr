import { Container, Article } from './styles';
import RightArrowImg from '../../assets/images/right-arrow.svg';
import { Project } from '../../pages';

interface Props {
  projects: Project[];
}

export default function ProjectSection({ projects }: Props) {
  return (
    <Container id="projects">
      <h1>VITRINE DE PROJETOS</h1>

      <span>
        A mentorando entende que o início de um projeto pode ser desafiador, e é
        por isso que a plataforma foi criada. Ela quebra as barreiras e conecta
        jovens talentosos com as instituições certas. Os projetos incríveis que
        antes eram arquivados ou demoravam anos para sair do papel por falta de
        financiamento ou networking, terão uma visibilidade sem fronteiras na
        nossa vitrine, e qualquer instituição do mundo pode ajudar os jovens a
        tornar o projeto uma realidade.
      </span>

      {projects &&
        projects.map((project, index) => (
          <Article logoImg={project.logo} key={`${project.title + index}`}>
            <div className="logo" />
            <div className="content">
              <span className="title">{project.title}</span>
              <ul>
                <li>{`ÁREA: ${project.field}`}</li>
                <li>{`Problema resolvido: ${project.solvedProblem}`}</li>
                <li>{`Mentores: ${project.mentors}`}</li>
                <li>{`Mentorados: ${project.mentored}`}</li>
              </ul>
              <a className="about-project">
                <span>Conheça o projeto</span>
                <img src={RightArrowImg} alt="Right Arrow" />
              </a>
            </div>
          </Article>
        ))}

      <a className="all-projects">
        <span>VEJA TODOS OS PROJETOS</span>
        <img src={RightArrowImg} alt="Right Arrow" />
      </a>
    </Container>
  );
}
