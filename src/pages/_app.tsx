import { AppProps } from 'next/dist/next-server/lib/router/router';
import React from 'react';
import Head from 'next/head';
import GlobalStyle from '../styles/global';
import NavBar from '../components/NavBar';
import logoImg from '../assets/images/logo.svg';
import instagramImg from '../assets/images/instagram.svg';
import linkedinImg from '../assets/images/linkedin.svg';
import twitterImg from '../assets/images/twitter.svg';
import { Container } from '../styles/_app';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <GlobalStyle />
      <Head>
        <title>Mentorando</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Criamos a Mentorando para unir universitários, jovens de escolas públicas e empresas, para desenvolver novos projetos e crescerem juntos"
        />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta
          name="keywords"
          content="Projetos Sociais, Horas Complementares, Escola Pública, Universitários, Empresas"
        />
      </Head>
      <main>
        <NavBar />
        <Component {...pageProps} />
      </main>
      <footer>
        <img src={logoImg} alt="Logo" />
        <div>
          <img src={instagramImg} alt="Instagram" />
          <img src={linkedinImg} alt="LinkedIn" />
          <img src={twitterImg} alt="Twitter" />
        </div>
        <span>© 2021 Mentorando, Inc.</span>
      </footer>
    </Container>
  );
}
