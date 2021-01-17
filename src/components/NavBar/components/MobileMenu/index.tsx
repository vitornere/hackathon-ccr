import { useRef, useState } from 'react';
import { Container, BurgerButtom } from './styles';
import Burger from '../../../Burger';
import { useOnClickOutside } from '../../../../hooks/clickOutside';
import MenuItems from '../MenuItems';

export default function MobileMenu() {
  const [menuOpened, setMenuOpened] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setMenuOpened(false));
  return (
    <div ref={node}>
      <Container menuOpened={menuOpened}>
        <MenuItems />
      </Container>
      <BurgerButtom onClick={() => setMenuOpened(!menuOpened)}>
        <Burger menuOpened={menuOpened} />
      </BurgerButtom>
    </div>
  );
}
