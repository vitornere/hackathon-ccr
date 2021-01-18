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
            Alunos de universidades, junto com um professor orientador,
            idealizam um projeto e apresentam para as escolas públicas.
          </div>
          <div className="benefits">
            VANTAGENS: Gerir um projeto como mentor, conseguir horas
            complementares da faculdade, ganhar dinheiro com os projetos
            aprovados e ter seu perfil profissional disponível para as empresas.
            Podem ser contratados como trainee, JR ou estagiário.
          </div>
        </div>

        <div className="list-item">
          <h2>2 - Mentorados = Estudantes</h2>
          <div className="description">
            A escola forma equipes de alunos que cursam o ensino médio para
            desenvolver um projeto junto aos universitários.
          </div>
          <div className="benefits">
            VANTAGENS: Estimular a prática do conteúdo através dos projetos
            mentorados, aprender processos para se profissionalizar e ganhar
            dinheiro com os projetos aprovados. Podem ser contratados pelo
            programa Jovem Aprendiz.
          </div>
        </div>

        <div className="list-item">
          <h2>3 - Orientadores = Professores</h2>
          <div className="description">
            Orientam seus alunos, de ensino médio ou universitários, na
            utilização da plataforma e submissão de projetos, relacionando com
            os ensinamentos em sala de aula e estimulando a prática.
          </div>
          <div className="benefits">
            VANTAGENS: Conquistar mérito acadêmico com as orientações e ganhar
            dinheiro com os projetos aprovados.
          </div>
        </div>

        <div className="list-item">
          <h2>4 - Investidores = Empresas</h2>
          <div className="description">
            As empresas podem investir nos projetos submetidos ou submeterem
            outros para serem desenvolvidos pelos estudantes e mentores.
          </div>
          <div className="benefits">
            VANTAGENS: Investir em projetos que auxiliem o seu negócio,
            contratar equipes para desenvolver novos projetos, encontrar novos
            talentos e incentivar um projeto social.
          </div>
        </div>
      </div>
    </Container>
  );
}
