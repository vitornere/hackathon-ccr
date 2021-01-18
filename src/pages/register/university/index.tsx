import { useRouter } from 'next/router';
import Input from '../../../components/Input';
import { Container } from '../../../styles/register/university';
import WomanIdeaImg from '../../../assets/images/woman-idea.svg';
import ClipImg from '../../../assets/images/clip.svg';
import MagnifierImg from '../../../assets/images/magnifier.svg';

export default function RegisterUniversity() {
  const router = useRouter();

  return (
    <Container>
      <h1>Ah que alegria ter você como mentor, vamos começar?</h1>

      <form>
        <fieldset className="first">
          <img src={WomanIdeaImg} alt="Woman Idea" />
          <div>
            <h2>1 - Em quais das áreas abaixo seu projeto se enquadra?</h2>
            <div>
              <button type="button">Ciências Humanas e suas Tecnologias</button>
              <button type="button">
                Ciências da Natureza e suas Tecnologias
              </button>
              <button type="button">
                Linguagens, Códigos e suas Tecnologias.
              </button>
              <button type="button">Matemática e suas Tecnologias.</button>
            </div>
          </div>
        </fieldset>

        <fieldset className="second">
          <h2>2 - Apresente sua equipe</h2>
          <div>
            <div>
              <Input
                id="Instituição de Ensino"
                name="Instituição de Ensino"
                label="Instituição de Ensino"
                placeholder="Instituição de Ensino"
              />
              <Input
                id="Nome do docente (orientador)"
                name="Nome do docente (orientador)"
                label="Nome do docente (orientador)"
                placeholder="Nome do docente (orientador)"
              />
              <Input
                id="Membro 1"
                name="Membro 1"
                label="Membro 1"
                placeholder="Membro 1"
              />
              <Input
                id="Membro 2"
                name="Membro 2"
                label="Membro 2"
                placeholder="Membro 2"
              />
            </div>
            <div>
              <Input
                id="Local"
                name="Local"
                label="Local"
                placeholder="Local"
              />
              <Input
                id="Especialização do docente"
                name="Especialização do docente"
                label="Especialização do docente"
                placeholder="Especialização do docente"
              />
              <Input
                id="Responsável por: "
                name="Responsável por: "
                label="Responsável por: "
                placeholder="Responsável por: "
              />
              <Input
                id="Responsável por: "
                name="Responsável por: "
                label="Responsável por: "
                placeholder="Responsável por: "
              />
            </div>
          </div>
        </fieldset>

        <fieldset className="third">
          <h2>3 - Apresente o ptojeto</h2>
          <Input
            id="NOME DO PROJETO"
            name="NOME DO PROJETO"
            label="NOME DO PROJETO"
            placeholder="NOME DO PROJETO"
          />
          <div className="about-project">
            <Input
              id="FALE SOBRE O PROBLEMA QUE SEU PROJETO IRÁ RESOLVER"
              name="FALE SOBRE O PROBLEMA QUE SEU PROJETO IRÁ RESOLVER"
              label="FALE SOBRE O PROBLEMA QUE SEU PROJETO IRÁ RESOLVER"
              placeholder="FALE SOBRE O PROBLEMA QUE SEU PROJETO IRÁ RESOLVER"
              type=""
            />
          </div>
          <div className="file">
            <button type="submit">
              <span>ANEXE AQUI OS DOCUMENTOS DO PROJETO</span>
              <img src={ClipImg} alt="Clip" />
            </button>
          </div>
          <div className="project-type">
            <button type="button">Projeto on-line</button>
            <button type="button">Projeto presencial</button>
            <button type="button">Híbrido</button>
          </div>
          <div className="location">
            <Input
              id="instituição de ensino"
              name="instituição de ensino"
              placeholder="instituição de ensino"
            />
            <Input id="Local" name="Local" placeholder="Local" />
            <Input
              id="Nome da Instituição"
              name="Nome da Instituição"
              placeholder="Nome da Instituição"
            />
            <div className="input">
              <button
                type="button"
                onClick={() => router.push('/register/university/search')}
              >
                <img src={MagnifierImg} alt="Search University" />
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </Container>
  );
}
