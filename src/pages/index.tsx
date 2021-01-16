import Head from 'next/head';
import NavBar from '../components/NavBar';
import { Container } from '../styles';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Mentorando</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
      </main>

      <footer>@2021 Powered by Team 64</footer>
    </Container>
  );
}
