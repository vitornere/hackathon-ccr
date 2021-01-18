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
        <link rel="icon" href="/favicon.ico" sizes="200×194" />

        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/icons/pwa-192x192.png"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="/icons/apple-touch-icon-180x180.png"
          sizes="180x180"
        />

        <meta name="msapplication-config" content="/icons/browserconfig.xml" />

        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />

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
