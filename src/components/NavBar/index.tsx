import { Container } from './styles';
import LogoImg from '../../assets/images/logo.svg';
import DesktopMenu from './components/DesktopMenu';
import MobileMenu from './components/MobileMenu';

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
