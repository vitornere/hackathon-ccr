import { Container } from './styles';
import WorksImg from '../../assets/images/works.svg';

export default function HowSection() {
  return (
    <Container id="how">
      <div className="title">
        <h1>COMO FUNCIONA?</h1>
        <img src={WorksImg} alt="Works" />
      </div>
      <div className="list">
        <div className="list-item">
          <h2>1 - Mentores = Universitários</h2>
          <div className="description">
            Alunos de Universidade, junto com um orientador (professor) idealiza
            um projeto e apresenta para escolas públicas
          </div>
          <div className="benefits">
            VANTAGENS: Gerir um projeto como mentor, conseguir horas
            complementares da faculdade e ter seu perfil profissional disponível
            para as empresas. Pode ser contratado como treinee, JR ou estagiário
          </div>
        </div>

        <div className="list-item">
          <h2>2 - Mentorados = Estudante da rede pública</h2>
          <div className="description">
            A escola forma equipes de alunos que cursam o ensino médio para
            desenvolver o projeto junto aos universitários.
          </div>
          <div className="benefits">
            VANTAGENS: Aprendem processos para se profissionalizar e podem
            conseguir um emprego com o programa Jovem Aprendiz
          </div>
        </div>

        <div className="list-item">
          <h2>3 - Investidores = Empresas</h2>
          <div className="description">
            As empresas compram o projeto ou submetem seus projetos para serem
            desenvolvidos pelos jovens universítarios e os estudantes das
            escolas públicas
          </div>
          <div className="benefits">
            VANTAGENS: Podem comprar os projetos que facilitem seu serviço,
            podem contratar equipes para resolver projetos, podem achar bons
            colaboradores e realizar um trabalho social
          </div>
        </div>
      </div>
    </Container>
  );
}
