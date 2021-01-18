import { Container } from '../../styles/register/success';
import ScheduleImg from '../../assets/images/schedule.svg';

export default function Success() {
  return (
    <Container>
      <img src={ScheduleImg} alt="Schedule" />
      <div>
        <h1>Cadastro Concluído com Sucesso!</h1>
        <p>Mentores ou Escolas, parabéns!</p>
        <p>Será uma jornada de muito aprendizado</p>
        <span>
          Confira seu e-mail para entender os próximos passos do procesos!
        </span>
      </div>
    </Container>
  );
}
