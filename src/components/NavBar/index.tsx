import { Container } from './styles';
import LogoImg from '../../assets/images/logo.svg';
import DesktopMenu from '../DesktopMenu';
import MobileMenu from '../MobileMenu';

export default function NavBar() {
  return (
    <Container>
      <a href="#home">
        <img src={LogoImg} alt="Mentorando Logo" />
      </a>

      <DesktopMenu />
      <MobileMenu />
    </Container>
  );
}
