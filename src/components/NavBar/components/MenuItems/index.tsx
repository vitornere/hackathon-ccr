import { useRouter } from 'next/router';
import RightArrowImg from '../../../../assets/images/right-arrow.svg';
import { Container } from './styles';

export default function MenuItems() {
  const router = useRouter();
  return (
    <Container className="menu-items">
      {router.pathname === '/' ? (
        <>
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
              <a href="#how">Como funciona</a>
            </li>
          </ul>
          <button type="button" onClick={() => router.push('/login')}>
            <span>Login</span>
            <img src={RightArrowImg} alt="Login Right Arrow" />
          </button>
        </>
      ) : (
        <button type="button" onClick={() => router.back()}>
          <span>Voltar</span>
          <img src={RightArrowImg} alt="Login Right Arrow" />
        </button>
      )}
    </Container>
  );
}
