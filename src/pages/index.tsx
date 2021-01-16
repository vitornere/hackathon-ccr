import Head from 'next/head';
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Mentorando</h1>
      </main>

      <footer>
        <a href="#">Powered by Time 64</a>
      </footer>
    </Container>
  );
}
