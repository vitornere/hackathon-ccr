import { useRouter } from 'next/router';
import { Container } from './styles';
import LogoImg from '../../assets/images/logo.svg';
import RightArrowImg from '../../assets/images/right-arrow.svg';

export default function NavBar() {
  const router = useRouter();

  return (
    <Container>
      <img src={LogoImg} alt="Mentorando Logo" />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">Sobre o projeto</a>
        </li>
        <li>
          <a href="#projects">Vitrine de projetos</a>
        </li>
        <li>
          <a href="#participate">Como participar</a>
        </li>
      </ul>
      <button type="button" onClick={() => router.push('/login')}>
        <span>Login</span>
        <img src={RightArrowImg} alt="Login Right Arrow" />
      </button>
    </Container>
  );
}
