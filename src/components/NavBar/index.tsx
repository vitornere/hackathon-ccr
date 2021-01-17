import Link from 'next/link';
import { Container } from './styles';
import LogoImg from '../../assets/images/logo.svg';
import DesktopMenu from './components/DesktopMenu';
import MobileMenu from './components/MobileMenu';

export default function NavBar() {
  return (
    <Container>
      <Link href="/">
        <a>
          <img src={LogoImg} alt="Mentorando Logo" />
        </a>
      </Link>

      <DesktopMenu />
      <MobileMenu />
    </Container>
  );
}
