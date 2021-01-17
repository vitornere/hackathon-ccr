import { Container } from './styles';

interface Props {
  menuOpened: boolean;
}

export default function Burger({ menuOpened }: Props) {
  return (
    <Container menuOpened={menuOpened}>
      <div />
      <div />
      <div />
    </Container>
  );
}
