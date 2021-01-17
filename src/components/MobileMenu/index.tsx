import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { Container, BurgerButtom } from './styles';
import RightArrowImg from '../../assets/images/right-arrow.svg';
import Burger from '../Burger';
import { useOnClickOutside } from '../../hooks/clickOutside';

export default function MobileMenu() {
  const router = useRouter();
  const [menuOpened, setMenuOpened] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setMenuOpened(false));
  return (
    <div ref={node}>
      <Container menuOpened={menuOpened}>
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
      </Container>
      <BurgerButtom onClick={() => setMenuOpened(!menuOpened)}>
        <Burger menuOpened={menuOpened} />
      </BurgerButtom>
    </div>
  );
}
