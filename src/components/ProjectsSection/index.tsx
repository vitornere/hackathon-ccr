import { Container, Article } from './styles';
import RightArrowImg from '../../assets/images/right-arrow.svg';
import { Project } from '../../pages/api/projects';

interface Props {
  projects: Project[];
}

export default function ProjectSection({ projects }: Props) {
  return (
    <Container id="projects">
      <h1>VITRINE DE PROJETOS</h1>

      <span>Conheça e apoie ou traga seu projeto para mentorando!</span>

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
